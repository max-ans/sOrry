<?php

namespace App\Controller\Api\v0;

use App\Repository\ApologyRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ApologyController extends AbstractController
{
    /**
     * @Route("/api/v0/apologies", name="api_v0_apologies", methods={"GET"})
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
            

        } else {

            return $this->json(
                ['message' => 'Un problème est survenu, peut-être avez vous mal formulé votre requête?'], 400
            ); 
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

}
