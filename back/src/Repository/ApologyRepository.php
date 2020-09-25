<?php

namespace App\Repository;

use App\Entity\Apology;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Apology|null find($id, $lockMode = null, $lockVersion = null)
 * @method Apology|null findOneBy(array $criteria, array $orderBy = null)
 * @method Apology[]    findAll()
 * @method Apology[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ApologyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Apology::class);
    }

    // qb = query builder

    // this function allows to find all Apologies in one request
    public function findAllApologies ()
    {
        $qb = $this->createQueryBuilder('apology');
        $qb->leftJoin('apology.comments', 'comments');
        $qb->addSelect('comments');
        $qb->leftJoin('apology.categories', 'categories');
        $qb->addSelect('categories');
        $qb->leftJoin('apology.author', 'author');
        $qb->addSelect('author');

        $query = $qb->getQuery();

        return $query->getResult();


    }
    
    // this function find Apologie based on their likes numbers.
    // By default she return ten best Apologie, except if $number is different from ten
    public function findBestApologies ($number = 10)
    {
        // initialize query builder
        $qb = $this->createQueryBuilder('apology');
        $qb->leftJoin('apology.comments', 'comments');
        $qb->addSelect('comments');
        $qb->leftJoin('apology.categories', 'categories');
        $qb->addSelect('categories');
        $qb->leftJoin('apology.author', 'author');
        $qb->addSelect('author');
        $qb->orderBy('apology.likes', 'DESC');
        $qb->setMaxResults($number);

        $query = $qb->getQuery();

        return $query->getResult();
    }
    
}
