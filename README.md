# 🧑‍💻 Matthew Scholta

<!-- [![Codecov][image-codecov]][link-codecov] -->

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id ea vitae explicabo ut harum, atque vel. Est aut nisi omnis, voluptatum, laudantium dolores vel sit delectus debitis velit consequatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo vitae corporis maxime quam, facilis porro. Est fuga, vel repellendus officiis neque totam ut itaque accusamus beatae assumenda sit recusandae optio.

**Resources & Tech:**

- 🏎️ [NextJS](https://nextjs.org)
- 🎓 [RecoilJS](https://recoiljs.org/)
- 🎨 [TailwindCSS](https://tailwindcss.com)
- 🧰 [Vercel](https://vercel.com)

## ⚙️ Installation

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptas adipisci incidunt autem expedita eaque et ex aliquam? Accusantium cupiditate, similique dolores ea minima vitae sequi. Pariatur, non. Perspiciatis, maxime.

```bash
# 📦 Install our NPM Packages
npm install

# 🏗️ Build the app once
npm run build
```

## 🧑‍💻 Development

Getting started coding is simple, once you've completed the "installation" section above, you can startup local development with the following commands:

```bash
# 🔥 Fast Refresh
npm run start:dev

# 🌎 Open the URL
open http://localhost:9000
```

## 📂 Folder Structure

```bash
├── build                       # Tooling
│   ├── coverage                  # Code coverage reports
│   ├── cypress                   # E2E / Integration testing
│   ├── templates                 # Generator templates
│   └── test                      # Unit tests / Jest + React Testing Library
│
├── public                      # Static assets served by Vercel CDN
│   ├── manifest.json             # Use for SEO and PWA's
│   ├── fonts                     # All of our font files
│   └── images                    # Images used in the application
│
├── src                         # Application code
│   ├── __test__                  # Tests for our "pages" directory
│   ├── components                # --- bit of a GOD folder ---
│   ├── config                    # Configuration broken up into small pieces
│   ├── generated                 # 🤖 Generated code, typings and React Hooks
│   ├── graphql                   # Queries and mutations as ".graphql"
│   ├── hooks                     # React hooks for our application
│   ├── pages                     # Each route is inherently defined here
│   ├── recoil                    # RecoilJS is used for "local state"
│   ├── routes                    # Folder structure that maps to our "pages"
│   ├── services                  # Think "tracking" and "global" or "application"
│   ├── styles                    # Application CSS and "@barguide/style-guide"
│   ├── types                     # TypeScript Types
│   └── utils                     # Utilities used throughout the app
│...
```

<!-- IMAGES -->

[image-codecov]: https://codecov.io/gh/visormatt/mattscholta/branch/main/graph/badge.svg?token=XXXXXX 'CodeCov'

<!-- LINKS -->

[link-codecov]: https://codecov.io/gh/visormatt/mattscholta 'CodeCov'
