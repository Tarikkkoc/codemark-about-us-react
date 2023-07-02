import "../App.css";
import Collaborations from "./Collaborations";
import CreateAccount from "./CreateAccount";
import FeatureCard from "./FeatureCard";
import Footer from "./Footer";
import Header from "./Header";
import MediaKit from "./MediaKit";
import Navbar from "./Navbar";
import ServiceMission from "./ServiceMission";
import SocialMedia from "./SocialMedia";
import TomyaInfo from "./TomyaInfo";
import Message from "./Message";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <Header />
      <TomyaInfo />
      <div className="-mb-32">
        <Content>
          <FeatureCard />
        </Content>
      </div>
      <div className="bg-secondary-gray h-[300px] w-full" />

      <div className="bg-secondary-gray">
        <Content>
          <ServiceMission />
        </Content>
      </div>
      <Content>
        <Collaborations />
      </Content>
      <Content>
        <SocialMedia />
      </Content>
      <Content>
        <MediaKit />
      </Content>
      <Content>
        <CreateAccount />
      </Content>
      <div className="footer">
        <Footer />
      </div>
      <div className="flex">
        <Message />
      </div>
    </div>
  );
}

export default App;
