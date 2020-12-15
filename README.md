# Algorithm to Randomise Words 💫 

Type some words and see the letters randomising until they resolve and match your words

![Screenshot of word randomiser](https://github.com/rolandjlevy/js-word-randomiser/blob/master/images/screenshot.png?raw=true "Screenshot of word randomiser")

### Links 🔗
- [See the demo](https://js-word-randomiser.rolandjlevy.repl.co/)
- [View the source code](https://repl.it/@RolandJLevy/js-word-randomiser)
- [Explore the Github repo](https://github.com/rolandjlevy/js-word-randomiser)

### Features 💡
- Define the speed and message using the `speed` and `msg` parameters at end of the URL and send it to a friend, like this: [https://js-word-randomiser.rolandjlevy.repl.co?**speed=50&msg=I+Love+JavaScript!**](https://js-word-randomiser.rolandjlevy.repl.co?speed=50&msg=I+Love+JavaScript%21)
- Built from scratch with CSS and JavaScript - no frameworks or libraries like React or Vue
- Completely responsive and mobile friendly

### Notes 📝
- Font being used is ['Major Mono Display' from Google Fonts](https://fonts.google.com/specimen/Major+Mono+Display)
- Adding a gradient to text is [explained here](https://fossheim.io/writing/posts/css-text-gradient/)
- Randomising functions are [explained on developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- How to create an array containing all the letters of the alphabet [explained on stackoverflow.com](https://stackoverflow.com/questions/12376870/create-an-array-of-characters-from-specified-range)
- Using the [CDN](https://www.jsdelivr.com/package/npm/simple-query-string) from [simple-query-string](https://www.npmjs.com/package/simple-query-string) to parse URL query strings for parameters `speed` and `msg`