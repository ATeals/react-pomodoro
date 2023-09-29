import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { timerState } from "@/states/atom";
import { DEFAULT_TIME } from "@/constants";
import { timerSelector } from "@/states";

export const useTimer = () => {
    const [time, setTime] = useRecoilState(timerState);
    const { min, sec } = useRecoilValue(timerSelector);

    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const isTimeOut = time === 0;

    const timer = useRef(0);

    const startTimer = () => {
        timer.current = setInterval(() => {
            setTime((time) => --time);
        }, 1000);
        setIsTimerRunning(true);
    };

    const stopTimer = useCallback(() => {
        clearInterval(timer.current);
        setIsTimerRunning(false);
    }, [setIsTimerRunning]);

    const clearTimer = useCallback(() => {
        stopTimer();
        setTime(DEFAULT_TIME);
    }, [stopTimer, setTime]);

    useEffect(() => {
        if (isTimeOut) {
            clearTimer();
        }
    }, [isTimeOut, clearTimer]);

    return { min, sec, isTimerRunning, startTimer, stopTimer, clearTimer, isTimeOut };
};
