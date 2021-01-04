<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class ApologyVoter extends Voter
{
    protected function supports($attribute, $subject)
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, ['add', 'edit'])
            && $subject instanceof \App\Entity\Apology;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        $user = $token->getUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case 'add':
                if ( $user->getId() === $subject->getAuthor()->getId()) {
                    return true;
                }
                break;
            case 'edit':
                if ( $user->getId() === $subject->getAuthor()->getId()) {
                    return true;
                }
                break;
        }

        return false;
    }
}
