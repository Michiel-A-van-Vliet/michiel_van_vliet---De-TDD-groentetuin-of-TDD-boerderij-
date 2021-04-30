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

function getCostsForCrop(input) {
  return input.crop.cost * input.numCrops;
}

function getRevenueForCrop(input) {
  return input.crop.yield * input.crop.sell * input.numCrops;
}

// getProfitForCrop
function getProfitForCrop(params) {
  console.log("getProfitForCrop");
  console.log(params);
}

// getTotalProfit
function getTotalProfit(params) {
  console.log("getTotalProfit");
  console.log(params);
}

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
