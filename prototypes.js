var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];

Array.prototype.countCattle = function(kind) {
	var numKind = 0;
	for (var i = 0; i < this.length; i++) {
		if (this[i].type == kind) {
			numKind++;
		}
	}
	return numKind;
}

console.log("Num Cows = " + canyonCows.countCattle("cow"));
console.log("Num Bulls = " + canyonCows.countCattle("bull"));
