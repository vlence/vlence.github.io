# My personal website

The source for [vlence.github.io](https://vlence.github.io).

## Running & building locally

This website is built with Hugo. [Install Hugo](https://gohugo.io/installation/) if you haven't
already.

Additionally some dependencies like Tailwind are needed from NPM.
Install them.

```console
npm install
```

Now we can start the server. This is meant to be used locally
for development only. The server is listening at port 8080.

```console
npm start
```

## Development

### CSS

This website uses [Tailwind](https://tailwindcss.com). I'm
using Hugo's builtin [TailwindCSS function](https://gohugo.io/functions/css/tailwindcss/) to automatically
generate the CSS. The main entry point for the CSS is
`assets/css/main.css`. The `<link>` is generated using
`layouts/_partials/css.html` (also see `layouts/baseof.html`).

## Deployment

Website is deployed to vercel.
