/* Task 1 */
var heading = document.getElementById('heading');
console.log(heading.textContent);

/*
Changing text of heading
*/

heading.innerHTML = "Fish";

/* Task 2 using plain JavaScript */
function addText(event){
    // console.log(event.target); //Telling me which node got clicked
    var p = document.createElement('p');
    p.innerText="Hello World";
    var div = document.getElementById('task2a');
    div.appendChild(p);
}


/* Task 4 using jQuery */
