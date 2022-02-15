# snowpack-plugin-banner

Add comments to the production asset files (JS/CSS) of your Snowpack build.

This plugin uses the `dedent` package under the hood, so you don't need to worry about overly-indented files in your final build files. Adding multi-line, indented template string literals is no issue thanks to this.

## Install

### npm

`npm i -D snowpack-plugin-banner`

## Options

| Name     | Type   | Value(s) / Default      | Description                                                               |
| -------- | ------ | ----------------------- | ------------------------------------------------------------------------- |
| banner   | string |                         | The comment you want adding to your file.                                 |
| position | string | `top \| bottom` / `top` | Decide whether to add the comment to the top or bottom of the file.       |
| include  | array  | `[string]` / `[]`       | A list of files to add the comment to, relative to your public directory. |

## Usage

### Add comment to bottom of file, omitting the `position` property will default the comment to the top.

```js
// snowpack.config.js
module.exports = {
  // ...
  plugins: [
    ['snowpack-plugin-banner', {
      banner: `
        /**
          * Copyright (c) my company 2022
          * LICENSE: MIT
          */
      `,
      position: 'bottom'
    }
  ]
  // ...
}
```

### Only add comment to a subset of files

```js
// snowpack.config.js
module.exports = {
  // ...
  plugins: [
    ['snowpack-plugin-banner', {
      banner: `
        /**
          * Copyright (c) my company 2022
          * LICENSE: MIT
          */
      `,
      include: ['app.js', 'styles.css', 'utils.js']
    }
  ]
  // ...
}
```
