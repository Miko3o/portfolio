import { ThreeJsCanvas } from "../components/ThreeJsCanvas";
import { ProfileDescription } from "../components/ProfileDescription";

import './Home.css'

export const Home = () => {


  return (
    <div>
      <div className="overlay">
        <ProfileDescription />
      </div>
      <ThreeJsCanvas />
    </div>
  );
}