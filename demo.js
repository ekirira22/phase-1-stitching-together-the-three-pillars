// We use the Objects below to control toggling like / unlike status

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

// STEP 1: The line of code below is what lets JavaScript find the elements that
// we want to make clickable. Without JavaScript, clicking on these heart shapes
// does nothing. Uncomment the code and refresh the demo page. 

//ALGO
//1. Fetch the nodes that you want the changes on
//2. Loop through each node, which attaching an event listener
//3. Create a function that will effect the change

const heartglyphs = document.querySelectorAll('.like-glyph')
console.log(heartglyphs)

for (const glyph of heartglyphs){
  glyph.addEventListener("click", likeUnlikeFunction);
}

function likeUnlikeFunction(e){
  const hearts = e.target
  console.log(hearts)
  mimicServerCall()
    .then(function(serverMessage){
      alert("This means server was alerted")
      alert(serverMessage)

      hearts.innerText = glyphStates[hearts.innerText]
      hearts.style.color = colorStates[hearts.style.color]

    })
    .catch(error => {
      alert("Something went wrong")
    })
}







function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300)
  });
}
