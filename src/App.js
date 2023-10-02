import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard";

import AlexaImage from "./images/alexa.png";

import CortanaImage from "./images/cortana.png";

import SiriImage from "./images/siri.png";

const App = () => {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <div className="columns">
        <div className="column">
          <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
        </div>

        <div className="column">
          <ProfileCard
            title="Cortana"
            handle="@cortana02"
            image={CortanaImage}
          />
        </div>

        <div className="column">
          <ProfileCard title="Siri" handle="@siri23" image={SiriImage} />
        </div>
      </div>
    </div>
  );
};

export default App;
