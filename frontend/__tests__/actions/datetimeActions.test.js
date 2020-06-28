import { setDate } from "../../actions/datetimeActions";

describe("Datetime Actions", () => {
  it("Can set new date", () => {
    const date = new Date();
    const expectedAction = {
      type: "SET_DATE",
      payload: date,
    };
    expect(setDate(date)).toEqual(expectedAction);
  });
});
