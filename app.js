// Array of all logged locations

let criminalLocations = ["market", "church", "office", "mall", "gym", "bank", "saloon", "eatery", "spa", "club", "office", "airport", "gym", "eatery", "market", "office", "mall", "eatery", "spa", "market", "eatery", "saloon", "church", "office", "spa", "club", "office", "office", "mall", "eatery", "gym", "bank", "saloon", "airport", "gym", "eatery"]

// Object to help handle info easily

let criminalLocationsFrequency = {}

// DOM Stuff

const btn = document.getElementById("btn")



// Add locations from user input



const display = document.getElementById("display-area")
function createNewLocation() {
    const newLocation = document.getElementById("user-input").value.toLowerCase();

    if (newLocation.trim().length < 3) {
        display.textContent = `⚠️ Please enter a valid location of a minimum of three characters!`;
        return;
    } else {
        criminalLocations.push(newLocation);
        analyzeCriminalLocations()
    }

    console.log(criminalLocations);
}

btn.addEventListener("click", createNewLocation);


// Analyze criminal locations!



function analyzeCriminalLocations() {
    criminalLocationsFrequency = {};
    for (let i = 0; i < criminalLocations.length; i++) {
        let currentitem = criminalLocations[i];

        // If Item doesn't exist ......

        if (!(currentitem in criminalLocationsFrequency)) {
            criminalLocationsFrequency[currentitem] = {}
            criminalLocationsFrequency[currentitem].name_of_place = currentitem
            criminalLocationsFrequency[currentitem].count = 1;
        }

        // If item does exist

        else {
            criminalLocationsFrequency[currentitem].count++
        }
    }

    // To output to the display 

    display.innerHTML = "<p>The criminal has been to the following places</p>"
    for (let currentitemkey in criminalLocationsFrequency) {
        let currentKey = criminalLocationsFrequency[currentitemkey]
        const locationDisplay = document.createElement("p")
        locationDisplay.textContent = `${currentKey.name_of_place}: ${currentKey.count} time(s)`
        display.appendChild(locationDisplay)
    }

    // Just for logging so I know what I'm doing :) 
    console.log(criminalLocationsFrequency)



}
