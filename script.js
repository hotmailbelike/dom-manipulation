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

var color=false;
function changeBackground(event){
    color = !color;
    document.getElementsByTagName('body')[0].style.backgroundColor = event.target.id;
    // document.getElementsByTagName('body')[0].style.backgroundColor = color ? 'red':'green';
}

function takeMeToGoogle(event){
    // window.location.href = 'https://www.google.com';
    window.open('https://www.google.com','_blank');

}

/* Task 4 using jQuery */
