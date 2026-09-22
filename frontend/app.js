
let Stuff = document.getElementById("stuffToDo")
let Btn = document.getElementById("Btn")
let activity;  

async function activities(){  
    const data = await fetch("http://localhost:4000/activities");
    const DataActivity = await data.json();
    activity = DataActivity
}


async function randomizer() {
    await activities()
    const randomIndex = Math.floor(Math.random() * activity.length);
    const randomActivity = activity[randomIndex];
    return randomActivity
}

async function Display() {
    let randomActivity =  await randomizer()
    alert(randomActivity.activity)

}

Btn.addEventListener("click", Display)