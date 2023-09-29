import styled from "styled-components";

import { Variants, motion } from "framer-motion";
import { usePomodoroComponent } from "./usePomodoroComponent";
import { Modifier } from "..";

const PomodoroComponent = () => {
    const { min, sec, isTimerRunning, round, goal, maxGoal, maxRound, isGoalReached, handleReset, handleStart, handleStop } = usePomodoroComponent();

    return (
        <>
            <Container>
                <Header>Pomodoro</Header>

                <Modifier onClick={handleReset}>
                    <i className="bi bi-arrow-clockwise"></i>
                </Modifier>

                <ClockWrapper>
                    <TimeWrapper
                        initial="initial"
                        animate="animate"
                        transition={{ type: "spring" }}
                        variants={Variants}
                        key={`minutes-${min}`}
                    >
                        {min}
                    </TimeWrapper>
                    :
                    <TimeWrapper
                        initial="initial"
                        animate="animate"
                        transition={{ type: "spring" }}
                        variants={Variants}
                        key={`second-${sec}`}
                    >
                        {sec}
                    </TimeWrapper>
                </ClockWrapper>

                {isTimerRunning || isGoalReached ? (
                    <Modifier onClick={handleStop}>
                        <i className="bi bi-pause"></i>
                    </Modifier>
                ) : (
                    <Modifier onClick={handleStart}>
                        <i className="bi bi-play-fill"></i>
                    </Modifier>
                )}

                <FlexBox>
                    <RoundCounter>
                        <h1>
                            {round} / {maxRound}
                        </h1>
                        <h2>Round</h2>
                    </RoundCounter>

                    <RoundCounter>
                        <h1>
                            {goal} / {maxGoal}
                        </h1>
                        <h2>Goal</h2>
                    </RoundCounter>
                </FlexBox>
                {isGoalReached && (
                    <SuccessComponent>
                        <div>
                            <SuccessImozi
                                initial="start"
                                animate="end"
                                variants={myVars}
                            >
                                ✌️
                            </SuccessImozi>
                            <Modifier onClick={handleReset}>
                                <i className="bi bi-arrow-clockwise"></i>
                            </Modifier>
                        </div>
                    </SuccessComponent>
                )}
            </Container>
        </>
    );
};

const myVars = {
    start: { scale: 0 },
    end: { scale: 1, rotateZ: 360, transition: { type: "spring" } },
};

const SuccessComponent = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;

    display: flex;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
`;

const SuccessImozi = styled(motion.h1)`
    font-size: 120px;
`;

const FlexBox = styled.div`
    display: flex;
    justify-content: round;
    align-items: center;
    margin: 40px;
`;

const RoundCounter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    h2 {
        font-size: 20px;
        margin: 0;
    }
    h1 {
        font-size: 40px;
        margin: 0;
    }
`;

const Container = styled.main`
    margin: auto;
    width: 680px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.h1`
    font-size: 60px;
    font-weight: 600px;
`;

const Variants: Variants = {
    initial: { scale: 0.8, opacity: 0.4 },
    animate: { scale: 1, opacity: 1 },
};

const ClockWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 100px;
    font-weight: 900;
`;

const TimeWrapper = styled(motion.div)`
    background-color: white;
    color: tomato;
    font-size: 90px;
    padding: 100px 30px;
    width: 150px;
    text-align: center;
    border-radius: 20px;
    text-shadow: 1px 2px 1px gray;
    box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.4);
`;

export default PomodoroComponent;
