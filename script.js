const display = document.getElementById("display")


function append(event) {
    
    display.value += event.target.textContent;
}

function clearinput() {
    display.value = "";
}
function result() {

    var answer = display.value;
    var output;

    try {
        output = eval(answer);
        display.value = output;
    } 
    catch (error) 
    {

        display.value = "Error"

    }
}
