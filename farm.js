// module.exports = { func1, func2 }

function getYieldForPlant(plant) {
  return plant.yield;
}

function getYieldForCrop(input) {
  return input.crop.yield * input.numCrops;
}

function getTotalYield(somehowAnObject) {
  var total = 0;
  somehowAnObject.crops.forEach((subObject) => {
    total += subObject.numCrops * subObject.crop.yield;
  });
  return total;
}

module.exports = { getYieldForPlant, getYieldForCrop, getTotalYield };
