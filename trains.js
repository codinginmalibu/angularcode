console.log("Train #" + 1 + " is running.");
console.log("Train #" + 2 + " is running.");
console.log("Train #" + 3 + " is running.");
console.log("Train #" + 4 + " is running.");

var trainNumber = 1;
var trainsOperational = 4;
var totalTrains = 10;
while (trainNumber <= trainsOperational) {
	console.log("while: Train #" + trainNumber + " is running.");
	trainNumber++;
}
for (x = 1; x <= trainsOperational; x++) {
	console.log("for: Train #" + x + " is running.");	
}

for (trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
  if (trainNumber <= trainsOperational) {
    console.log("Train #" + trainNumber + " is running.");
  } else if (trainNumber == 10) {
    console.log("Train #10 begins running at noon.");
  } else {
    console.log("Train #" + trainNumber + " is not operational.");
  }
}

function multiplyTrio (a, b, c) {
  return a*b*c;
}
var x1 = multiplyTrio(1, 2, 3);
console.log("multiplyTrio = " + x1);

function mystery(x, y) {
  return (4 * x * y) + (3 * y + 5);
}
var x2 = mystery(10, 7);
console.log("mystery = " + x2);

function changePowerTotal (totalPowerGenerated, generatorID, generatorStatus, amountOfPowerProduced) {
  if (generatorStatus == "on") {
    totalPowerGenerated += amountOfPowerProduced;
    alert("Generator #" + generatorID + " is now on, adding " + amountOfPowerProduced + " MW, for a total of " + totalPowerGenerated + " MW!")
  }
  else {
    totalPowerGenerated -= amountOfPowerProduced;
    alert("Generator #" + generatorID + " is now off, removing " + amountOfPowerProduced + " MW, for a total of " + totalPowerGenerated + " MW!")
  }
  return totalPowerGenerated;
}

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
list.push(10);
list.push(11);
list.pop();
console.log("list = " + list);

// Test out unnamed functions
var diff = function(a,b) {
  return a*a + b*b;
}
console.log("unnamed function diff is = " + diff);

var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(function (arrayCell) {
  return arrayCell[0] + " " + arrayCell[1];
});
console.log("passengers = " + passengers);
console.log("modifiedNames = " + modifiedNames);

// modifiedNames.map(function (arrayCell) { alert("Yo, " + arrayCell + "!"); } );
console.log("modifiedNames = " + modifiedNames);

var puzzlers = [];
puzzlers[0] = function (input) { return 3*input-8; };
puzzlers[1] = function (input) { return Math.pow( (input + 2), 3); };
puzzlers[2] = function (input) { return Math.pow(input, 2) - 9; };
puzzlers[3] = function (input) { return input%4; };

function adventureSelector(userChoice) {
  // return anonymous functions inside conditional blocks
  if (userChoice == 1) { 
    return function () { alert("You selected the Vines of Doom!"); };
  }
  else if (userChoice == 2) { 
    return function() { alert("Looks like you want the Lake of Despair!"); };
  }
  else if (userChoice == 3) { 
    return function() { alert("The Caves of Catastrophe!"); };
  }
}
var z = adventureSelector(3);
console.log("z = " + z);



var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here
var applyAndEmpty = function (input, queue) { 
  var l = queue.length;
  for (var i = 0; i < l; i++) {
    input = queue.shift()(input); 
  }
  return input;
};
// alert(applyAndEmpty(start, puzzlers));
console.log(applyAndEmpty(start, puzzlers));

/*
function mystery(input) {
  function mystery2(multiplier) {
    multiplier *= input;
    return 5 * multiplier;
  }
  return mystery2;
}

var hidden = mystery(4);
var result = hidden(2);
*/

function mystery(input) {
  input += 2; // 5
  function mystery2(multiplier) {
    multiplier *= input;
    return 4 * multiplier;
  }
  return mystery2;
}

function mystery3(param) { // 2
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);

function warningMaker(obstacle) {
  return function(number, location) { // set parameters
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " + location + "!"
    );
  };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");

icebergAlert(3, "Crystal Cove");
killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard Beach");

console.log("icebergAlert = " + icebergAlert);


