<div align="center">

  <h1><code>React Typescript With Rust WASM</code></h1>

<strong>
Boilerplate of a React TypeScript project that uses Rust WASM as a library. 
</strong>
<br/>

<p>
More information can be found at:
</p>

<h3>
<a href="https://github.com/rustwasm/wasm-pack">wasm-pack</a>
<span> | </span>
<a href="https://github.com/facebook/create-react-app">Create React App</a>
</h3>
</div>

# About this boilerplate
This is a React Typescript template that uses a Rust library to run web assembly. By building the Rust project you will be able to display an alert on the browser.

## Steps To Running This Project
- Modify and build WASM. (Explained below)
- Modify the `src/types/my-wasm.ts` file such that it exports your functions and properties.
- Run the project with `npm`.
- Start hacking!

(Below part is taken from the create-react-app README)
## Available Scripts For React

In the root directory, you can run:

```
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```
npm test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Available Scripts For Rust WASM
The Rust library was created using `cargo generate`. It is located under the `lib` folder. You have to re-build the project whenever you make a change to the code.

(Below part is taken from the generated projects README)

[**📚 Read this template tutorial! 📚**][template-docs]

This template is designed for compiling Rust libraries into WebAssembly and
publishing the resulting package to NPM.

Be sure to check out [other `wasm-pack` tutorials online][tutorials] for other
templates and usages of `wasm-pack`.

[tutorials]: https://rustwasm.github.io/docs/wasm-pack/tutorials/index.html
[template-docs]: https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/index.html

### 🛠️ Build with `wasm-pack build`

```
cd lib && wasm-pack build
```

### 🔬 Test in Headless Browsers with `wasm-pack test`

```
wasm-pack test --headless --firefox
```

### 🎁 Publish to NPM with `wasm-pack publish`

```
wasm-pack publish
```
### 🔋 Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.

## Learn More
[Learn more about `cargo generate` here.](https://github.com/ashleygwilliams/cargo-generate)

[Rustlings](https://github.com/rust-lang/rustlings) is a great source to learn Rust.

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
