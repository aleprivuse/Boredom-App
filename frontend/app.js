let Stuff = document.getElementById("stuffToDo")
let Btn = document.getElementById("Btn")  
const openBtn = document.getElementById("open-Modal-Btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");



// fetch the activites
async function activities(){  
    const data = await fetch("http://localhost:4000/activities");
    const DataActivity = await data.json();
    return DataActivity
}

// take the activites and randomize it
async function randomizer() {
    const activity = await activities()
    const randomIndex = Math.floor(Math.random() * activity.length);
    const randomActivity = activity[randomIndex];
    return randomActivity
}

//display it
async function Display() {
    let randomActivity =  await randomizer()
    alert(randomActivity.activity)

}

// make the Pop up appear
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});


// make the Pop up dissapear
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


Btn.addEventListener("click", Display)
