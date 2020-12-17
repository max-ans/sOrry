<?php

namespace App\Form;

use App\Entity\Apology;
use App\Entity\Comment;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CommentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'content',
                TextareaType::class,
            )
            ->add(
                'apology',
                EntityType::class,
                [
                    'class' => Apology::class,
                    'choice_label' => 'id',
                ]
            )
            ->add(
                'author',
                EntityType::class,
                [
                    'class' => User::class,
                    'choice_label' => 'id',
                ]
            )
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Comment::class,
        ]);
    }
}
