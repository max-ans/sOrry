<?php

namespace App\Controller\Api\v0;

use App\Entity\Comment;
use App\Form\CommentType;
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

        if ($request->query->get('author')) {
            $authorId = intval($request->query->get('author'));
            
            $commentsByAuthor = $commentRepository->findByAuthor($authorId);
            
            $serializer = new Serializer([new DateTimeNormalizer(), $this->normalizer]);

            $commentsByAuthorNormalized = $serializer->normalize($commentsByAuthor, null, ['groups' => 'comment_groups']);

            return $this->json([
                $commentsByAuthorNormalized,
            ]);
        }

        $allComments = $commentRepository->findAllwithDatas();

        $serializer = new Serializer([new DateTimeNormalizer(), $this->normalizer]);

        $allCommentsNormalized = $serializer->normalize($allComments, null, ['groups' => 'comment_groups']);


        return $this->json([
            $allCommentsNormalized,
        ]);
    }

    /** 
     * @Route("/api/v0/comment" , name="api_v0_comment_add", methods={"POST"})
     */
    public function add (Request $request)
    {
        $comment = new Comment;

        $form = $this->createForm(CommentType::class, $comment, ['csrf_protection' => false]);

        $commentInfos = json_decode($request->getContent(), true);

        $form->submit($commentInfos, true);

        if ($form ->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($comment);
            $em->flush();

            $serializer = new Serializer([new DateTimeNormalizer(), $this->normalizer]);

            $commentNormalized = $serializer->normalize($comment, null, ['groups' => 'comment_groups']);

            return $this->json([
                $commentNormalized,
            ], 201);
        }

        return $this->json((string) $form->getErrors(true, false), 400);
    }

    /**
     * @Route("/api/v0/comment/{id}", name="api_v0_comment_edit", methods={"PATCH"})
     */
    public function edit (Comment $comment, Request $request)
    {
        $form = $this->createForm(CommentType::class, $comment, ['csrf_protection' => false]);

        $newCommentInfos = json_decode($request->getContent(), true);

        $form->submit($newCommentInfos, true);

        if ($form ->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($comment);
            $em->flush();

            $serializer = new Serializer([new DateTimeNormalizer(), $this->normalizer]);

            $commentNormalized = $serializer->normalize($comment, null, ['groups' => 'comment_groups']);

            return $this->json([
                $commentNormalized,
            ], 200);
        }

        return $this->json((string) $form->getErrors(true, false), 400);
    }

    /**
     * @Route("/api/v0/comment/{id}" , name="api_v0_comment_delete", methods={"DELETE"} )
     */
    public function delete (Comment $comment)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($comment);
        $em->flush();

        return $this->json([], 204);
    }
}
