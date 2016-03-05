# <%= appName %>

A React Native app with TypeScript.

## Advanced templates

Each branch in this repository has a more complex setup based on a previous one.

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

