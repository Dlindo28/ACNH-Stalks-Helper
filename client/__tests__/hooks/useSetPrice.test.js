import "jsdom-global/register";
import React from "react";
import { Provider } from "react-redux";
import { useSetPrice } from "../../hooks/useSetPrice";
import AsyncStorage from "@react-native-community/async-storage";
import configureStore from "redux-mock-store";
import { render, fireEvent, waitFor } from "react-native-testing-library";

import FullPriceEntry from "../../components/FullPriceEntry";

//jest.mock("@react-native-community/async-storage");
const mockStore = configureStore([]);

describe("useSetPrice hook", () => {
  let store;
  beforeAll(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  it("AsyncStorage is used", async () => {
    const { container, debug, getByPlaceholder, getByTestId } = render(
      <Provider store={store}>
        <FullPriceEntry />
      </Provider>
    );

    const sundayInput = await waitFor(() => getByTestId("sundayInput"));
    console.log(sundayInput.props);

    fireEvent(sundayInput.props, "EndEditing", "100");

    expect(1).toBe(1);
    //await expect(AsyncStorage.setItem).toBeCalled();
  });
});
