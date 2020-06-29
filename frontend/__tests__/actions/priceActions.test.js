import {
  setCurPrice,
  clearYield,
  setPricesMissing,
  setProjectedPeak,
  setYield,
} from "../../actions/priceActions";

import { days } from "../../models/Dates";

describe("Yield Actions", () => {
  const yieldValues = [];
  for (let i = 0; i < 5; i++) {
    yieldValues.push(Math.floor(Math.random() * 200));
  }
  it.each(yieldValues)("Can set yield to %i", (y) => {
    const expectedAction = {
      type: "SET_YIELD",
      payload: y,
    };
    expect(setYield(y)).toEqual(expectedAction);
  });

  it("Can clear yield", () => {
    const expectedAction = {
      type: "CLEAR_YIELD",
      payload: 0,
    };
    expect(clearYield()).toEqual(expectedAction);
  });
});

describe("Price Actions", () => {
  const prices = [];
  for (let i = 0; i < 5; i++) {
    prices.push(Math.floor(Math.random() * 200));
  }
  it.each(prices)("Can set price to %i", (price) => {
    const expectedAction = {
      type: "SET_CURPRICE",
      payload: price,
    };
    expect(setCurPrice(price)).toEqual(expectedAction);
  });
  it.each([true, false])("Can set prices missing to %p", (isMissing) => {
    const expectedAction = {
      type: "SET_PRICES_MISSING",
      payload: isMissing,
    };
    expect(setPricesMissing(isMissing)).toEqual(expectedAction);
  });
  it.each(days)("Can set projected peak to %p", (day) => {
    const expectedAction = {
      type: "SET_PROJECTED_PEAK",
      payload: day,
    };
    expect(setProjectedPeak(day)).toEqual(expectedAction);
  });
});
