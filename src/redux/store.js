import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./property/propertySlice";

export const store = configureStore({
   reducer: { property: propertySlice },
});
