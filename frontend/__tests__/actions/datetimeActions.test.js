import { setDate } from "../../actions/datetimeActions";
import MockDate from "mockdate";

describe("Datetime Actions", () => {
  it("Can set new date", () => {
    const date = MockDate.set(new Date());
    const expectedAction = {
      type: "SET_DATE",
      payload: date,
    };
    expect(setDate(date)).toEqual(expectedAction);
    MockDate.reset();
  });
});
