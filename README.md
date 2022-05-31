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

### Mise en place des sources et des dépendances

- Cloner le dépôt en local `git@github.com:anct-cartographie-nationale/client-base.git`
- Aller dans le dossier du projet et exécuter `yarn` pour installer les dépendances

### Installer Husky

[Husky](https://typicode.github.io/husky) est un outil de gestion des hooks git pour effectuer des tâches automatiques

Mise en place de Husky à la racine du projet `client-base` :

```bash
yarn husky install
```

Rendre exécutable les fichiers qui contiennent les hooks :

```bash
chmod a+x .husky/commit-msg
chmod a+x .husky/pre-commit
```

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

- Avant de créer une nouvelle branche de travail, récupérer les dernières modifications disponibles sur la branche `main`
- La nouvelle branche de travail doit ête préfixée par `build/`, `chore/`, `ci/`, `docs/`, `feat/`, `fix/`, `perf/`, `refactor/`, `revert/`, `style/` ou `test/` en fonction du type de modification prévu, pour plus de détails à ce sujet, consulter [Conventional Commits cheat sheet](https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index)
- Une branche portant une version à publier doit être de la forme `release/X.Y` avec `X.Y` égal au numéro de majeur et de mineur de la release, cela signifie donc que tous les patches sont à appliquer sur la même branche pour chaque version mineure. Cette organisation permet de gérer plusieurs versions de la bibliothèque en parallèle sans mettre en péril la rétrocompatibilité.

### Commits

#### Convention

Les commits de ce repository doivent respecter la syntaxe décrite par la spécification des [Commits Conventionnels](https://www.conventionalcommits.org/fr)

#### Signature

La branche `main`, ainsi que l'ensemble des branches de travail avec un préfixe valide requièrent que les commits soient signés :

- La documentation de GitHub indique comment [configurer la signature des commits](https://docs.github.com/en/enterprise-server@3.5/authentication/managing-commit-signature-verification/about-commit-signature-verification)
- Les utilisateurs de [keybase](https://keybase.io/) peuvent [signer leurs commits avec leur clé GPG sur Keybase](https://stephenreescarter.net/signing-git-commits-with-a-keybase-gpg-key/)

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
