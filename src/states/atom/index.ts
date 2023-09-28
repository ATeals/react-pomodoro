import { atom } from "recoil";

import { ATOM_KEY, DEFAULT_TIME } from "@/constants";

export const timerState = atom<number>({
    key: ATOM_KEY.TIMER,
    default: DEFAULT_TIME,
});
