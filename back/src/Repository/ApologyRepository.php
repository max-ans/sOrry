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

    
    // this function find Apologie based on their likes numbers.
    // By default she return ten best Apologie, except if $number is different from ten
    public function findBestApologies ($number = 10)
    {
        // initialize query builder
        $queryBuilder = $this->createQueryBuilder('apology');
        $queryBuilder->orderBy('apology.likes', 'DESC');
        $queryBuilder->setMaxResults($number);

        $query = $queryBuilder->getQuery();

        return $query->getResult();
    }
    
}
