# Astro Example Project with Vuejs and Reactjs

## Screenshot

<img src="https://github.com/maliksenpai/astrojs-cart-app/blob/main/github/mainpage.png" width="100%" />

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```
- public
  - favicon.svg
- src
  - assets
    - bg_bggenerator_com.png
  - components
    - react
      - CartItemSelectList.jsx
      - CartItemSelectListContainer.jsx
    - vue
      - CartList.vue
      - PriceCard.vue
  - env.d.ts
  - layouts
    - Layout.astro
  - pages
    - index.astro
    - purchase
      - index.astro
  - store
    - cartItems.js
- tsconfig.json
- .gitignore
- astro.config.mjs
- package-lock.json
- package.json
- README.md

```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Libraries and Technologies

<ul>
<li>Astrojs</li>
<li>Reactjs</li>
<li>Vuejs</li>
<li>Bootstrap</li>
<li>Nanostores</li>
</ul>


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

