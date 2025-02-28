# Tailwind CSS 4.0

## Introduction

De nos jours, dans le monde du web, il faut être efficace. Les frameworks et librairies naissent et meurent à un rythme de plus en plus effréné. Dans la catégorie des frameworks/libraries CSS, Tailwind est un nom bien connu et populaire depuis maintenant quelques années. L'arrivée d'une nouvelle version majeure n'est donc pas anodine, et une erreur peut signer la mort de Tailwind CSS, son abandon par les développeurs qui jugeraient que cette nouvelle version n'est plus à la hauteur de leurs exigences en termes de simplicité et de performances. La version 4.0 de Tailwind CSS apporte des améliorations significatives en termes de performance, d'optimisation et d'intégration avec les standards modernes du web.

\
Cependant, la question demeure : cette nouvelle version majeure de Tailwind vient-elle perfectionner Tailwind ou, au contraire, vient-elle fragiliser les fondements mêmes de ce qui a fait la réussite de Tailwind ?

\
Pour répondre à cette question, nous verrons dans un premier temps les nouveautés qu'apporte cette version 4, puis nous examinerons comment ces modifications pourraient impacter un projet existant et enfin, nous terminerons par une analyse critique de cette mise à jour.

## 1. Nouveautés de Tailwind CSS 4.0 et Différences avec l'ancienne version

L'un des changements majeurs apportés par Tailwind CSS 4.0 est l'amélioration significative du moteur de compilation. La performance du framework a été optimisée pour offrir un développement plus rapide et plus fluide. Voici les principales améliorations :

- **Optimisation du build** : la génération des styles est jusqu'à **3,5 fois plus rapide** qu'avec Tailwind CSS 3.
- **Rebuilds incrémentiels plus efficaces** : lorsque vous modifiez un fichier source, la recompilation peut être jusqu'à **8 fois plus rapide**, ce qui améliore grandement l'expérience de développement.
- **Utilisation plus efficace de la mémoire** : la gestion des ressources est optimisée pour éviter les ralentissements sur les machines moins puissantes.

---

Tailwind CSS 4.0 adopte une approche plus moderne de la gestion des styles en supprimant certaines complexités inutiles. Voici les changements notables :

- **Suppression du fichier** : auparavant, la personnalisation des styles nécessitait un fichier de configuration séparé. Désormais, Tailwind permet d'ajouter directement des styles personnalisés dans le CSS.
- **Détection automatique du contenu** : avant, il fallait déclarer manuellement les fichiers HTML ou JavaScript à analyser pour Tailwind. Maintenant, grâce à `content: auto`, Tailwind détecte automatiquement les fichiers à scanner.
- **Support natif des calques CSS**: il est maintenant plus facile d'organiser et de structurer son code CSS grâce aux calques Tailwind.
- **Utilisation des propriétés CSS personnalisées** : cette nouvelle approche permet une plus grande flexibilité pour définir et ajuster les couleurs dynamiquement.
- **Nouvelles API** : pour le 3d avec rotate-z, scale-z, translate-z, linear backgroud anvec bg-linear...
- **Joker descendant** : avec un style qui s'appliquera aussi à tous les eléments enfants **:
- **Amélioration de la syntaxe pour les container et style** : avec container et container-has-hover par exemple

---

Avec Tailwind CSS 4.0, l'intégration avec les outils modernes de développement est simplifiée :

- **Plugin officiel Vite** : Vite est un outil de développement rapide pour les applications web modernes. Avec Tailwind 4, l'intégration se fait de manière native, garantissant une meilleure compatibilité et des performances accrues.
- **Moins de dépendances** : le framework est plus léger et nécessite moins d'installations supplémentaires.
- **Mode JIT (Just-In-Time) activé en permanence** : alors que Tailwind CSS 3 permettait d'activer le mode JIT manuellement, Tailwind CSS 4 l'intègre directement, générant uniquement les styles utilisés dans le projet pour réduire la taille des fichiers CSS.

---

