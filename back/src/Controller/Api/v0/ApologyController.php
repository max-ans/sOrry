<?php

namespace App\Controller\Api\v0;

use App\Repository\ApologyRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ApologyController extends AbstractController
{
    /**
     * @Route("/api/v0/apologies", name="api_v0_apologies", methods={"GET"})
     */
    public function list(ApologyRepository $apologyRepository, ObjectNormalizer $normalizer)
    {
        // ask apology repository to recovery all apology 
        $allApologies = $apologyRepository->findAll();
        
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
