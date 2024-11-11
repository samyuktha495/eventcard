const card=document.querySelector("div");

card.innerHTML=`<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"width="200px"height="100px"/>
<p>Nature</p>
<button>ExploreMore</button>`
card.style.border="2px solid black";
card.style.backgroundColor="lightgray"
card.style.display="inline-block"
card.style.padding="5px"
card.style.textAlign="center"

const newCard=document.getElementById("two");
newCard.innerHTML=`<img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg"width="200px"height="100px"/>
<p>Tree</p>
<button>ExploreMore</button>`
newCard.style.border="2px solid black";
newCard.style.backgroundColor="lightgray"
newCard.style.display="inline-block"
newCard.style.padding="5px"
newCard.style.textAlign="center"






var newcard=document.createElement("div")
newcard.innerHTML=`<img src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg" width="200px" height="100px"/>
<p>Burgur</p>
<button>ExploreMore</button>`
newcard.style.border="2px solid black";
newcard.style.backgroundColor="lightgrey";
newcard.style.display="inline-block";
newcard.style.textAlign="center";
console.log(newcard)
document.body.appendChild(newcard)


var newcard1=document.createElement("div")
newcard1.innerHTML=`<img src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg" width="200px" height="100px"/>
<p>Burgur</p>
<button>ExploreMore</button>`
newcard1.style.border="2px solid black";
newcard1.style.backgroundColor="lightgrey";
newcard1.style.display="inline-block";
newcard1.style.textAlign="center";
console.log(newcard1)
document.body.appendChild(newcard1)

document.body.style.display="flex"
document.body.style.gap="20px"


