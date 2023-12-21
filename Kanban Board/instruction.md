1. We are using Font Awesome. But since, my html page does not know about font awesome. So in our `index.html` we should link the CDN for the `fontawesome`.

2. We have used `overflow-x : hidden` to hide the horizontal scroll bar.

3. We have used `overflow-y : auto` to make the vertical scroll bar to appear when required if not required then it will hide it.

4. We have used `transform: scale(1.05)` on the hover and `transition: transform 0.3s ease-in-out;` on the element to give animation effect.

5. We have styled the Modal Container.

6. We have added Event Listener to the PLUS Button. If the user clicks on the PLUS Button he/she will be able to show/hide the Modal Container. We have used a variable `isModalHidden` default value is `true`. If we are clicking on the PLUS Sign then if the value is `true` then we are displaying the modal and making the value `false`. And if the user again clicks on the PLUS Sign then since the value is `false` then we will hide the modal and make the value `true`.

7. Implemented a feature that on click of the Delete button the color will change. If the current color is BLACK it will change to RED. And if the current color is RED it will change to BLACK;
We have taken a global variable `delBtnColor` and set it to BLACK. We have added an EVENT Listener on the Del Button, then if the `delBtnColor` is BLACK we are changing the color of the Button to RED and `delBtnColor` to RED as well. And if the current color of `delBtnColor` is RED, then we are changing the button color to BLACK and color of `delBtnColor` to BLACK as well.