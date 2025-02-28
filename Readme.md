# Projet de fin de Module [ESGI Reims](https://www.esgi.fr/campus-reims.html) Intégration [Tailwind CSS](https://tailwindcss.com/) et [SCSS/SASS](https://sass-lang.com/)

Les pages Home, About, Working Together fonctionne avec [Tailwind CSS](https://tailwindcss.com/)    
La page Contact fonctionne avec [SCSS/SASS](https://sass-lang.com/)

## Installation 

A la racine du projet 
```
npm install
```
Lancer ensuite un serveur virtuel [and voilà!](https://www.urbandictionary.com/define.php?term=voila)

### Lancer Tailwind CSS

A la racine du projet 
```
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/tailwind.css --watch
```

### Lancer SCSS/SASS

A la racine du projet 
```
sass assets/css/style.scss assets/css/scss.css --watch
```