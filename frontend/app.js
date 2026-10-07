let Stuff = document.getElementById("stuffToDo") 
const openModalBtn = document.getElementById("open-Modal-Btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
let displayActivity = document.getElementById("displaying-activity")
const spinActivity = document.getElementById("spinActivity")


openModalBtn.disabled = true

// variable i use to store both display and Pop Up
let activityDisplay = ""

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



//display the Pop up
async function displayPopUp() {
    Stuff.innerText = activityDisplay.activity
    modal.style.display = "flex"

}

//display the activity
async function displayTheActivity(){
    let count = 0
    while(count < 10){
        activityDisplay = await randomizer()
        displayActivity.innerText = activityDisplay.activity
        count++ 
    }
    openModalBtn.disabled = false

    return activityDisplay

}




// make the Pop up appear
openModalBtn.addEventListener("click", displayPopUp);

// make the Pop up dissapear
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

spinActivity.addEventListener("click", displayTheActivity)