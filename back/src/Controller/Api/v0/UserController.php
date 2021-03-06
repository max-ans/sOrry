<?php

namespace App\Controller\Api\v0;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class UserController extends AbstractController
{

    /**
     * @Route("/api/v0/user/login", name="api_v0_user_login", methods={"POST"})
     */
    public function login (Request $request, ObjectNormalizer $normalizer)
    {
        $user = $this->getUser();
        $user->setApiToken(uuid_create(UUID_TYPE_RANDOM)); 
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();      

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

        $normalizedUser = $serializer->normalize($user, null ,['groups' => 'user_groups']);

        return $this->json([
            $normalizedUser
        ]); 
    }

    /**
     * @Route("/api/v0/user/logout", name="api_v0_user_logout", methods={"POST"})
     */
    public function logout (Request $request, UserRepository $userRepository)
    {
        $userMail = json_decode($request->getContent(), true);
        
       if ($userRepository->findOneBy(['email' => $userMail['login']])) {

        $user = $userRepository->findOneBy(['email' => $userMail['login']]);
        
        $user->setApiToken(uuid_create(UUID_TYPE_RANDOM));

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();
        
        // request ok but no body returned -> http code = 204
        return $this->json([], 204);
           
       } 

       return $this->json([
           'message' => 'no user found'
       ], 404);
        
       

    }

    /**
     * @Route("/api/v0/user", name="api_v0_user_list" , methods={"GET"})
     */
    public function list(UserRepository $userRepository, ObjectNormalizer $normalizer)
    {
        $allUsers = $userRepository->findAll();

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

        $normalizedUsers = $serializer->normalize($allUsers, null, ['groups' => 'user_groups']);


        return $this->json([
            $normalizedUsers,
        ]);
    }

    /**
     * @Route("/api/v0/user/{id}" , name="api_v0_user_show" , methods={"GET"})
     */
    public function show(User $user, ObjectNormalizer $normalizer)
    {
        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

        $normalizedUser = $serializer->normalize($user, null, ['groups' => 'user_groups']);


        return $this->json([
            $normalizedUser,
        ]);
    }

    /**
     * @Route("/api/v0/user" , name="api_v0_user_add" , methods={"POST"})
     */
    public function add (ObjectNormalizer $normalizer, Request $request, UserRepository $userRepository, UserPasswordEncoderInterface $passwordEncoder )
    {
        $user = new User;

        $form = $this->createForm(UserType::class, $user, ['csrf_protection' => false]);

        $userInfos = json_decode($request->getContent(), true);


        $form->submit($userInfos);

        if ($form->isValid()){

            if ($userRepository->findOneBy(['email' => $user->getEmail()]))
            {
                return $this->json([
                    'message' => 'this user already exist',
                ], 409);
            }
            if ($userRepository->findOneBy(['nickname' => $user->getNickname()]))
            {
                return $this->json([
                    'message' => 'this nickname already exist',
                ], 409);
            }

            $userPassword = $user->getPassword();
            
            $user->setPassword($passwordEncoder->encodePassword($user, $userPassword));
            $user->setFirstname(ucfirst($user->getFirstname()));
            $user->setLastname(ucfirst($user->getLastname()));

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

            $normalizedUser = $serializer->normalize($user, null, ['groups' => 'user_groups']);

            return $this->json([
                $normalizedUser,
            ], 201);
        
        }
       
        
        return $this->json((string) $form->getErrors(true, false), 400);
    }

    /**
     * @Route("/api/v0/user/{nickname}", name="api_v0_user_edit", methods={"PATCH"})
     */
    public function edit (User $user, Request $request, UserRepository $userRepository, UserPasswordEncoderInterface $passwordEncoder, ObjectNormalizer $normalizer)
    {
        
        $form = $this->createForm(UserType::class, $user, ['csrf_protection' => false]);

        $newUserInfos = json_decode($request->getContent(), true);

        // save old user nickname
        $oldUserNickname = $user->getNickname();

        $form->submit($newUserInfos);
        
        if ($form->isValid()){
            
            // if new user nickname is not equal at old user nickname 
            if ( $user->getNickname() !== $oldUserNickname){
                // check if the new user nickname is unique
                if ($userRepository->findOneBy(['nickname' => $user->getNickname()]))
                {
                    return $this->json([
                        'message' => 'this nickname already exist',
                    ], 409);
                }
            }
        
            $userPassword = $user->getPassword();
            
            $user->setPassword($passwordEncoder->encodePassword($user, $userPassword));
            $user->setFirstname(ucfirst($user->getFirstname()));
            $user->setLastname(ucfirst($user->getLastname()));
            

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

            $normalizedUser = $serializer->normalize($user, null, ['groups' => 'user_groups']);

            return $this->json([
                $normalizedUser,
            ], 201);

        }

        return $this->json((string) $form->getErrors(true, false), 400);

    }

    /**
     * @Route("/api/v0/user/{nickname}" , name="api_v0_user_delete", methods={"DELETE"})
     */
    public function delete (User $user)
    {
        
        $em = $this->getDoctrine()->getManager();
        $em->remove($user);
        $em->flush();

        return $this->json([], 204);
    }
}
