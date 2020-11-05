<?php

namespace App\Controller\Api\v0;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class CategoryController extends AbstractController
{
    

    private $categoryRepository;
    
    private $normalizer;

    public function __construct(CategoryRepository $categoryRepository, ObjectNormalizer $normalizer)
    {
        $this->categoryRepository = $categoryRepository;
        $this->normalizer = $normalizer;
    }

    /**
     * @Route("/api/v0/categories", name="api_v0_categories_list", methods={"GET"})
     */
    public function list()
    {
        $allCategories = $this->categoryRepository->findAll();

        $serializer = new Serializer([$this->normalizer]);

        $normalizedCategories = $serializer->normalize($allCategories, null, ['groups' => 'categories_groups']); 

        return $this->json([
            $normalizedCategories
        ]);
    }

    /**
     * @Route("/api/v0/categories/{slug}", name="api_v0_categories_show" , methods={"GET"})
     */
    public function show(Category $category)
    {
        $serializer = new Serializer([$this->normalizer]);

        $normalizedCategory = $serializer->normalize($category, null, ['groups' => 'category_groups']); 

        return $this->json([
            $normalizedCategory
        ]);
    }   
}
