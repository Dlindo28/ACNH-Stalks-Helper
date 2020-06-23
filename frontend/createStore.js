/**
 * @file Creates redux store
 * @author Daniel Lindo
 */
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["prices", "dataSufficiency"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

export { store, persistor };
