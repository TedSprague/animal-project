setMainText("Think of an animal...");



// //document.getElementById("text").innerHTML = askNameOfAnimal();

function setMainText (text) {
     document.getElementById("mainText").innerHTML = text;
}


document.getElementById('yes').addEventListener('click', loadAnimals);

function loadAnimals() {
    
    var xhr = new XMLHttpRequest(); //console.log('ok');
    xhr.open('GET', 'https://github.com/TedSprague/animal-project.git', true); //sets the parameters
    xhr.send;     //activates the open


    //console.log(xhr);

    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
    }



}











/*
var myData = JSON.parse(db);
console.log(myData[0]);
*/


/*
document.getElementById('yes').addEventListener('click', loadText);

function loadText() {
    //Create XHR object
    var xhr = new XMLHttpRequest();
    //console.log(xhr);
    //OPEN - type, url/fil, async
    xhr.open('GET', 'http://localhost:3000/animals', true);
    console.log('READYSTATE ', xhr.readyState);
    
    //OPTIONAL = used for loaders
    xhr.onprogress = function(){
        console.log('READYSTATE: ', xhr.readyState);
    } 

    xhr.onload = function() {
        console.log('READYSTATE ', xhr.readyState);
        if(this.status == 200) {
            //console.log(this.responseText);
            document.getElementById('text').innerHTML = this.responseText;
        } else if (this.status == 404) {
            document.getElementById('text').innerHTML = 'Not Found';
        }
    }

    xhr.onerror = function() {
        console.log('Request Error...');
    }
    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE ', xhr.readyState);
    //     if(this.readyState == 4 && status == 200){
    //         console.log(this.responseText);
    //     }
    // }
    
    
    
    xhr.send();   
}
*/



/*
function loadUser() {
    
    
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/animals', true);
    xhr.onload = function(){
        if(this.status = 200)
            var user = JSON.parse(this.responseText);
            console.log(user.name);
    }
    xhr.send;

}
*/













//readyState values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"



// function setText (text) {
//     document.getElementById("text").innerHTML = text;
// }


// function getResult () {
//     if (true)
//         console.log("true");
//     else
//         console.log("false");
// }

// function askNameOfAnimal() {
//     setText("What is the name of the animal you are thinking of?");
// }



/*
var json = JSON.parse('{"name":"dog"}');
console.log(json);

var jsonString = JSON.stringify(json);
console.log(jsonString);

jsonString = jsonString.replace()
*/

/*
var value = json.name;
console.log(value);

var newKey = "mammal"
console.log(newKey);

json = value;
console.log(json);
*/
/*
var myString = JSON.stringify(myObject);
console.log(myString);

var theData = '{"name":"dog","mammal":"true","carnivour":"true"}';
var myObj = JSON.parse(theData);
console.log(myString);
*/
//document.getElementById('text').innerHTML = myObj.name;
//var myString = JSON.stringify()
/*
var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.send();
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
}
*/
/*    
What is the name of the animal you are thinking of?

fur - Does the animal have fur?
carnivore - Is the animal mainly a carnivore?
scale - Does the animal have scale?
eggs = Does the animal lay eggs?
hard shelled eggs - Does the animal lay hard shelled eggs?
claws - Does the animal have claws?
four legged - Does the animal have four legs?

what distinguishes ---new animal name--- from a ---latest animal---
*/
/*
var animalContainer = document.getElementById("mainText");
var btn = document.getElementById("yes");

btn.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/animals');
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
        var ourData = JSON.parse(xhr.responseText);
        renderHTML(ourData);    
        } else {
            console.log("Connected to server but it returned an error :(");
        }
        
        //console.log(ourData[0]);
        //console.log(xhr.responseText);
        
    };

    xhr.onerror = function() {
        console.log("Connection error");
    };

    xhr.send();
    
});

function renderHTML(data) {
    var htmlString = "";

    for(i=0; i<data.length; i++) {
        htmlString = "<p>The animal is a " + data[i].name + "<p>";
        animalContainer.insertAdjacentHTML('beforeend',htmlString);
    }

    
}
*/

