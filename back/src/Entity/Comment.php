<?php

namespace App\Entity;

use App\Repository\CommentRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CommentRepository::class)
 */
class Comment
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("user_groups")
     * @Groups("comment_groups")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     * @Groups("apologies_groups")
     * @Groups("user_groups")
     * @Groups("comment_groups")
     */
    private $content;

    /**
     * @ORM\ManyToOne(targetEntity=Apology::class, inversedBy="comments")
     * @Groups("comment_groups")
     */
    private $apology;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("apologies_groups")
     * @Groups("comment_groups")
     */
    private $author;

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getApology(): ?Apology
    {
        return $this->apology;
    }

    public function setApology(?Apology $apology): self
    {
        $this->apology = $apology;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

        return $this;
    }
}
