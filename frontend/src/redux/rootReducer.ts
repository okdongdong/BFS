import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import accountReducer from "./account/reducer";
import createFullCourseReducer from "./createFullCourse/createFullCourseReducer";
import placeListReducer from "./createFullCourse/placeListReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["account", "createFullCourse"],
};

const rootReducer = combineReducers({
  account: accountReducer,
  createFullCourse: createFullCourseReducer,
  createPlaceList: placeListReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export type AccountReducer = ReturnType<typeof accountReducer>;
export type CreateFullCourseReducer = ReturnType<
  typeof createFullCourseReducer
>;
export type PlaceListReducer = ReturnType<typeof placeListReducer>;

export default persistReducer(persistConfig, rootReducer);
