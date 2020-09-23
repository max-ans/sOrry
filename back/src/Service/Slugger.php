<?php

use Symfony\Component\String\Slugger\AsciiSlugger;

// this is an service. His Goal is return a slug of string given in parameter through slugify function
class Slugger 
{
    private $slugger;

    public function __construct(AsciiSlugger $asciiSlugger)
    {
        $this->slugger = $asciiSlugger;
    }

    public function slugify ($word) :string
    {

        // first step : each $word uppercase letters becomes lowercase letters
        $wordLower = strtolower($word);

        // second step : symfony asciiSlugger replace space by hyphen between each word if there are several
        // and he replace accented letter by same lettre but without accent thanks to slug function

        return $this->slugger->slug($wordLower);
    }
}