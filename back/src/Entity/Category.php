<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CategoryRepository::class)
 */
class Category
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("categories_groups")
     * @Groups("category_groups")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=64)
     * @Groups("apologies_groups")
     * @Groups("categories_groups")
     * @Groups("category_groups")
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Groups("categories_groups")
     * @Groups("category_groups")
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=64)
     * @Groups("apologies_groups")
     * @Groups("categories_groups")
     * @Groups("category_groups")
     */
    private $slug;

    /**
     * @ORM\ManyToMany(targetEntity=Apology::class, mappedBy="categories")
     * @Groups("categories_groups")
     * @Groups("category_groups")
     */
    private $apologies;

    public function __construct()
    {
        $this->apologies = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

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

    /**
     * @return Collection|Apology[]
     */
    public function getApologies(): Collection
    {
        return $this->apologies;
    }

    public function addApology(Apology $apology): self
    {
        if (!$this->apologies->contains($apology)) {
            $this->apologies[] = $apology;
            $apology->addCategory($this);
        }

        return $this;
    }

    public function removeApology(Apology $apology): self
    {
        if ($this->apologies->contains($apology)) {
            $this->apologies->removeElement($apology);
            $apology->removeCategory($this);
        }

        return $this;
    }
}
