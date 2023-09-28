import { useTimer, usePomodoro } from "./hooks";

const App = () => {
    const { min, sec, startTimer, stopTimer, clearTimer, isTimerRunning, isComplete } = useTimer();

    const { round, goal, maxGoal, maxRound, isGoalReached, clearPomodoro } = usePomodoro(isComplete, () => {
        clearTimer();
        console.log("성공!");
    });

    return (
        <>
            <h1>{isComplete ? "종료" : "진행 중"}</h1>
            <h1>
                Round : {round} / {maxRound}
            </h1>
            <h1>
                Goal : {goal} / {maxGoal}
            </h1>
            <h1>
                {min} : {sec}
            </h1>
            <button
                disabled={isTimerRunning || isGoalReached}
                onClick={() => startTimer()}
            >
                시작
            </button>
            <button onClick={() => stopTimer()}>정지</button>
            <button
                onClick={() => {
                    clearTimer();
                    clearPomodoro();
                }}
            >
                초기화
            </button>
        </>
    );
};

export default App;
