import dataSufficiencyReducer from "../../reducers/dataSufficiencyReducer";
import { SET_DATA_SUFFICIENCY } from "../../actions/types";

describe("Data Sufficiency Reducer", () => {
  // Does the reducer correctly initialize state?
  it("Should return initial state", () => {
    const initState = {
      sufficiency: false,
    };
    expect(dataSufficiencyReducer(undefined, {})).toEqual(initState);
  });

  // Does the reducer correctly handle setDataSufficiency() actions?
  it.each([true, false])(
    "Should handle setDataSufficiency()",
    (isSufficient) => {
      const action = {
        type: SET_DATA_SUFFICIENCY,
        payload: isSufficient,
      };
      const stateOut = {
        sufficiency: isSufficient,
      };
      expect(
        dataSufficiencyReducer(
          {
            sufficiency: true,
          },
          action
        )
      ).toEqual(stateOut);
      expect(
        dataSufficiencyReducer(
          {
            sufficiency: false,
          },
          action
        )
      ).toEqual(stateOut);
    }
  );
});
