console.log("Happy Plants!")
//Part 1
/**The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius;
Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week. */
// Constants
const PI = 3.1415;                        //PI
const r = 5;                              //radius (5 meters)
const precspace = 0.8;                    //Required space per plant (0.8 square meters)
const totalArea = PI * r * r;             //total area = PI * radius squared
const pLimit = totalArea / precspace;     //Plant maximum limit = totalArea / precspace
const pStart = 20;                        //Starting with 20 plants
const weeks = 3;                          //3 week time period
const tPlants = 2;                        //plants double every week


for (let week = 1; week <= weeks; week++) {
    let plantCount = pStart * (tPlants ** week); 
    let decideP; // 

    if (plantCount > 0.8 * pLimit) {
        decideP = "Pruned";
    } else if (plantCount > 0.5 * pLimit && plantCount <= 0.8 * pLimit) {
        decideP = "Monitored";
    } else {
        decideP = "Planted";
    }

    
    console.log(`Week ${week}: Plant Count = ${plantCount}, Action = ${decideP}`);
}

//Part2

/// Constants 
const Pi = 3.1415;                             // PI for area calculation
const radius = 5;                              // Initial radius (not used in this specific calculation)
const reqspace = 0.8;                          // Space required per plant in square meters
const p100 = 100;                              // Starting with 100 plants
const time = 10;                               // 10 weeks of growth without pruning
const tDub = 2;                                // Growth factor (plants double each week)


let totalPlants = p100;
for (let timeFrame = 1; timeFrame <= time; timeFrame++) {
    totalPlants *= tDub;  // Double the number of plants each week
}

const totalReqSpace = totalPlants * reqspace;

 
const newRadius = Math.sqrt(totalReqSpace / Pi);


console.log(`After ${time} weeks:`);
console.log(`Total Plants: ${totalPlants}`);
console.log(`Total Required Space: ${totalReqSpace.toFixed(2)} square meters`);
console.log(`New Radius for the Garden: ${newRadius.toFixed(2)} meters`);
