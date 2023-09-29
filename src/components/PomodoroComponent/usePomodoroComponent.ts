import { usePomodoro, useTimer } from "@/hooks";

export const usePomodoroComponent = () => {
    const { min, sec, startTimer, stopTimer, clearTimer, isTimerRunning, isTimeOut } = useTimer();

    const { round, goal, maxGoal, maxRound, isGoalReached, clearPomodoro } = usePomodoro(
        isTimeOut,
        () => {
            clearTimer();
            console.log("성공!");
        },
        () => {
            startTimer();
            console.log("다시시작!");
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
