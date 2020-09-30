# __s'Orry__ #

S'Orry est parti d'une plaisantrie... Lorsque l'on arrive en retard au travail, à un repas de famille ou simplement a un rendez-vous, il est souvent compliqué de se justifier, surtout lorsque l'on sait que l'on est en tord et que l'on aurai pu l'éviter.

En  partant de ce constat, l'idée est venu de créer un "répertoire" du meilleur des excuses de retard afin de ne plus jamais être coupable... ou du moins, d'essayer de rejeter la faute sur quelqu'un ou quelques chose d'autres... :smiley:

Le site aura pour principal but de faire passer un bon moment a son utilisateur par l'intermediaire des excuse plus loufoque les une que les autres.

Aucune restriction d'age ou de personne n'est appliqué a l'accès au site

# __Les Technos__ #

Ce site est intégralement réaliser avec React et Redux pour ce qui est de la partie interface utilisateur tandis que la partie immergée du site, elle, est réaliser avec le framework Symphony dans sa version 5, et accompagné d'une base de données SQL.



# __Les Features__ #

- Proposition d'une excuse "express". L'excuses express sera une fonctionnalitès qui permettra a un utilisateur de se voir proposer une excuse de retard en un seul clic.

- Possibilités de commenter les excuses des autres utilisateurs

- Possibilité d'attribuer une note a une excuse afin de les faire aparetre dans un classement

- Possibilité de poster une excuses. Celle-ci sera soumise a une régulation par rapport a des mot clés et un controle humains.

- Possibilité de créer un compte utilisateur et de le résilier a tout moment

- Possibilité de participer a un jeux hebdomadaire proposant a l'utilisateur de créer un excuse contenant un ou deux mot obligatoire
-

# __Les impératifs__ #

Le site aura pour icon une banane avec des lunettes de soleil (voir png banamix pour exemple).

