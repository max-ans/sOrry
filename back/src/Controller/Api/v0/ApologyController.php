<?php

namespace App\Controller\Api\v0;

use App\Entity\Apology;
use App\Form\ApologyType;
use App\Repository\ApologyRepository;
use App\Repository\UserRepository;
use App\Service\Slugger;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ApologyController extends AbstractController
{
    /**
     * @Route("/api/v0/apologies", name="api_v0_apologies_list", methods={"GET"})
     */
    public function list(ApologyRepository $apologyRepository, ObjectNormalizer $normalizer, Request $request, UserRepository $userRepository)
    {

        if ($request->query->get('best')){

            // transform type of request query value
            $numberOfApologies = intval($request->query->get('best'));
            
            $bestApologies = $apologyRepository->findBestApologies($numberOfApologies);

            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);
          

            // Strucure response
            $normalizedBestApologies = $serializer->normalize($bestApologies, null, ['groups' => 'apologies_groups']);
            

            return $this->json([

                $normalizedBestApologies,

            ]);

        } else if ($request->query->get('author')) {

            $authorId = intval($request->query->get('author'));

            $AuthorApologies = $apologyRepository->findByAuthor($authorId);


            // if User is in Database
            if ($userRepository->findBy(['id' => $authorId])) {
                
                $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);
    
                // Strucure response
                $normalizedAuthorApologies = $serializer->normalize($AuthorApologies, null, ['groups' => 'apologies_groups']);
                
               
                return $this->json([
    
                    $normalizedAuthorApologies,
    
                ]);
            } else {

                return $this->json(
                    ['message' => 'Aucun utilisateur ne correspond'], 404
                ); 
            }
            

        } 

        // ask apology repository to recovery all apology 
        $allApologies = $apologyRepository->findAllApologies();
        
        
        if ( $allApologies ) {
            // instantiation of Serializer for to structure response
            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);
          

            // Strucure response
            $normalizedApologies = $serializer->normalize($allApologies, null, ['groups' => 'apologies_groups']);
            

            return $this->json([

                $normalizedApologies,

            ]);
        } else {

            return $this->json(
                ['message' => 'Il n\' y a actuellement pas d\'excuses '], 404
            );

        }


    }

    /**
     * @Route("/api/v0/apologies/count" , name="api_v0_apologies_count", methods={"GET"})
     */
    public function count (ApologyRepository $apologyRepository) 
    {
         // ask apology repository to recovery all apology 
         $allApologies = $apologyRepository->findAll();
         $countApologies = count($allApologies);

         return $this->json([
             'allApologiesNumber' => $countApologies,
         ]);

    }

    /**
     * @Route("/api/v0/apologies" , name="api_v0_apologies_add" , methods={"POST"})
     */
    public function add (Request $request, Slugger $slugger, ApologyRepository $apologyRepository, ObjectNormalizer $normalizer ) 
    {
        $apology = new Apology;

        // create form for recovery informations 
        $form = $this->createForm(ApologyType::class, $apology, ['csrf_protection' => false]);
        
        // recovery information of new Apology
        $jsonText = $request->getContent();

        // update jsonText structure
        $jsonArray = json_decode($jsonText, true);

        $form->submit($jsonArray, true);

        // if request content is Ok 
        if ($form->isValid()){
            // set Slug of apology
            $apology->setSlug($slugger->slugify($apology->getTitle()));
            // set created date
            $apology->setCreatedAt(new DateTime());

            $apology->setLikes(0);
            
            if ($apologyRepository->findOneBy(['slug'=> $apology->getSlug()])) {
                return $this->json([
                    "message" => "This apology already exist",
                ], 409 );
            }
            
            // dd($apology);
            $em = $this->getDoctrine()->getManager();
            $em->persist($apology);
            $em->flush();

            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

            $normalizedApologies = $serializer->normalize($apology, null , ['groups' => 'apologies_groups'] );

            return $this->json([
                $normalizedApologies,
            ], 201);

        }

        return $this->json((string) $form->getErrors(true, false), 400);
    }

    /**
     * @Route("/api/v0/apologies/{slug}" , name="api_v0_apologies_edit" , methods={"PATCH"})
     */
    public function edit (Apology $apology, ApologyRepository $apologyRepository, Request $request, Slugger $slugger, ObjectNormalizer $normalizer) 
    {
        

        $jsonArray = json_decode($request->getContent(), true);

        $form = $this->createForm(ApologyType::class, $apology, ['csrf_protection' => false]);
        
        $form->submit($jsonArray, true);

        if ($form->isValid()){
           
            if($apology->getSlug() !==  $slugger->slugify($apology->getTitle()) ){

                if ($apologyRepository->findOneBy(['slug' => $slugger->slugify($apology->getTitle())])) {

                    return $this->json(['message' => 'This apology title already exists'], 409);

                }
            }
            // dd($apology , $apology->getSlug(), $slugger->slugify($apology->getTitle()));  
            $apology->setSlug($slugger->slugify($apology->getTitle()));

            $em = $this->getDoctrine()->getManager();
            $em->flush();

            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

            $normalizedApologies = $serializer->normalize($apology, null , ['groups' => 'apologies_groups'] );

            return $this->json([
                $normalizedApologies,
            ], 201);
            
        }
       


        return $this->json((string) $form->getErrors(true, false), 400);
    }

}
