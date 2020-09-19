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

Le site aura pour icon une banane avec des lunettes de soleil.

La couleur primaire sera le jaune.

La couleur secondaire sera le violet.

Un carrousel des excuses de retard les mieux notés sera affiché en homepage

# __Les User Stories__ #

- En tant qu'utilisateur je dois pouvoir accéder au service de visionnage des excuses dans la limite de 10 excuses si je ne suis pas conneccter

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
- possède une note
- possède un contenu
- possède un id
- possède des likes
- possède des commentaires
- possède une date de création

***Une catégorie*** :
- possède un titre
- possède un slug
- possède description

***Un User*** : 
- possède un Nom
- possède un Prenom
- possède un rôle
- possède un email
- possède un MDP
- possède un avatar ou non


***Un commentaires***
- possède un auteur
- possède un contenu
- possède un id

```bash

COMMENTARY: id, author, content
have, 0N COMMENTARY, 11 APOLOGY
APOLOGY: id, author, content, slug, likes, commentaries,
belongs to, 0N USERS , 11 APOLOGY
USERS: id, firstname, lastname, role, email, password

is linked to, 0N APOLOGY, 0N CATEGORY

CATEGORY: id, title, description, slug

```

# __Le Versionning__ #

Le versionning sera géré avec l'outils git. Le projet, dans ses versions de présentation et sa version final, sera sur "master".
Le developpement du projet se fera sur la branche "develop".
chaques nouvelles features fera l'objet d'une nouvelle branche qui sera merge sur la branche de developpment "develop" a l'aide de Pull Request uniquement.




