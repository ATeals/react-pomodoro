import { DEFAULT_GOAL, DEFAULT_ROUND } from "@/constants";

import { useEffect, useState } from "react";

interface initialPomodoro {
    maxRound: number;
    maxGoal: number;
}

export const usePomodoro = (
    checkComplete: boolean, //
    handleGoalReached?: () => void,
    handleRoundReached?: () => void,
    initialState: initialPomodoro = { maxGoal: DEFAULT_GOAL, maxRound: DEFAULT_ROUND }
) => {
    const [round, setRound] = useState(0);
    const [goal, setGoal] = useState(0);

    const { maxGoal, maxRound } = initialState;

    const isGoalReached = goal === maxGoal;

    const isRoundReached = round >= maxRound - 1;

    const clearPomodoro = () => {
        setGoal(0);
        setRound(0);
    };

    useEffect(() => {
        if (isGoalReached) {
            if (handleGoalReached) handleGoalReached();
            return;
        }

        if (checkComplete) {
            if (isRoundReached) {
                setRound(0);
                setGoal((goal) => ++goal);
            } else {
                setRound((round) => ++round);
            }

            if (handleRoundReached) handleRoundReached();
        }
    }, [checkComplete, round, goal, maxGoal, maxRound, handleGoalReached, handleRoundReached, isGoalReached, isRoundReached]);

    return { round, goal, maxGoal, maxRound, isGoalReached, isRoundReached, clearPomodoro };
};
