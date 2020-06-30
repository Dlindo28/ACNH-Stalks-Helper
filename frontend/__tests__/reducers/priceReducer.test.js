import priceReducer from "../../reducers/priceReducer";
import {
  SET_YIELD,
  CLEAR_YIELD,
  SET_CURPRICE,
  SET_PRICES_MISSING,
  SET_PROJECTED_PEAK,
} from "../../actions/types";
import { days } from "../../models/Dates";

describe("Price Reducer", () => {
  // Does the reducer correctly initialize state?
  it("Should return intiial state", () => {
    const initState = {
      yield: 0,
      curPrice: 0,
      projectedPeak: "None",
      pricesMissing: false,
    };
    expect(priceReducer(undefined, {})).toEqual(initState);
  });

  // Does the reducer handle setYield() actions?
  it("Should handle setYield()", () => {
    const stateIn = {
      yield: 0,
    };
    const action = {
      type: SET_YIELD,
      payload: 1,
    };
    const stateOut = {
      yield: 1,
    };
    expect(priceReducer(stateIn, action).yield).toEqual(stateOut.yield);
  });

  // Does the reducer handle clearYield() actions?
  it("Should handle clearYield()", () => {
    const stateIn = {
      yield: 50,
    };
    const action = {
      type: CLEAR_YIELD,
    };
    const stateOut = {
      yield: 0,
    };
    expect(priceReducer(stateIn, action).yield).toEqual(stateOut.yield);
  });

  // Does the reducer handle setCurPrice() actions?
  it("Should handle setCurPrice()", () => {
    const stateIn = {
      curPrice: 0,
    };
    const action = {
      type: SET_CURPRICE,
      payload: 50,
    };
    const stateOut = {
      curPrice: 50,
    };
    expect(priceReducer(stateIn, action).curPrice).toEqual(stateOut.curPrice);
  });

  // Does the reducer handle setPricesMissing() actions?
  it.each([true, false])("Should handle setPricesMissing()", (isMissing) => {
    const action = {
      type: SET_PRICES_MISSING,
      payload: isMissing,
    };
    const stateOut = {
      pricesMissing: isMissing,
    };
    expect(
      priceReducer(
        {
          pricesMissing: isMissing,
        },
        action
      ).pricesMissing
    ).toEqual(stateOut.pricesMissing);
    expect(
      priceReducer(
        {
          pricesMissing: !isMissing,
        },
        action
      ).pricesMissing
    ).toEqual(stateOut.pricesMissing);
  });

  // Does the reducer handle setProjectedPeak() actions?
  it.each(days)("Should handle setProjectedPeak(%p)", (day) => {
    const stateIn = {
      projectedPeak: "None",
    };
    const action = {
      type: SET_PROJECTED_PEAK,
      payload: day,
    };
    const stateOut = {
      projectedPeak: day,
    };
    expect(priceReducer(stateIn, action).projectedPeak).toEqual(
      stateOut.projectedPeak
    );
  });
});
