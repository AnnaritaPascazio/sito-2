var btn = document.getElementById("go-button");


function buttonClicked()
{
console.log("Button clicked");

var customText = document.getElementsByClassName("my-input");
var results = document.getElementById("text");
console.log(customText)
results.innerHTML = customText.value;

}


/*var hobbies = ["pizza","gaming","reading","programming","music"];
hobbies.push("archery");
console.log(hobbies.shift()); //'Its like the pop method'
hobbies.unshift("blacksmithing");//it's used to add something
hobbies.forEach(function(i, ie) {
console.log("I like ", i, ie);
});
if(hobbies.indexOf('reading') > -1){
    console.log("I like reading!")
}

if(hobbies.indexOf('sports') === -1){
console.log("not in array")
}

//the pop method removes the last item from the list
//the push method is used to add elements to the list*/
btn.addEventListener("click",buttonClicked);