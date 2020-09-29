<?php

namespace App\Controller\Api\v0;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class UserController extends AbstractController
{
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
     * @Route("api/v0/user" , name="api_v0_user_add" , methods={"POST"})
     */
    public function add (ObjectNormalizer $normalizer, Request $request, UserRepository $userRepository)
    {
        $user = new User;

        $form = $this->createForm(UserType::class, $user, ['csrf_protection' => false]);

        $newUserInfos = json_decode($request->getContent(), true);


        $form->submit($newUserInfos);

        if ($form->isValid()){


            
            dd($user);
        
        }
       
        
        return $this->json((string) $form->getErrors(true, false), 400);
      
    }
}
