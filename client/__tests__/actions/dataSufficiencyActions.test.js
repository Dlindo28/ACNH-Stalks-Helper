import { setDataSufficiency } from "../../actions/dataSufficiencyActions";

describe("Data Sufficiency Actions", () => {
  it("Sufficiency can be set to true", () => {
    const sufficient = true;
    const expectedAction = {
      type: "SET_DATA_SUFFICIENCY",
      payload: sufficient,
    };
    expect(setDataSufficiency(sufficient)).toEqual(expectedAction);
  });
  it("Sufficiency can be set to false", () => {
    const sufficient = false;
    const expectedAction = {
      type: "SET_DATA_SUFFICIENCY",
      payload: sufficient,
    };
    expect(setDataSufficiency(sufficient)).toEqual(expectedAction);
  });
});
