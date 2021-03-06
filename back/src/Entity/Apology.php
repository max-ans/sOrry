<?php

namespace App\Entity;

use App\Repository\ApologyRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=ApologyRepository::class)
 */
class Apology
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("apologies_groups")
     * @Groups("user_groups")
     * @Groups("comment_groups")
     * @Groups("categories_groups")
     * @Groups("category_groups")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=128)
     * @Groups("apologies_groups")
     * @Assert\NotBlank(message="Le titre est obligatoire")
     * @Assert\Length(min=3)
     * @Groups("user_groups")
     * @Groups("comment_groups")
     * @Groups("categories_groups")
     * @Groups("category_groups")
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("apologies_groups")
     * @Groups("category_groups")
     * @Groups("user_groups")
     */
    private $slug;

    /**
     * @ORM\Column(type="text")
     * @Groups("apologies_groups")
     * @Assert\NotBlank
     * @Assert\Length(min=20)
     * @Groups("user_groups")
     * @Groups("comment_groups")
     * @Groups("category_groups")
     */
    private $content;

    /**
     * @ORM\Column(type="integer", options={"default" : 0})
     * @Groups("apologies_groups")
     * @Groups("user_groups")
     * @Groups("categories_groups")
     * @Groups("category_groups")
     */
    private $likes;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("apologies_groups")
     * @Groups("category_groups")
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity=Comment::class, mappedBy="apology", cascade={"persist", "remove"})
     * @Groups("apologies_groups")
     * @Groups("category_groups")
     */
    private $comments;

    /**
     * @ORM\ManyToMany(targetEntity=Category::class, inversedBy="apologies")
     * @Groups("apologies_groups")
     * @Assert\NotBlank
     */
    private $categories;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="apologies")
     * @ORM\JoinColumn(nullable=true)
     * @Groups("apologies_groups")
     * @Assert\NotBlank
     * @Groups("category_groups")
     */
    private $author;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="apologiesLiked")
     * @Groups("apologies_groups")
     * @Groups("comment_groups")
     * @Groups("categories_groups")
     * @Groups("category_groups")
     */
    private $userWhoLiked;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
        $this->categories = new ArrayCollection();
        $this->userWhoLiked = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
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

    public function getLikes(): ?int
    {
        return $this->likes;
    }

    public function setLikes(int $likes): self
    {
        $this->likes = $likes;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return Collection|Comment[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setApology($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getApology() === $this) {
                $comment->setApology(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Category[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->categories->contains($category)) {
            $this->categories->removeElement($category);
        }

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

    /**
     * @return Collection|User[]
     */
    public function getUserWhoLiked(): Collection
    {
        return $this->userWhoLiked;
    }

    public function addUserWhoLiked(User $userWhoLiked): self
    {
        if (!$this->userWhoLiked->contains($userWhoLiked)) {
            $this->userWhoLiked[] = $userWhoLiked;
            $userWhoLiked->addApologiesLiked($this);
        }

        return $this;
    }

    public function removeUserWhoLiked(User $userWhoLiked): self
    {
        if ($this->userWhoLiked->contains($userWhoLiked)) {
            $this->userWhoLiked->removeElement($userWhoLiked);
            $userWhoLiked->removeApologiesLiked($this);
        }

        return $this;
    }
}
