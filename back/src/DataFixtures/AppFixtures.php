<?php

namespace App\DataFixtures;

use App\Entity\Apology;
use App\Entity\Comment;
use App\Entity\User;
use App\Service\Slugger;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

    private $passwordEncoder;
    private $slugger;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, Slugger $slugger)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->slugger = $slugger;
    }

    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);
        $faker = Factory::create('fr_FR');

        $fakeComments = [
            'Yeahhhh',
            'MDR',
            'tro bi1 celui la',
            'J\'adore',
            'Quelqu\'un peut m\'aider a résoudre mon équation svp',
            'Yo si toi aussi tu aime coder alors viens me suivre sur ma chaine YT'
        ];
        
        
        
        for($userIndex = 0; $userIndex <= 10 ; $userIndex++) {
            $user = new User;
            $user->setFirstname($faker->firstName());
            $user->setLastname($faker->lastName());
            $user->setRoles(['ROLE_USERS']);
            $user->setEmail($user->getFirstname() . $user->getLastname() . '@gmail.com');
            $user->setPassword($this->passwordEncoder->encodePassword($user , $user->getFirstname()));
            
            for ($apologyIndex = 0; $apologyIndex <= mt_rand(0 , 5) ; $apologyIndex++ ) {
                $apology = new Apology;
                $apology->setAuthor($user);
                $apology->setContent($faker->realText());
                $apology->setTitle($faker->sentence());
                $apology->setSlug($this->slugger->slugify($apology->getTitle()));
                $apology->setLikes($faker->numberBetween(2, 5000));
                $apology->setCreatedAt(new DateTime());

                $manager->persist($apology);
            }

            $manager->persist($user);
        }
        
        $manager->flush();
    }
}

