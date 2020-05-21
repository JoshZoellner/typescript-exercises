// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

// Part 4: Create a Spacecraft Class

class Spacecraft {
    name: string;
    speedMph: number;
    milesPerKilometer: number;    
    constructor(name: string, speedMph: number) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway: number): number{
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursToLocation: number = milesAway / this.speedMph;
        let daysToLocation: number = hoursToLocation / 24;
        return daysToLocation;
    }
}

let spaceShuttle = new Spacecraft('Determination', 17500);

console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);

// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
