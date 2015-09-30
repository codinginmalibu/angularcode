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





