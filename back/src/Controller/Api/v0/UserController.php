<?php

namespace App\Controller\Api\v0;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
}
