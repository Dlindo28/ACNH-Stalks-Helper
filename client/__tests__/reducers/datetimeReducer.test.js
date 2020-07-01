import datetimeReducer from "../../reducers/datetimeReducer";
import { SET_DATE } from "../../actions/types";

describe("Datetime Reducer", () => {
  // Does the reducer correctly initialize state?
  it("Should return initial state", () => {
    const initState = {
      date: new Date(Date.now()),
    };

    expect(datetimeReducer(undefined, {}).date.getDay()).toBeLessThanOrEqual(
      initState.date.getDay()
    );
    expect(datetimeReducer(undefined, {}).date.getMonth()).toBeLessThanOrEqual(
      initState.date.getMonth()
    );
    expect(datetimeReducer(undefined, {}).date.getYear()).toBeLessThanOrEqual(
      initState.date.getYear()
    );
  });

  // Does the reducer correctly handle setDate() actions?
  it("Should handle setDate()", () => {
    const date = new Date(1999, 5, 22);
    const action = {
      type: SET_DATE,
      payload: date,
    };
    const stateOut = {
      date: date,
    };
    expect(
      datetimeReducer(
        {
          date: new Date(Date.now()),
        },
        action
      )
    ).toEqual(stateOut);
    expect(
      datetimeReducer(
        {
          date: undefined,
        },
        action
      )
    ).toEqual(stateOut);
  });
});
