# Carnet atelier (version locale)

Les notes sont stockées **uniquement sur le téléphone**, dans le stockage du navigateur.
Rien n'est envoyé sur un serveur. L'appli marche aussi sans réseau une fois installée.

## Mettre l'appli sur le téléphone (GitHub Pages, gratuit)

Un téléphone ne sait pas lancer une appli web depuis un fichier : il faut qu'elle soit servie en https.
GitHub Pages sert seulement le code (les fichiers de ce dossier). Les données, elles, restent sur le téléphone.

1. Crée un compte sur github.com puis un dépôt, par exemple `carnet-atelier`.
2. Envoie tous les fichiers de ce dossier dans le dépôt (bouton « Add file » puis « Upload files »).
3. Dans le dépôt : Settings > Pages > Source « Deploy from a branch » > branche `main`, dossier `/ (root)` > Save.
4. Une minute plus tard, l'adresse s'affiche : `https://TON-PSEUDO.github.io/carnet-atelier/`.
5. Ouvre-la sur le téléphone :
   - Android (Chrome) : menu ⋮ > « Installer l'application » ou « Ajouter à l'écran d'accueil ».
   - iPhone (Safari) : bouton Partager > « Sur l'écran d'accueil ».
6. Lance toujours l'appli depuis l'icône de l'écran d'accueil (c'est là que les notes sont gardées).

## Sauvegarde

- En bas de l'écran d'accueil de l'appli : « Exporter » crée un fichier `.json` avec toutes les notes.
- « Restaurer » recharge ce fichier (nouveau téléphone, navigateur vidé…).
- Exporte de temps en temps : si tu vides les données du navigateur ou désinstalles l'appli, les notes partent avec.

## Bon à savoir

- Pas de navigation privée : rien n'y est gardé.
- La dictée (micro) utilise la reconnaissance vocale du téléphone ; sur Android/Chrome, elle passe par les serveurs de Google
  pour transformer la voix en texte. Si tu veux zéro envoi, tape les notes à la main.
- Pour mettre à jour l'appli : remplace `index.html` dans le dépôt, et change `carnet-v1` en `carnet-v2` dans `sw.js`.
