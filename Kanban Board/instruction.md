1. We are using Font Awesome. But since, my html page does not know about font awesome. So in our `index.html` we should link the CDN for the `fontawesome`.

2. We have used `overflow-x : hidden` to hide the horizontal scroll bar.

3. We have used `overflow-y : auto` to make the vertical scroll bar to appear when required if not required then it will hide it.

4. We have used `transform: scale(1.05)` on the hover and `transition: transform 0.3s ease-in-out;` on the element to give animation effect.

5. We have styled the Modal Container.

6. We have added Event Listener to the PLUS Button. If the user clicks on the PLUS Button he/she will be able to show/hide the Modal Container. We have used a variable `isModalHidden` default value is `true`. If we are clicking on the PLUS Sign then if the value is `true` then we are displaying the modal and making the value `false`. And if the user again clicks on the PLUS Sign then since the value is `false` then we will hide the modal and make the value `true`.

7. If the user enters anything in the `taskInput` and presses Enter then whatever the user has typed in, then the modal container gets hidden and whatever he/she has typed in that gets populated as a ticket. And then if again the user clicks on PLUS sign then a new modal container with nothing written in the text-area gets shown.
We have added a `keyup` EVENT Listener on the text area. And inside the Callback we have implemented a check that if the user presses Enter (e.key == "Enter) then we are taking in the current value and calling in the function `createTicket()` and passing in whatever the user has typed in as an argument.
The `createTicket` will generate a ticket and attach it in the DOM.
Now we know that since the user has pressed ENTER then the modal container should disappear. So we made `modalContainer.style.display = "none"` and `isModalHidden = true;`. Now for the last use case that lets say after the user has generated the ticket and the modal container goes away. And if the user clicks on the PLUS Sign then previously whatever the user has typed inside the textarea that should not appear. So what we did was we `taskInput.value = ""` inside taskInput Event Listener only at the last. So that current task does not gets populated when the user is trying to add a new task. 

8. When the user clicks on any ticket/tickets we can now delete that/those by clicking on DEL Button.

For every ticket we are generating inside the `createTicket` we are adding an EVENT Listener of click to it and attaching a callback called `delTicket`. Inside the `delTicket` we can access which particular ticket was/were selected via `target.key`. Now we are adding an EVENT Listener of `click` to DEL Button denoting that now if the user presses the Delete Button, we are removing the `target.key`.