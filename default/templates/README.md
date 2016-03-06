# <%= appName %>

A React Native app with TypeScript.

Using React with TypeScript
- [Get started](http://source.coveo.com/2015/11/21/using-react-jsx-with-typescript/)
- [Workflow](http://blog.wolksoftware.com/working-with-react-and-typescript)

## Getting Started

Install dependencies:

```sh
npm install
```

Watch files and start React Native server:

```sh
npm run cli
```

### iOS

Open `ios/ReactNativeTS.xcodeproj` in XCode and hit *Run*.

### Android

Run:

```sh
npm run android
```

Or just `react-native android`

### Testing

This project is configured for using [Jest](https://facebook.github.io/jest/docs/tutorial-react.html)

## TypeScript

### Source

All your TypeScript source files go in `src` folder. Add subfolders as needed, such as:

```sh
/components
/tests
...
```

The TypeScript source files are automatically compiled to `.js` files in a `built` folder (as per default build config, see below).

### Build

Build ES5 javascript from TS files.

```sh
gulp build
```

or just `gulp` (*default* task is `build`)

### Config

TypeScript config options are defined in `tsconfig.json`. F.ex the output folder is set via `"outDir": "built"`