La couleur primaire sera le jaune.(#FADB2A)main, (#F1F094)secondary

La couleur secondaire sera le violet.(#78317B)

Un carrousel des excuses de retard les mieux notés sera affiché en homepage

Responsive design

Le site devra implémenter un mamiximun de bonne pratique Opquast


# __Le Versionning__ #

Le versionning sera géré avec l'outils git. Le projet, dans ses versions de présentation et sa version final, sera sur "master".
Le developpement du projet se fera sur la branche "develop".
chaques nouvelles features fera l'objet d'une nouvelle branche qui sera merge sur la branche de developpment "develop" a l'aide de Pull Request uniquement.


# __Les User Stories__ #

- En tant qu'utilisateur je dois pouvoir accéder au service de visionnage des excuses dans la limite de 10 excuses si je ne suis pas connecter

- En tant qu'utilisateur, je dois pouvoir créer un compte personnel

- En tant qu'utilisateur, je dois pouvoir dermé mon compte personnel

- En tant qu'utilisateur, je dois pouvoir éditer mon compte personnel

- En tant qu'utilisateur, je dois pouvoir me connecter

- En tant qu'utilisateur, je dois pouvoir me déconnecter

- En tant qu'utilisateur, je dois pour poster une proposition d'excuses

- En tant qu'utilisateur, je dois pouvoir commenter un excuse qui n'est pas la mienne

- En tant qu'utilisateur, je dois pouvoir aux conditions de régulation des excuses postées.

- En tant qu'utilisateur, je dois pouvoir accéder aux excuses en fonction de leur tags

- En tant qu'utilisateur, je dois pouvoir accéder aux excuses en fonction de leurs catégories

- En tant qu'utilisateur, je dois pouvoir accéder a mon espace personnel

- En tant qu'utilisateur, depuis mon espace personnel, je dois pouvoir voir les excuses que j'ai posté.

- En tant qu'utilisateur, depuis mon espace personnel , je dois pouvoir voir les excuses que j'ai noté

- En tant qu'utilisateur, je dois pouvoir reprendre la navigation si je suis face a une erreur 404

- En tant qu'utilisateur, je dois pouvoir contacter le responsable des espaces public sur le site

- En tant qu'utilisateur, je dois pouvoir retirer une excuses que j'ai poster

- En tant qu'administrateur, je dois pouvoir accéder a un espace administrateur

- En tant qu'administrateur, je dois pouvoir réguler la publications des excuses depuis l'espace d'administration

- 

- 

# __Le MCD__ #

***Une excuse*** : 
- possède un auteur
- possède un titre 
- possède un slug
- possède un contenu
- possède un id
- possède des likes
- possède des commentaires
- possède une date de création

***Une catégorie*** :
- possède un id
- possède un titre
- possède un slug
- possède description

***Un User*** : 
- possède un id
- possède un Nom
- possède un Prenom
- possède un pseudo
- possède un rôle
- possède un email
- possède un MDP
- possède un avatar ou non
- possède une date de création


***Un commentaire***
- possède un auteur
- possède un contenu
- possède un id
- possède une date de création

```bash

COMMENT: id, author, content
have, 11 COMMENT, 0N APOLOGY
:

write , 11 USER, 0N COMMENT
APOLOGY: id, author, content, slug, likes,commentaries
is linked to, 1N APOLOGY, 0N CATEGORY

USER: id, firstname, lastname, role, email, password, nickname
belongs to, 0N USER , 11 APOLOGY
CATEGORY: id, title, description, slug

```

# __Le Dico de Données__ #

## ***Apology***

|  Champ  | Type | Spécificités | Description |
| -  |  :-:  |  :-: |  -  |
|  id  |  INT   |  PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT  |  Identifiant de l'excuce   |
|  title  |  VARCHAR(128)   | NOT NULL    | Titre de l'excuse     |
|  slug  | VARCHAR(255)    | NOT NULL   | Slug du tire de l'excuse     |
|  content  |  TEXT  |  NOT NULL  | Contenu de l'excuse    |
|  author  |  Entity   |  NOT NULL  | Auteur de L'excuse     |
|  like  |  INT   |  DEFAULT 0  |  Nombres de likes de l'excuses   |
|  commentaries  |  Entity   |  NULL  | Commentaires au sujet de l'excuses  |
|  created_at  |  TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP    | Date de création de l'excuses    |

---------------------------

## ***User***

|  Champ  | Type | Spécificités | Description |
| -  |  :-:  |  :-: |  -  |
|  id  |  INT   |  PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT  |  Identifiant de l'utilisateur   |
| firstname | VARCHAR(128) | NOT NULL | Prénom de l'utilisateur |
| lastname | VARCHAR(128) | NOT NULL | Nom de l'utilisateur |
| nickname | VARCHAR(255) | NOT NULL | Pseudo de l'utilisateur  |
| password | VARCHAR(128) | NOT NULL  | Mot de passe de l'utilisateur  |
| email | VARCHAR(128) | NOT NULL, UNIQUE | Email de l'utilisateur  |
| avatar | TEXT | NULL | Avatar de l'utilisateur  |
|  created_at  |  TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP    | Date de création du compte utilisateur    |

--------------------------

## ***Category***

|  Champ  | Type | Spécificités | Description |
| -  |  :-:  |  :-: |  -  |
|  id  |  INT   |  PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT  |  Identifiant de la categorie  |
| title | VARCHAR(64) | NOT NULL | Titre de la catégorie  |
| slug | VARCHAR(64) | NOT NULL | Slug du titre de la catégorie  |
| description | TEXT | NULL  | Description de la catégorie |

------------------------

## ***Comment***

|  Champ  | Type | Spécificités | Description |
| -  |  :-:  |  :-: |  -  |
|  id  |  INT   |  PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT  |  Identifiant du commentaire  |
| author | VARCHAR(128) | NOT NULL | Auteur du commentaire  |
| content | TEXT | NOT NULL | Contenu du commentaire |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP  | Date de création du commentaire |

----------------------

# ***Liste des routes de L'API***

## ***Apology***
|  EndPoint  | Méthode HTTP | Données a transmettre | Description |
| -  |  :-:  |  :-: |  -  |
| ```Api/v0/apologies ``` | GET |  | Récupérer toutes les excuses |
| ```Api/v0/apologies/count ``` | GET |  | Récupérer le nombre total d'excuses |
| ```Api/v0/apologies?best=[int] ``` | GET | Nombres de d'excuses a récuperer dans le paramètre | Récupérer un nombre spécifique d'excuses ayant le plus grand nombre de likes  |
| ```Api/v0/apologies/author=[id] ``` | GET | Identifiant de l'utilisateur | Récupérer toutes les excuses de l'utilisateur correspondant a l'id transmis  |
| ```Api/v0/apologies ``` | POST | titre, contenu, auteur | Création d'une excuse |
| ```Api/v0/apologies/[id] ``` | PATCH | titre, auteur, contenu, date de création, nombre de likes  | Édition d'une excuse |
| ```Api/v0/apologies/[id] ``` | DELETE |  |Suppression de l'excuse  |
----------------------------------------------------------------------------


## ***User***
|  EndPoint  | Méthode HTTP | Données a transmettre | Description |
| -  |  :-:  |  :-: |  -  |
| ```Api/v0/users ``` | GET  |  | Récupérer tout les utilisateur  |
| ```Api/v0/users/[id] ``` | GET | Identifiant de l'utilisateur | Récupérer un utilisateur |
| ```Api/v0/users ``` | POST | firstname, lastname, email, password, pseudo et avatar | Création d'un utilisateur  |
| ```Api/v0/users/[id] ``` | PATCH | firstname, lastname, email, password, pseudo et avatar | Modifiaction d'un utilisateur |
| ```Api/v0/users/[id] ``` | DELETE |  | Suppresion d'un utilisateur  |



## ***Comment***
|  EndPoint  | Méthode HTTP | Données a transmettre | Description |
| -  |  :-:  |  :-: |  -  |
| ```Api/v0/comments ``` | GET |  | Récupérer l'ensemble des commentaires |
| ```Api/v0/comments?apology=[id] ``` | GET | Id de l'excuse | Récupérer tous les commentaires selon une excuses  |
| ```Api/v0/comments ``` | POST | titre, auteur, contenu | Création d'un commentaire  |
| ```Api/v0/comments/[id] ``` | PATCH | Id du commentaire | Édition d'un commentaire  |
-----------------------------


# __Prochaines Feature__ #
- User :
    - Possibilité d'upload une image afin de la définir comme avatar
  
- Category :
    - Possibilité de choisir un excuse par catégorie

- Jeux :
    - Instauration d'un jeu de type "Limite Limite " avec des carte comportant des début d'excuses que les joueur devront compléter avec l'une des six cartes en leurs possession. Les six cartes de chaque joueurs contiendront elle, une seconde partie d'excuses . 
    Exemple: 
      - il est inscrit sur la carte centrale : ` Je suis en retard au travail ce matin parceque... `
      - chaque joueur dispose de six cartes avec lesquelles il devrat tenter de terminer au mieux l'excuses : ` Mon raton laveur domestique a fait tomber mon réveil dans l'eau en faisant la vaiselle`.
  