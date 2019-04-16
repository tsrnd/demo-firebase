Demo Firebase
=============

This project includes:
- Firebase Hosting:
  + Static web app for normal user at `/`
- Firebase Functions:
  + API app for normal user at `/api`
  + Admin app for admin user at `/admin`
    - AngularJS for frontend at `/admin`
    - ExpressJS for backend (page router, api) at `/admin/api`

## Development

To start building this project, you first need to install Firebase CLI.

```bash
npm install -g firebase-tools
```

To build this project, just:

```bash
npm run build
```

## Deployment

There're two `firebase` commands should be replaced with `npm run` scripts:

| firebase command | npm run script |
|--|--|
| firebase serve | npm run serve |
| firebase deploy | npm run deploy |

This replacement makes sure the project is built well before serve in local environment or deploy in production environment.

>This project uses NodeJS v8.15.1 for both development & production runtime.
