# Carnet atelier

Carnet de ce qu'il faut prévoir au prochain passage, par véhicule, avec une photo du véhicule.
Deux modes :

- **Mode local** (par défaut, tant que `config.js` contient `null`) : tout reste sur le téléphone.
- **Carnet partagé** : vous voyez le même carnet sur vos deux iPhone (notes et photos). Chacun se connecte
  avec son email et son mot de passe. Ça marche aussi sans réseau à l'atelier : les modifications partent
  dès que le réseau revient.

## 1. Mettre l'appli en ligne (GitHub Pages, gratuit)

Un iPhone ne sait pas lancer une appli web depuis un fichier : il faut qu'elle soit servie en https.

1. Sur github.com, dans le dépôt `Garage` : Settings > Pages > Source « Deploy from a branch » > branche `main`,
   dossier `/ (root)` > Save.
2. Une minute plus tard, l'adresse s'affiche (du type `https://TON-PSEUDO.github.io/Garage/`).

## 2. Carnet partagé avec ton père (Firebase, gratuit, 10 minutes, une seule fois)

À faire sur un ordinateur.

1. Va sur https://console.firebase.google.com, connecte-toi avec un compte Google, « Créer un projet »
   (nom : `carnet-atelier`). Google Analytics : pas besoin, tu peux le désactiver.
2. **Comptes** : menu Build (Créer) > Authentication > « Commencer » > onglet « Sign-in method » >
   « Adresse e-mail/Mot de passe » > Activer > Enregistrer.
   Puis onglet « Users » > « Ajouter un utilisateur » : ajoute ton email + un mot de passe, puis pareil pour ton père.
3. **Base de données** : Build > Firestore Database > « Créer une base de données » > emplacement
   `eur3 (europe)` > « Mode production » > Créer.
   Onglet « Règles » : colle le contenu du fichier `firestore.rules`, remplace `EMAIL-DE-DAMIEN` et
   `EMAIL-DU-PERE` par vos deux emails (les mêmes qu'à l'étape 2), puis « Publier ».
   C'est ça qui empêche n'importe qui d'autre de lire le carnet.
4. **Lier l'appli** : roue dentée ⚙ > Paramètres du projet > en bas « Vos applications » > icône `</>` (Web) >
   surnom `carnet` > Enregistrer. Firebase affiche un bloc `const firebaseConfig = { ... }`.
   Ouvre `config.js` et remplace `null` par ce qui est entre les accolades, accolades comprises :
   `window.FIREBASE_CONFIG = { apiKey: "...", authDomain: "...", ... };`
5. Dans Authentication > Paramètres > « Domaines autorisés », ajoute `TON-PSEUDO.github.io`.
6. Envoie `config.js` sur GitHub (avec le reste).

Les photos sont réduites automatiquement (environ 150 Ko chacune) et rangées dans la base : pas besoin
de l'option payante « Storage ». Le plan gratuit suffit largement pour un garage.

## 3. Installer sur les iPhone (toi et ton père)

1. Ouvre l'adresse de l'appli dans **Safari** (c'est le plus simple et le plus fiable pour l'installer).
2. Bouton Partager (carré avec une flèche) > « Sur l'écran d'accueil » > Ajouter.
3. Lance toujours l'appli depuis l'icône de l'écran d'accueil, et connecte-toi **dans l'appli**
   (la connexion faite dans Safari n'est pas reprise par l'icône, c'est normal).
4. Pour la photo : sur une fiche, « Ajouter une photo du véhicule ». L'iPhone propose
   « Prendre une photo » ou « Photothèque ». Touche la photo pour la voir en grand, la changer ou la retirer.

Si tu avais déjà des notes en mode local sur ton téléphone, l'appli propose, après connexion, de les mettre
dans le carnet partagé.

## Sauvegarde

- « Exporter » crée un fichier `.json` avec toutes les notes et les photos (copie de secours).
- « Restaurer » recharge ce fichier. En carnet partagé, ça ajoute/remplace les véhicules du fichier
  sans effacer les autres.

## Bon à savoir

- Sur chaque note, le prénom de celui qui l'a ajoutée (et de celui qui l'a cochée) s'affiche, pris dans l'email.
- La dictée (micro) utilise la reconnaissance vocale du téléphone, qui peut passer par Apple.
  Si tu veux zéro envoi, tape les notes à la main.
- Mot de passe oublié : bouton sur l'écran de connexion (un email de réinitialisation est envoyé).
- Pour mettre à jour l'appli : remplace les fichiers dans le dépôt, et change `carnet-v2` en `carnet-v3` dans `sw.js`.
