<?php

namespace App\Form;

use App\Entity\Apology;
use App\Entity\Category;
use App\Entity\User;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApologyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'title',
                TextType::class,
            )
            ->add(
                'content',
                TextareaType::class,    
            )
            ->add(
                'categories',
                EntityType::class,
                [
                    'class' => Category::class,
                    'choice_label' => 'title',
                    'multiple' => true
                ]
            )
            ->add(
                'author',
                EntityType::class,
                [
                    'class' => User::class,
                    'choice_label' => 'nickname'
                ]    
            )
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Apology::class,
        ]);
    }
}
