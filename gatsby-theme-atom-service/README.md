# gatsby-theme-atom-service

Gatsby theme for website that curate Atom packages that provide and consume an [Atom service](https://flight-manual.atom.io/behind-atom/sections/interacting-with-other-packages-via-services/). Used to create the [AtomLinter](https://atomlinter.github.io) and [AtomBuild](https://atombuild.github.io) websites.

## Installation

In your Gatsby project, run:

```shell
npm install gatsby-theme-atom-service
```

## Usage

Add `gatsby-theme-atom-service` to your `gatsby-config.js`

```js
module.exports = {
  plugins: [
    "gatsby-theme-atom-service",
    /// or
    {
      resolve: "gatsby-theme-atom-service",
      options: {
        // customize any of the options below
      },
    },
  ],
};
```

### Site Metadata

In order for the theme to function please define the following in the `siteMetadata` field of your `gatsby-config.js`:

```js
module.exports = {
  siteMetadata: {
    // Your Project's Title, will also be the title of your website
    title: "Your Project's Amazing Title!",
    // The canonical url of your website
    siteUrl: "https://example.dev",
    // Description of your project, should be about a sentence in length.
    description: "A Very Descriptive, Snippet All About Your Project.",
    // Navigation links. Will be included in the navbar and hamburger menu.
    nav: [
      {
        name: "A Helpful Link for Navigation",
        url: "https://helpful.dev/",
      },
      /// ...
    ],
  },
};
```

### Data

YAML is used to curate your list of provider and consumer packages. In your content folder (`./content/` by default) create a `consumers.yml` and `providers.yml` with the following structure:

`consumers.yml`:

```yml
- title: ""
  author: ""
  url: https://atom.io/packages/example
  code: https://github.com/example/example
# ...
```

`providers.yml`:

```yml
- type:
  title: ""
  modal: ""
  types:
    - title: ""
      modal: ""
      packages:
        - title: ""
          url: https://atom.io/packages/example
```

### Customization

The following options can be passed to the theme in `gatsby-config.js` to customize the site's functionality:

| Field Name        | Type      | Default Value         | Description                                                                                                       |
| ----------------- | --------- | --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `basePath`        | `string`  | `"/"`                 | The base path of the theme. Where it will render out your data. Default is the index of your site.                |
| `assetPath`       | `string`  | `"./content/assets/"` | The directory in your Gatsby site where site assets (e.g. logos, site images) are stored.                         |
| `contentPath`     | `string`  | `"./content/data/"`   | The folder in your Gatsby site where your data files are stored.                                                  |
| `renderConsumers` | `boolean` | `true`                | Should the theme render content from the consumers data file. Will not check for or requre data file if `false`.  |
| `renderProviders` | `boolean` | `true`                | Should the theme render content from the providers data file. Will not check for or require data file if `false`. |
