# Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local (and network*) server at port :8080
npm run dev

# Build for production in the dist/ directory
npm run build
```
*get access to your project (in development mode) from all devices connected to your network!

## How to use this template ?

<p class="text-left">To use this template efficiently you must : </p>

1. Run the _npm run dev_ command to start the development server.
2. Write the HTML of your project in the file _./src/index.html_.
3. Write the CSS of your project in the file _./src/style.css_. The use of SASS is quite possible. To do so, just create a _style.scss_ file in the _./src_ folder and use the extension [Live Sass Complier](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass). You can also use a _SASS Loader_ for Webpack.
4. The _./src/script.ts_ file will be your main file. You can write your entire TypeScript project in it or use the _./src/TS/_ file to put all your _Class_ in it and export it to the _./src/script.ts_. The bundle does not contain any configuration to split the _bundle.js_ into several parts.
5. All your assets (images, fonts, etc.) should be placed in the _./static_ file. Note that you will have to declare all your other assets in the _./bundler/webpack.common.js_ file in the _rules_ object in the same way as the images.
6. Run the _npm run build_ command to automatically create a _./dist_ folder containing your entire project (HTML, CSS, all your assets and TypeScript transpiled in JavaScript) in minify format. Once this command is executed your project is ready for the web and can be directly deployed via the web host of your choice.
