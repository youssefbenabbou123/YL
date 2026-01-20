# Configuration des variables d'environnement

Pour que le serveur fonctionne correctement, vous devez créer un fichier `.env` à la racine du projet avec les variables suivantes :

```env
RESEND_API_KEY=your_resend_api_key_here
TEST_EMAIL=youcef.lebkiri.pro@gmail.com
PORT=3001
```

## Instructions

1. Créez un fichier `.env` à la racine du projet
2. Copiez les variables ci-dessus dans le fichier
3. Remplacez `your_resend_api_key_here` par votre vraie clé API Resend
4. Ajustez `TEST_EMAIL` si nécessaire
5. Le fichier `.env` est déjà dans `.gitignore` et ne sera pas commité

## Sécurité

⚠️ **Important** : Ne commitez jamais le fichier `.env` dans Git. Il contient des informations sensibles.
