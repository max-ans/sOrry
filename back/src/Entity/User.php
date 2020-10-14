<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
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
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups("user_groups")
     * @Assert\Email(
     *     message = "Le format email n'est pas respecté."
     * )
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     * @Groups("user_groups")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Assert\NotBlank(message="Le mot de passe est obligatoire")
     * @Assert\Regex(
     *      pattern="/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/",
     *      message="Votre mot de passe ne respecte pas les règles de sécurité"
     * )
     * the regex assert matches only when all the following are true:
     * password must contain 1 number (0-9)
     * password must contain 1 uppercase letters
     * password must contain 1 lowercase letters
     * password must contain 1 non-alpha numeric number
     * password is 8-16 characters with no spac
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=128)
     * @Groups("user_groups")
     * @Assert\NotBlank(message="Le prénom est obligatoire")
     * @Assert\Length(
     *  min = 2,
     *  max = 128,
     *  minMessage = "Your first name must be at least {{ limit }} characters long",
     *  maxMessage = "Your first name cannot be longer than {{ limit }} characters",
     * )
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=128)
     * @Groups("user_groups")
     * @Assert\NotBlank(message="Le Nom de famille est obligatoire")
     * @Assert\Length(
     *  min = 2,
     *  max = 128,
     *  minMessage = "Your first name must be at least {{ limit }} characters long",
     *  maxMessage = "Your first name cannot be longer than {{ limit }} characters",
     * )
     */
    private $lastname;

    /**
     * @ORM\OneToMany(targetEntity=Apology::class, mappedBy="author")
     * @Groups("user_groups")
     */
    private $apologies;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("apologies_groups")
     * @Assert\NotBlank(message="Le pseudo est obligatoire")
     * @Groups("user_groups")
     * @Groups("comment_groups")
     */
    private $nickname;

    /**
     * @ORM\OneToMany(targetEntity=Comment::class, mappedBy="author")
     * @Groups("user_groups")
     */
    private $comments;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, unique=true)
     * @Groups("user_groups")
     */
    private $apiToken;

    public function __construct()
    {
        $this->apologies = new ArrayCollection();
        $this->comments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

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
            $apology->setAuthor($this);
        }

        return $this;
    }

    public function removeApology(Apology $apology): self
    {
        if ($this->apologies->contains($apology)) {
            $this->apologies->removeElement($apology);
            // set the owning side to null (unless already changed)
            if ($apology->getAuthor() === $this) {
                $apology->setAuthor(null);
            }
        }

        return $this;
    }

    public function getNickname(): ?string
    {
        return $this->nickname;
    }

    public function setNickname(string $nickname): self
    {
        $this->nickname = $nickname;

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
            $comment->setAuthor($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getAuthor() === $this) {
                $comment->setAuthor(null);
            }
        }

        return $this;
    }

    public function getApiToken(): ?string
    {
        return $this->apiToken;
    }

    public function setApiToken(?string $apiToken): self
    {
        $this->apiToken = $apiToken;

        return $this;
    }
}
