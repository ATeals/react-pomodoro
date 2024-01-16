import { RecoilRoot } from "recoil";
import App from "./App";

const remote = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

export default remote;
