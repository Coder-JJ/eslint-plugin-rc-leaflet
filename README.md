# eslint-plugin-rc-leaflet

eslint-plugin-rc-leaflet

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-rc-leaflet`:

```
$ npm install eslint-plugin-rc-leaflet --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-rc-leaflet` globally.

## Usage

Add `rc-leaflet` to the `plugins` section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "rc-leaflet"
  ]
}
```

Then configure the rules you want to use under the `extends` section, there are six rule groups in total:

```json
{
  "extends": [
    "plugin:rc-leaflet/es-dev"
  ]
}
```

```json
{
  "extends": [
    "plugin:rc-leaflet/es-prod"
  ]
}
```

```json
{
  "extends": [
    "plugin:rc-leaflet/ts-dev"
  ]
}
```

```json
{
  "extends": [
    "plugin:rc-leaflet/ts-prod"
  ]
}
```

```json
{
  "extends": [
    "plugin:rc-leaflet/react-dev"
  ]
}
```

```json
{
  "extends": [
    "plugin:rc-leaflet/react-prod"
  ]
}
```

You can also use list of rules together, configs below means your project use `Typescript` + `React` in `prod` env:

```json
{
  "plugins": [
    "rc-leaflet"
  ],
  "extends": [
    "plugin:rc-leaflet/ts-prod",
    "plugin:rc-leaflet/react-prod"
  ]
}
```
