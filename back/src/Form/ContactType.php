<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'sendFrom',
                EmailType::class,
                [
                    'required' => true,
                    'constraints' => [new NotBlank(), new Email()]
                ]
            )
            ->add(
                'message',
                TextareaType::class,
                [
                    'constraints' => [
                        new NotBlank(),
                        new Length([
                            'min' => 3,
                            'max' => 1200,
                        ])
                    ]
                ]
            )
            ->add(
                'responseAccept',
                CheckboxType::class,
                
            )
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
