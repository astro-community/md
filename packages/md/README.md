> [!IMPORTANT]
> This is a fork of [@astropub/md](https://github.com/astro-community/md) — all the original hard work was done by its authors. This fork swaps the rendering engine from remark/rehype to **[Sätteri](https://satteri.bruits.org/)** (a Rust-backed Markdown pipeline) and targets **Astro 7**.

# Astro Markdown <img src="https://jonneal.dev/astro-logo.svg" alt="" width="90" height="90" align="right">

**Astro Markdown** lets you render any Markdown content in **[Astro](https://astro.build)**, powered by **[Sätteri](https://satteri.bruits.org/)**.

[![NPM Version][npm-img]][npm-url]
[![NPM Downloads][download-img]][download-url]

```astro
---
import { Markdown } from '@mashehu/astropub-md'
---
<Markdown of={`# Hi, there!` /* Renders `<h1>Hi, there!</h1>` */} />
```

```astro
---
import { markdown } from '@mashehu/astropub-md'
---
{
  /* Renders `<h1>Hi, there!</h1>` */
  await markdown(`# Hi, there!`)
}
```

## Usage

Add **Astro Markdown** to your project.

```shell
npm install @mashehu/astropub-md
```

Use **Astro Markdown** in your project.

```astro
---
import { markdown } from '@mashehu/astropub-md'
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

Optionally, add the integration. It inherits the relevant parts of your Astro `markdown` configuration (`gfm` and `smartypants`) and lets you pass [Sätteri](https://satteri.bruits.org/) options directly.

```js
// astro.config.js
import { defineConfig } from 'astro/config'
import markdownIntegration from '@mashehu/astropub-md'

export default defineConfig({
  integrations: [
    markdownIntegration({
      // Sätteri `CompileOptions` — applied to every render
      features: {
        gfm: true,
        smartPunctuation: true,
        // math: true,
        // wikilinks: true,
      },
      // mdastPlugins: [],
      // hastPlugins: [],
    }),
  ],
  markdown: {
    // `gfm` and `smartypants` are mapped onto Sätteri features automatically
    gfm: true,
    smartypants: true,
  },
})
```

> [!NOTE]
> Sätteri does **not** use the remark/rehype ecosystem, so Astro's `remarkPlugins`, `rehypePlugins`, and `syntaxHighlight` options have no effect here. Use Sätteri's own [`mdastPlugins` / `hastPlugins`](https://satteri.bruits.org/) instead, passed to `markdownIntegration()` or per call as the second argument to `markdown()`.

Now that configuration is automatically applied to `<Markdown>` components and `markdown()` functions.

Use `markdown.inline()` or `<Markdown.Inline>` to handle short strings of text without the surrounding paragraph.

```astro
---
import { Markdown } from '@mashehu/astropub-md'
---
<Markdown.Inline of={
  /* Renders `Welcome to my <em>website</em>.` */
  `Welcome to my _website_.`
} />
```

```astro
---
import { markdown } from '@mashehu/astropub-md'
---
{await markdown.inline(
  /* Renders `Welcome to my <em>website</em>.` */
  `Welcome to my _website_.`
)}
```

<br />

Enjoy!

---

Want to learn more?
Read the [Sätteri documentation][satteri-url], the [Astro documentation][docs-url], or jump into the [Astro Discord][chat-url].

[chat-url]: https://astro.build/chat
[docs-url]: https://github.com/withastro/astro
[satteri-url]: https://satteri.bruits.org/

[npm-img]: https://img.shields.io/npm/v/@mashehu/astropub-md?color=%23444&label=&labelColor=%23CB0000&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE1MCAxNTAgNDAwIDQwMCIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTE1MCA1NTBoMjAwVjI1MGgxMDB2MzAwaDEwMFYxNTBIMTUweiIvPjwvc3ZnPg==&style=for-the-badge
[npm-url]: https://www.npmjs.com/package/@mashehu/astropub-md
[download-url]: https://www.npmjs.com/package/@mashehu/astropub-md
[download-img]: https://img.shields.io/badge/dynamic/json?url=https://api.npmjs.org/downloads/point/last-week/@mashehu/astropub-md&query=downloads&label=⇓+week&color=%23444&labelColor=%23EEd100&style=for-the-badge
