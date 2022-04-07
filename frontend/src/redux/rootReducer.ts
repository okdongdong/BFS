import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import accountReducer from "./account/reducer";
import baseInfoReducer from "./baseInfo/baseInfoReducer";
import createFullCourseReducer from "./createFullCourse/createFullCourseReducer";
import placeDetailReducer from "./placeDetail/placeDetailReducer";
import {
  fullCourseReducer,
  placeReducer,
  reviewListReducer,
} from "./detail/reducer";
import placeListReducer from "./placeList/placeListReducer";
import profileReducer from "./profile/reducer";
import scheduleReducer from "./schedule/scheduleReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["account", "createFullCourse"],
};

const rootReducer = combineReducers({
  account: accountReducer,
  baseInfo: baseInfoReducer,
  createFullCourse: createFullCourseReducer,
  placeListReducer: placeListReducer,
  placeDetailReducer: placeDetailReducer,
  // createPlaceList: placeListReducer,
  profile: profileReducer,
  schedule: scheduleReducer,
  place: placeReducer,
  reviewList: reviewListReducer,
  fullCourse: fullCourseReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export type AccountReducer = ReturnType<typeof accountReducer>;
export type BaseInfoReducer = ReturnType<typeof baseInfoReducer>;
export type CreateFullCourseReducer = ReturnType<
  typeof createFullCourseReducer
>;
export type PlaceListReducer = ReturnType<typeof placeListReducer>;
export type PlaceDetailReducer = ReturnType<typeof placeDetailReducer>;
export type ProfileReducer = ReturnType<typeof profileReducer>;
export type ScheduleReducer = ReturnType<typeof scheduleReducer>;
export type PlaceReducer = ReturnType<typeof placeReducer>;
export type FullCourseReducer = ReturnType<typeof fullCourseReducer>;
export type ReviewListReducer = ReturnType<typeof reviewListReducer>;

export default persistReducer(persistConfig, rootReducer);
