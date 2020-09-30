<?php

namespace App\Controller\Api\v0;

use App\Repository\CommentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class CommentController extends AbstractController
{

    private $normalizer;

    public function __construct(ObjectNormalizer $normalizer)
    {
        $this->normalizer = $normalizer;
    }

    /**
     * @Route("/api/v0/comment", name="api_v0_comment", methods={"GET"})
     */
    public function list (CommentRepository $commentRepository , Request $request )
    {

        if ($request->query->get('apology')) {
            $apologyId = intval($request->query->get('apology'));
            
            $commentsByApology = $commentRepository->findByApology($apologyId);

            $serializer = new Serializer([new DateTimeNormalizer(), $this->normalizer]);

            $commentsByApologyNormalized = $serializer->normalize($commentsByApology, null, ['groups' => 'comment_groups']);

            return $this->json([
                $commentsByApologyNormalized,
            ]);


        }

        $allComments = $commentRepository->findAllwithDatas();

        $serializer = new Serializer([new DateTimeNormalizer(), $this->normalizer]);

        $allCommentsNormalized = $serializer->normalize($allComments, null, ['groups' => 'comment_groups']);


        return $this->json([
            $allCommentsNormalized,
        ]);
    }
}
