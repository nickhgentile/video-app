This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create a .env file in root of project:

###Sensitive Information, do not check the signalwire info into repo!  Below are examples of what this information will look like.
- **aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee** is project ID obtained from signalwire
- **foo** space name of signalwire environment
- **PTabcdefghijklmnopqrstuvwxyznowiknowmyabcs12345678** API obtained from signalwire 
 
You can create demo signalwire environments for local testing otherwise obtain shared dev env values from project team

###Example .env file
```bash
PROJECT_ID=aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
SPACE=https://foo.signalwire.com/api/video
API_KEY=PT9be76275eb410d0e8914ce87f013647c302a6044e9f77aad
PORT=3000
REACT_APP_AUTH0_DOMAIN="fandog.us.auth0.com"
REACT_APP_AUTH0_CLIENTID="qUbFlopxiIrHpCKPkg8ZR8wGJVzF4gPg"
REACT_APP_AUTH0_REDIRECT="http://localhost:3000"

AUTH0_SECRET=
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://fandog.us.auth0.com
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
```


```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Deploy on Heroku

```bash
git push origin
```

Navigate to [site](https://experience.aardvark.guru/)
