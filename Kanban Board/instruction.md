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

9. Added Lock/Unlock Image during ticket creation.

10. As of now if we click anything inside the ticket, a border gets applied. But we want border to get applied when the user clicks on the ticket as a whole. Currently if we click on lock/unlock button, ticket number etc the border gets applied. So what we did is inside the event Listener which is applied on the ticket, we made a check if the class List contains `ticket` then only apply the border other-wise do not.

11. Implemented a functionality that if the user clicks on the lock/unlock button , it gives us a toggle functionality. We implemented this by check if the current button as class `fa-lock` then remove `fa-lock` and apply `fa-lock-open` to the classlist. 
If the button has `fa-lock-open` then remove it and apply `fa-lock`.


12. Added the implementation that in a ticket if the user clicks on the lock button, it will unlock and the user will be able to edit the ticket description. Then again if the user clicks on the unlock button. The ticket will be locked and the updated content will be shown.
Implementation :- When the user clicks on the LOCK button, I am making the lock button Unlocked and in the `ticket-description` I am setting an attribute that `contentEditable="true"`. Now I am adding an Event Listener on the ticket description and getting what the user has typed in and making the textContent equivalent to the updated text.

Now currently the button is un-locked. And as per the scenario, if the user again clicks on the Button I am making the button `Lock` and setting the attribute value of `ticket-description` as `false`.

13. Implemented a Functionality that if the user clicks on any of the Priority color a `purple` border will be applied on the color the user has selected. If the user clicks on another color, then the border will be removed from the old color and applied to the new one.

We have implemented `Event Delegation` on the parent class of `color-priority` and also picked up all the colors available to us in a list . Now we have added a click Event Listener on the parent and applied a check that execute the callback if the event contains a CHILD class. We did this because if the user clicks on the parent Class. I will not execute the callback. Now once the user clicks on a specific child, we will be able to execute the callback inside the parent. Firstly, I am iterating over all the children and removing any existing border and then for the specfic element. I am applying the border. 
Now what happens is that if the user clicks on another color, first the existing border will get removed then the new border gets applied.

We have made `defaultTicketColor = "red"`. And when the user is clicking `Enter` in the task input if lets say we are not clicking on any color we are sending ` createTicket(currentValue,defaultTicketColor)`. And if lets say if the user has selected any color we are sending that color as `defaultTicketColor`. Also, when the user is clicking on the ADD Button I am clearing out the existing border applied on the priority color. By Doing this we are removing the last selected color from the palette.