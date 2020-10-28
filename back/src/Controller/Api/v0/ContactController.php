<?php

namespace App\Controller\Api\v0;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    /**
     * @Route("/api/v0/contact", name="api_v0_contact")
     */
    public function contact()
    {
        return $this->json([
            'message' => "Your request has been send",
        ], 200);
    }
}
