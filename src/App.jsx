import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
  );
}
function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  return (
    <div>
      <button>Home</button>
      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messages ({messagingAtomCount})</button>
      <button>Notifications ({notificationAtomCount})</button>
      <button>Me</button>
    </div>
  );
}
export default App;
