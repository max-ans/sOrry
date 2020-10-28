<?php

namespace App\Controller\Api\v0;

use App\Form\ContactType;
use Swift_Mailer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    /**
     * @Route("/api/v0/contact", name="api_v0_contact", methods={"POST"})
     */
    public function contact(Request $request, Swift_Mailer $mailer)
    {
        $requestSent = json_decode($request->getContent(), true);
    
        
        $form = $this->createForm(ContactType::class, null, ['csrf_protection' => false]);

        $form->submit($requestSent);

        if ($form->isValid()) {

            $message = new \Swift_Message("s'Orry");
            $message->setFrom($requestSent['sendFrom']);
            $message->setTo('royer.maxence.dev@gmail.com');
            $message->setBody(
                'email/contact.html.twig',
                [
                    'message' => $requestSent['message'],
                    'authorization' => $requestSent['responseAccept']
                ], 
               
            );

            $mailer->send($message);


            return $this->json([
                'message' => "Your request has been send",
            ], 200);
        }

        
        return $this->json([
            'message' => "Your request has been send",
            'reasons' => (string) $form->getErrors(true, true),
        ], 400);
        
    }
}
