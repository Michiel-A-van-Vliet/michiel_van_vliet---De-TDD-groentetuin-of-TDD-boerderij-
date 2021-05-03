// Eindopdracht - De TDD groentetuin

function getYieldForPlant(plant, environmentFactors) {
  var multiplier = 1;
  for (envFactor in environmentFactors) {
    multiplier += plant.factors[envFactor][environmentFactors[envFactor]] / 100;
  }
  return plant.yield * multiplier;
}

function getYieldForCrop(input, environmentFactors) {
  return getYieldForPlant(input.crop, environmentFactors) * input.numCrops;
}

function getTotalYield(cropsObject, environmentFactors) {
  var total = 0;
  cropsObject.crops.forEach((input) => {
    total += getYieldForCrop(input, environmentFactors);
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
