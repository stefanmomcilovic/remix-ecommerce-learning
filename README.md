# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm install
npm run dev
```

Tutorial followed: https://www.youtube.com/watch?v=r3n7NPlv7bs

Needed https://sanity.io/ cd to sanity run

```sh
 npm run dev
```

Add products there + Add product to Stirpe and put your SECRET In .env

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
