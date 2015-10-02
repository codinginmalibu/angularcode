var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

console.log(vehicle1.capacity);

// create vehicles array
var vehicles = [vehicle1, vehicle2, vehicle3];

// build findVehicle function expression
var findVehicle = function (name, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i]["type"] == name) {
      return list[i]["storedAt"];
    }
  }
};

// call findVehicle
findVehicle("Submarine", vehicles);

vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;


// add properties and assign values
vehicle3["# of weapons"] = 8;
vehicle2["# of weapons"] = 4;
vehicle1["# of weapons"] = 1;

var superBlinders = [
  ["Firelight", 4000],
  ["Solar Death Ray", 6000],
  ["Supernova", 12000]
];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  bulbs: [200, 500, 750],
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};

// remove bulbs property from lighthouseRock
delete lighthouseRock.bulbs;

// add weaponBulbs property to lighthouseRock
lighthouseRock.weaponBulbs = superBlinders;

// log the correct weaponBulbs array value to the console
console.log(lighthouseRock.weaponBulbs[2][0]);


function addRanger(location, name, skillz, station) {
  // increment the number of rangers property
  lighthouseRock.numRangers++;

  // add the ranger<number> property and assign a ranger object
  lighthouseRock["ranger" + lighthouseRock.numRangers] = { name: name, skillz: skillz, station: station };
}

// call addRanger three times to add the new rangers
addRanger(lighthouseRock,"Nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);

console.log("lighthouseRock = " + lighthouseRock);
console.dir(lighthouseRock);


// -------------------------------------------------------------------

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  // loop through the rangers and append to list
  for (var i = 1; i <= location.numRangers; i++) {
  	console.log("1) location[ranger + i] = " + location["ranger" + i] + " | ");
  	console.log("2) i-1 = " + (i-1) + " | location.weaponBulbs[i-1] = " + location.weaponBulbs[i-1] + " | location.weaponBulbs[i-1][0] = " + location.weaponBulbs[i-1][0] );
  	console.log("3) location[ranger + i][station] = " + location["ranger" + i]["station"]  
  		+ " | location.weaponBulbs[location[ranger + i][station]-1] = " + location.weaponBulbs[location["ranger" + i]["station"]-1] 
  		+ " | location.weaponBulbs[location[ranger + i][station]-1][0] = " + location.weaponBulbs[location["ranger" + i]["station"]-1][0]
  		+ " | ");
  	list += location["ranger" + i]["name"] + ", man the " + location.weaponBulbs[location["ranger" + i]["station"]-1][0] + "!\n";
  }

  alert(list);
}

dontPanic(lighthouseRock);





