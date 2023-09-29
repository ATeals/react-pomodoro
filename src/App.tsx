import { createGlobalStyle } from "styled-components";
import { PomodoroComponent } from "./components";

const App = () => {
    return (
        <>
            <GlonbalStyle />
            <PomodoroComponent />;
        </>
    );
};

const GlonbalStyle = createGlobalStyle`
    body {
        background-color : tomato;
        color : white;
        width : 100vw;
        height : 100vh;
        padding : 0;
    }
`;

export default App;
