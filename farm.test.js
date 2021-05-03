const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm");

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

describe("getCostsForCrop", () => {
  const corn = {
    name: "corn",
    cost: 10,
  };
  const input = { crop: corn, numCrops: 5 };

  test("Get cost for crop", () => {
    expect(getCostsForCrop(input)).toBe(50);
  });
});

describe("getRevenueForCrop", () => {
  const corn = {
    name: "corn",
    yield: 3,
    sell: 12,
  };
  const input = { crop: corn, numCrops: 5 };

  test("Get revenue for crop", () => {
    expect(getRevenueForCrop(input)).toBe(180);
  });
});

describe("getProfitForCrop", () => {
  const corn = {
    name: "corn",
    yield: 3,
    cost: 10,
    sell: 12,
  };
  const input = { crop: corn, numCrops: 5 };

  test("Get profit for crop", () => {
    expect(getProfitForCrop(input)).toBe(130);
  });
});

describe("getTotalProfit", () => {
  const corn = {
    name: "corn",
    yield: 3,
    cost: 10,
    sell: 12,
  };
  const pumpkin = {
    name: "pumpkin",
    yield: 4,
    cost: 5,
    sell: 30,
  };
  const crops = [
    { crop: corn, numCrops: 5 },
    { crop: pumpkin, numCrops: 2 },
  ];

  test("Get total profit", () => {
    expect(getTotalProfit({ crops })).toBe(360);
  });
});

describe("getYieldForPlant with environment", () => {
  const corn = {
    name: "corn",
    yield: 30,
    factors: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };

  test("Get yield for plant with low sun", () => {
    const environmentFactors = { sun: "low" };
    expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
  });

  test("Get yield for plant with high sun", () => {
    const environmentFactors = { sun: "high" };
    expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
  });
});
