console.log("Train #" + 1 + " is running.");
console.log("Train #" + 2 + " is running.");
console.log("Train #" + 3 + " is running.");
console.log("Train #" + 4 + " is running.");

var trainNumber = 1;
var trainsOperational = 4;
while (trainNumber <= trainsOperational) {
	console.log("while: Train #" + trainNumber + " is running.");
	trainNumber++;
}
for (x = 1; x <= trainsOperational; x++) {
	console.log("for: Train #" + x + " is running.");	
}

for (trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
  if (trainNumber <= operationalTrains) {
    console.log("Train #" + trainNumber + " is running.");
  } else if (trainNumber == 10) {
    console.log("Train #10 begins running at noon.");
  } else {
    console.log("Train #" + trainNumber + " is not operational.");
  }
}
