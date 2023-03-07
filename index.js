let storeemoji = JSON.parse(localStorage.getItem("Emoji")) || ["😎","🏊‍♂️","✈️"];

function renderEmojis() {
  storeemoji = JSON.parse(localStorage.getItem("Emoji")) || storeemoji;
  const emojiContainer = document.getElementById("emoji-container");
  if (emojiContainer !== null) { // check if emojiContainer is null
    emojiContainer.innerHTML = ""; // clear the emoji container
    for (let i = 0; i < storeemoji.length; i++) {
      const emoji = document.createElement("span");
      emoji.textContent = storeemoji[i];
      emojiContainer.append(emoji);
    }
    localStorage.setItem("Emoji", JSON.stringify(storeemoji));
  }
}

renderEmojis();



const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        storeemoji.push(emojiInput.value)
        emojiInput.value = ""
        localStorage.setItem("Emoji", JSON.stringify(storeemoji))
        renderEmojis()
        
    }
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        storeemoji.unshift(emojiInput.value)
        emojiInput.value = ""
        localStorage.setItem("Emoji", JSON.stringify(storeemoji))
        renderEmojis()
        
    }
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    storeemoji.pop()
    localStorage.setItem("Emoji", JSON.stringify(storeemoji))
    renderEmojis()
    
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
    storeemoji.shift()
    localStorage.setItem("Emoji", JSON.stringify(storeemoji))
    renderEmojis()
    
})


const nameInput = document.getElementById("name-input");
let nameA = document.getElementById("namea");
let nameBtn = document.getElementById("name-btn");

// Check if name exists in local storage
let oldname = JSON.parse(localStorage.getItem("name"));
if (oldname) {
  nameA.textContent = oldname;
} else {
  nameA.textContent = "Hassine Emoji's";
}

// Update name on button click
nameBtn.addEventListener("click", function(){
    nameA.textContent = nameInput.value + "'s Emojis";
    localStorage.setItem("name",JSON.stringify(nameA.innerText));
});



