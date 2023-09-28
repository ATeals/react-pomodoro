import { ATOM_KEY } from "@/constants";
import { selector } from "recoil";

import { timerState } from "..";

export const timerSelector = selector({
    key: ATOM_KEY.TIME,
    get: ({ get }) => {
        const time = get(timerState);
        const min = String(Math.floor(time / 60)).padStart(2, "0");
        const sec = String(time % 60).padStart(2, "0");
        return { min, sec };
    },
});
