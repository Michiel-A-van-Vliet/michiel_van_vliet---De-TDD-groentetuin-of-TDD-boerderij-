// module.exports = { func1, func2 }

function getYieldForPlant(plant) {
  return plant.yield;
}

function getYieldForCrop(input) {
  return input.crop.yield * input.numCrops;
}

function getTotalYield(crops) {
  console.log(crops);
}

module.exports = { getYieldForPlant, getYieldForCrop, getTotalYield };

// const corn = {
//     name: "corn",
//     yield: 3,
//   };
//   const pumpkin = {
//     name: "pumpkin",
//     yield: 4,
//   };
//   const crops = [
//     { crop: corn, numCrops: 5 },
//     { crop: pumpkin, numCrops: 2 },
//   ];
