// module.exports = { func1, func2 }

function getYieldForPlant(plant) {
  return plant.yield;
}

function getYieldForCrop(input) {
  return input.crop.yield * input.numCrops;
}

function getTotalYield(cropsObject) {
  var total = 0;
  cropsObject.crops.forEach((input) => {
    total += input.numCrops * input.crop.yield;
  });
  return total;
}

function getCostsForCrop(input) {
  return input.crop.cost * input.numCrops;
}

function getRevenueForCrop(input) {
  return input.crop.yield * input.crop.sell * input.numCrops;
}

function getProfitForCrop(input) {
  return getRevenueForCrop(input) - getCostsForCrop(input);
}

function getTotalProfit(cropsObject) {
  var totalProfit = 0;
  cropsObject.crops.forEach((input) => {
    totalProfit += getProfitForCrop(input);
  });
  return totalProfit;
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
