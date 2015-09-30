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
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // push an array with location and number
    zones.push([location, number]);
    for (var i = 0; i < zones.length; i++) {
      // replace location and number with appropriate code
      list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}

/*
function warningMaker(obstacle) {
  // create a count
  var count = 0;
  return function(number, location) {
    // keep track of warnings
    count++;
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          // finish the warning message here
          "This is alert #" + count + " today for " + obstacle + " danger."
    );
  };
}
*/


var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");

icebergAlert(3, "Crystal Cove");
icebergAlert(6, "Ice Caves");
// snowYetiAlert(1, "Blizzard Beach");

console.log("icebergAlert = " + icebergAlert);


var listOfSharks = ["Sea Pain", "Great Wheezy",
                    "DJ Chewie", "Lil' Bitey",
                    "Finmaster Flex", "Swim Khalifa",
                    "Ice Teeth", "The Notorious J.A.W."];

var listOfTargets = ["icicle bat", "snow yeti",
                     "killer penguin", "frost tiger",
                     "polar bear", "iceberg",
                     "blue witch", "wooly mammoth"];

function makeTargetAssigner(sharks, targets) {
  // insert your code here
  return function (shark) {
    for (var i = 0; i < sharks.length; i++) {
      if (sharks[i] == shark) {
        alert("What up, " + sharks[i] + "!\nThere've been " + targets[i] + " sightings in our 'hood!\nTime for a swim-by lasering, homie!");
      }
    }
  };
}

var getTargetFor = makeTargetAssigner(listOfSharks,
                                      listOfTargets);
getTargetFor("Ice Teeth");


function theBridgeOfHoistingDoom() {
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;
  function fellowship() {
    return "friends";
  }
  sword = "sting";
  dwarf = function() {
    return "axe";
  }
  fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  }
  ring();
  return sword;
}
console.log( "theBridgeOfHoistingDoom = " + theBridgeOfHoistingDoom() );



