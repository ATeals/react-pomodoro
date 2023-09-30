import { usePomodoro, useTimer } from "@/hooks";

type Option = {
    RoundRestart?: boolean;
};

export const usePomodoroComponent = (option?: Option) => {
    const { min, sec, startTimer, stopTimer, clearTimer, isTimerRunning, isTimeOut } = useTimer();

    const { round, goal, maxGoal, maxRound, isGoalReached, clearPomodoro } = usePomodoro(
        isTimeOut,
        () => {
            clearTimer();
            console.log("성공!");
        },
        () => {
            if (option?.RoundRestart) startTimer();
        }
    );

    const handleReset = () => {
        clearTimer();
        clearPomodoro();
    };

    const handleStart = () => startTimer();
    const handleStop = () => stopTimer();

    return { min, sec, isTimerRunning, round, goal, maxGoal, maxRound, isGoalReached, handleReset, handleStart, handleStop };
};
