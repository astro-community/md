# Astro Markdown <img src="https://jonneal.dev/astro-logo.svg" alt="" width="90" height="90" align="right">

**Astro Markdown** lets you render arbitrary Markdown content in **[Astro](https://astro.build)**, optionally integrating with any existing configuration.

[![NPM Version][npm-img]][npm-url]
[![Open in StackBlitz][stackblitz-img]][stackblitz-url]

```astro
---
import { Markdown } from '@astropub/md'
---
<Markdown of={`# Hi, there!` /* Renders `<h1>Hi, there!</h1>` */} />
```

```astro
---
import { markdown } from '@astropub/md'
---
{
  /* Renders `<h1>Hi, there!</h1>` */
  await markdown(`# Hi, there!`)
}
```

## Usage

Add **Astro Markdown** to your project.

```shell
npm install @astropub/md
```

Use **Astro Markdown** in your project.

```astro
---
import { markdown } from '@astropub/md'
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Astro</title>
  </head>
  <body>
    {await markdown(
`# Hi, there!

Welcome to my _website_.`
    )}
  </body>
</html>
```

Optionally, integrate **Astro Markdown** with your existing Astro configuration.

```js
// astro.config.js
import { defineConfig } from 'astro/config'
import markdownIntegration from '@astropub/md'

export default defineConfig({
  integrations: [
    markdownIntegration(),
  ],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
    // syntaxHighlight: 'shiki'
    // syntaxHighlight: 'prism'
  }
})
```

Now `markdown` configuration is automatically applied to `<Markdown>` components and `markdown()` functions.

Use `markdown.inline()` or `<Markdown.Inline>` to handle short strings of text without the surrounding paragraph.

```astro
---
import { Markdown } from '@astropub/md'
---
<Markdown.Inline of={
  /* Renders `Welcome to my <em>website</em>.` */
  `Welcome to my _website_.`
} />
```

```astro
---
import { markdown } from '@astropub/md'
---
{await markdown.inline(
  /* Renders `Welcome to my <em>website</em>.` */
  `Welcome to my _website_.`
)}
```

<br />

Enjoy!

## Project Structure

Inside of this Astro project, you'll see the following folders and files:

```
/
├── demo/
│   ├── public/
│   └── src/
│       └── pages/
            ├── index.astro
│           └── ...etc
└── packages/
    └── md/
        ├── package.json
        └── ...etc
```

This project uses **workspaces** to develop a single package, `@astropub/md`.

It also includes a minimal Astro project, `demo`, for developing and demonstrating the component.

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
|:----------------|:---------------------------------------------|
| `npm install`   | Installs dependencies                        |
| `npm run start` | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./dist/`      |
| `npm run serve` | Preview your build locally, before deploying |

Want to learn more?
Read the [Astro documentation][docs-url] or jump into the [Astro Discord][chat-url].

[chat-url]: https://astro.build/chat
[docs-url]: https://github.com/withastro/astro

[npm-img]: https://img.shields.io/npm/v/@astropub/md?color=%23444&label=&labelColor=%23CB0000&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE1MCAxNTAgNDAwIDQwMCIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTE1MCA1NTBoMjAwVjI1MGgxMDB2MzAwaDEwMFYxNTBIMTUweiIvPjwvc3ZnPg==&style=for-the-badge
[npm-url]: https://www.npmjs.com/package/@astropub/md
[stackblitz-img]: https://img.shields.io/badge/-Open%20in%20Stackblitz-%231374EF?color=%23444&labelColor=%231374EF&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjEwIDggMTIgMTgiIGhlaWdodD0iMTgiIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0xMCAxNy42aDUuMmwtMyA3LjRMMjIgMTQuNGgtNS4ybDMtNy40TDEwIDE3LjZaIi8+PC9zdmc+&style=for-the-badge
[stackblitz-url]: https://stackblitz.com/github/astro-community/md
