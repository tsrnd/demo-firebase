Demo Firebase
=============

This project includes:
- Firebase Hosting:
  + Static web app for normal user at `/`
- Firebase HTTP Functions:
  + API app for normal user at `/api`
  + Admin app for admin user at `/admin`

## Development

### Prebuild

Clone the example files and correct your Firebase project information:
- `.firebaserc`

### Build

To start building this project, you first need to install Firebase CLI.

```bash
npm install -g firebase-tools
```

Install dependencies.

```bash
npm install
```

To build this project, just:

```bash
npm run build
```

## Deployment

### Serve Local

```bash
npm run serve
```

### Deploy to Firebase

```bash
npm run deploy
```

>This project uses NodeJS v8.15.1 for both development & production runtime.
