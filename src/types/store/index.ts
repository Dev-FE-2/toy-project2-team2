import { store } from "@/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type * from "./auth";
export type * from "./user";
export type * from "./schedule";
