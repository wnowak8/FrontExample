import ProfileCard from "./ProfileCard";
import "bulma/css/bulma.css";

import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SirImage from "./images/siri.png";

const App = () => {
  return (
    <div>
      <h1>Personal Digital Assistants</h1>
      <div className="columns">
        <div className="column">
          <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
        </div>
        <div className="column">
          <ProfileCard
            title="Cortana"
            handle="@cortana32"
            image={CortanaImage}
          />
        </div>
        <div className="column">
          <ProfileCard title="Siri" handle="@siri01" image={SirImage} />
        </div>
      </div>
    </div>
  );
};

export default App;
