const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// var = totalBatteries = sum of all batter amounts from batteryBatches array
var totalBatteries = 0;

// reduce() function 
// iterate through batteryBatches array and add each value to totalBatteries
// totalBatteries is the sum of all battery amounts
totalBatteries = batteryBatches.reduce(function (a, b) {
  return a + b;
});
