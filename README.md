# Client Base

## À propos

Espace de travail Angular qui contient tous les outils et toutes les configurations nécessaires pour contribuer sur les projets :

- [Application client de la Cartographie Nationale des lieux de médiation numérique](https://github.com/anct-cartographie-nationale/client-application)
- [Bibliothèque pour la cartographie de l’offre de médiation numérique](https://github.com/anct-cartographie-nationale/mediation-numerique)

## Table des matières

- 🪧 [À propos](#à-propos)
- 📦 [Prérequis](#prérequis)
- 🚀 [Installation](#installation)
- 🛠️ [Utilisation](#utilisation)
- 🤝 [Contribution](#contribution)
- 🏗️ [Construit avec](#construit-avec)
- 📝 [Licence](#licence)

## Prérequis

- [Git](https://git-scm.com/) : Système de contrôle de versions distribué d'un ensemble de fichiers
- [Node](https://nodejs.org/) : Environnement d'exécution pour Javascript
- [Yarn](https://yarnpkg.com/) : Gestionnaire de paquets pour les produits développés dans des environnements Node

> Node et Yarn peuvent être installés via [nvm](https://github.com/nvm-sh/nvm) qui permet d'obtenir et d'utiliser rapidement différentes versions de Node via la ligne de commande.

## Installation

- Cloner le dépôt en local `git@github.com:anct-cartographie-nationale/client-base.git`
- Aller dans le dossier du projet et exécuter `yarn` pour installer les dépendances

## Utilisation

Cet espace de travail est vide par défaut, mais vous pouvez y ajouter des projets Angular dans le dossier `projects` en suivant la documentation de :

- [L'application client de la Cartographie Nationale des lieux de médiation numérique](https://github.com/anct-cartographie-nationale/client-application)
- [La bibliothèque pour la cartographie de l’offre de médiation numérique](https://github.com/anct-cartographie-nationale/mediation-numerique)

Pour créer un nouveau projet Angular dans le dossier `projects` de l'espace de travail, il faut utiliser la commande :

- `ng generate library my-lib` s'il s'agit d'une bibliothèque
- `ng generate application my-app` s'il s'agit d'un projet qui peut être lancé dans le navigateur

Pour en savoir plus sur la commande `ng generate`, consulter la [documentation de la CLI d'Angular](https://angular.io/cli/generate)  
Pour en savoir plus sur la gestion des projets d'applications Angular, voir la [documentation des projets multiples](https://angular.io/guide/file-structure#multiple-projects)  
Pour en savoir plus sur la gestion des projets de bibliothèque Angular, voir le [tutoriel sur les bibliothèques Angular](https://angular.io/guide/libraries)

## Contribution

### Nommage des branches

- Une branche qui apporte une nouvelle fonctionnalité doit ête préfixé par `feature/` : `feature/ma-fonctionnalite`
- Une branche qui apporte une correction doit ête préfixé par `fix/` : `fix/ma-correction`

### Déployer

À partir du moment où le code est publié sur la branche `main`, il est prêt à être utilisé avec la commande `git clone` décrite dans la section [Installation](#installation).

Les processus d'intégration en continu des projets dépendant ce cet espace de travail clonent ce dépôt afin de pouvoir exécuter les commandes nécessaires, pour :

- Le contrôle de la syntaxe du code
- Le lancement des tests
- La construction des projets dans leur forme à déployer en production.

## Construit avec

### langages & Frameworks

- [TypeScript](https://www.typescriptlang.org/) est un langage open source construit à partir de JavaScript
- [Angular](https://angular.io/) est une boîte à outils open source pour construire des clients web

### Outils

- [Jest](https://jestjs.io/) est une boîte à outils pour écrire des tests automatisés en JavaScript
- [Eslint](https://eslint.org/) est un analyseur statique de JavaScript avec les plugins suivants :
- [Prettier](https://prettier.io/) est un magnificateur de code source en JavaScript

## Licence

Voir le fichier [LICENSE.md](./LICENSE.md) du dépôt.
