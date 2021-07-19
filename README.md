# ABBR
This is a package for RitterIM that queries our glossary and outputs definitions as titles on `abbr` HTML tags.

## Installation
- Install via NPM: (Note - Currently this package is unavailable via NPM!)
  ```
  npm install @ritterim/abbr
  ```

- Import package into your `main.js` file:
  ```js
  import Abbr from '@ritterim/abbr';
  ```
- Declare a new Abbr class and run the `init()` method
  ```js
  const abbr = new Abbr();
  abbr.init();
  ```

## Setting a Glossary
### JS Object
You can create a JS Object for the glossary and pass it in with the `set()` method:
```js
const glossary = [{
  abbr: "FFS",
  definition: "Fee for service is a payment model in healthcare, where providers are paid for each service performed. Examples of services include individual tests, procedures, or treatments.",
  role: null,
  term: "Fee for Service"
}];

abbr.set(glossary);
abbr.init();
```

### JSON File
You can also set the glossary by passing in the path to a JSON file:
```js
const glossary = './data/glossary.json';
abbr.set(glossary);
abbr.init();
```

## Development

### Setup
1. Clone this repo
2. Navigate into the directory
3. Run `npm install`

### Local Development
- Start the application by running: `npm run dev`
- Script is located in `lib/main.js`
- Test script by updating `index.html`
- Browse to `http://localhost:3000/`

### Building
- To build package, run: `npm run build`