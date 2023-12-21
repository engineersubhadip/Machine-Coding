1. When the user will click on any cell, we want to show a `X` or `O`. But which cell the user has clicked, how do we get to know ? -> `Should we add CLICK Event Listeners to all the cells ?`

2. Remedy :-> `We have added a click Event Listener to the outer container. And we have not selected all the inner and added Event Listener to all of them.` Why ?? -> If we click on any inner cell. Lets see the flow of events.
First :- Capturing Phase :- Nothing is captured 
Second :- Targeting Phase:- We reached the cell we targeted.
Third :- Bubbling Phase :- Since the current target cell has no callback attached to it. So nothing gets executed, but we pass on the current cell's reference above its parent. Parent of the inner cell is outer . Outer has a callback attached to it. Callback has a print statement `e.target`. Since the actual target was the inner cell. So we print which cell we clicked on. That is whatever was the event object attached to the `outer` that gets over-ridden and the event object associated with the `target` gets printed.

3. Populated the X and O. We took a variable `chance` and initialized it with `false`. (If chance is `false` we will put O and if `true` we will put X)
Now whenever a user is clicking on the cell I am checking that 

A. if the chance is `true` and the cell is empty then -> We are populating the cell with X and making the chance as `false`

B. If the chance is `false` and the cell is empty then -> We are populating the cell with O and making the chance as `true`.

4. We have used a 2D array to store the value of which cell gets X or O. Every time we populate either X or O we will check in the entire 2D array if we got consecutive XXX or OOO. And if we have that we can declare a winner.