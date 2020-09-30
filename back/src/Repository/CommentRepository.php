<?php

namespace App\Repository;

use App\Entity\Comment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Comment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Comment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Comment[]    findAll()
 * @method Comment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Comment::class);
    }

    public function findAllwithDatas ()
    {
        $qb = $this->createQueryBuilder('comment');
        $qb->leftJoin('comment.apology', 'apology');
        $qb->addSelect('apology');
        $qb->leftJoin('comment.author', 'user');
        $qb->addSelect('user');

        $query = $qb->getQuery();

        return $query->getResult();
    }
  
    public function findByApology ($apologyId)
    {
        $qb = $this->createQueryBuilder('comment');
        $qb->leftJoin('comment.apology', 'apology');
        $qb->addSelect('apology');
        $qb->leftJoin('comment.author', 'user');
        $qb->addSelect('user');
        $qb->where('comment.apology = :apologyId');
        $qb->setParameter('apologyId' , $apologyId);

        $query = $qb->getQuery();

        return $query->getResult();
    }

    public function findByAuthor ($authorId)
    {
        $qb = $this->createQueryBuilder('comment');
        $qb->leftJoin('comment.apology', 'apology');
        $qb->addSelect('apology');
        $qb->leftJoin('comment.author', 'user');
        $qb->addSelect('user');
        $qb->where('comment.author = :authorId');
        $qb->setParameter('authorId' , $authorId);

        $query = $qb->getQuery();

        return $query->getResult();
    }
}