Voici un tableau récapitulatif des différences majeures :

| Fonctionnalité           | Tailwind CSS 3                   | Tailwind CSS 4                          |
| ------------------------ | -------------------------------- | --------------------------------------- |
| **Configuration**        | `tailwind.config.js` obligatoire | Configuration via CSS                   |
| **Mode JIT**             | Activable manuellement           | Toujours activé                         |
| **Détection du contenu** | Manuelle avec `content: []`      | Automatique avec `content: auto`        |
| **Calques CSS**          | Limités                          | Support natif et amélioré               |
| **Variables CSS**        | Utilisation limitée              | Support de `@property` et `color-mix()` |
| **Performance**          | Moins rapide                     | Compilation 3,5x plus rapide            |
| **Installation**         | Configuration manuelle requise   | Plug-and-play                           |
| **Vite**                 | Non supporté officiellement      | Plugin officiel disponible              |


## 2. Migration de Tailwind CSS 3 vers Tailwind CSS 4

Tailwind a pensé à tous et une commande permet de faire la migration sans heurts 
```
npx @tailwindcss/upgrade@next
```

la principales modification est la suppression du tailwind.config.js et la définition des variables de theme dans un fichier css unique

on passe de 

```js
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {},
  },
};
```

avec 2 fichiers css input et output à un fichier unique 

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

à un seul fichier unique 

```css
@import "tailwindcss";
```

avec notre theme défini dans ce fichier 

```css
@import "tailwindcss";

@theme {
    --color-dark-blue: #262733;
    --color-vibrant-orange: #e64a3b;
    --color-papyrus: #eee2d4;
    --color-alternate-gray-blue: #3b3c47;
    --color-mygray: #a5a5aa;
}
```

---


## 3 Mon Avis

J'ai toujours trouvé que l'installation de TailwindCSS était trop complexe et même si au bout de plusieurs essaies on prend le coup de main, cette simplification de l'installation est bienvenue. Autre changement que j'apprécie c'est la suppression du content une configuration perte de temps, désormais Tailwind s'en occupe et on peut aller à ce qui nous intéresse plus facilement.

```js
module.exports = {
  content: [
    "./*.html",
    "./pages/*.html",
    "./components/*.partial",
    "./assets/js/*.js"
  ],   
```

L'idée de Tailwind de vouloir se séparer de Javascript et mettre les configuration directement dans un fichier css me plait, après tout j'ai toujours considéré tailwind comme une library css et le fait de gérer tailwind dans le css me parait logique et dans la continuité de son utilité

sur une note personnel j'ai vue que le outline avait été revu ainsi que bien d'autres classes mais celle-ci en particulier me ravit car c'était toujours confus pour moi.


```
outline-none et outline-hidden
```


Tailwind permet aussi désormais de mettre des valeures personnalisées sans l'utilisation des crochets, je suis plus mitigé sur cette nouveauté, certe cela permet une plus grande liberté ce que j'aime car je n'aime pas être restreint dans ce qu'il m'est possible de faire mais de l'autre je ne suis pas graphiste et les variables "natives" de tailwind était déja étudiée pour être visuelement harmonieuse ce qui pour moi est bénéfique.   
l'eccueil que j'entrevois ici c'est que ce cadre qui nous restreignait parfois nous empêchait aussi surement de faire des monstruosité au goût douteux.
Un grand pouvoir implique de grande responsabilité et l'utilisation de variables de themes vont etre plus que jamais nécessaire je pense afin de centralisé la logique (ce qui devrait déja être le cas)   

/
Dans l'ensemble je pense que Tailwind prend la bonne direction et je pense que cette mise à jour confortera sa place prépondérante en tant que librairie/framework css. En me renseignant sur le net je vois pas mal de critique positive sur cette mise à jour ce qui est encourageant.     
Pour finir je n'utilise Tailwind css que depuis peu et je suis ravi de voir que Tailwind est non seulement toujours maintenu mais que ses developpeurs sont à l'écoute de la communauté et de leur attentes.


