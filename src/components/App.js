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
import WelcomeBox from "./WelcomeBox";

function App() {
  const CardItems = [
    {
      img: "/img/ic-selfie.svg",
      title: "Multi Platform ve Akıllı Arayüz",
      desc: "Kullanıcı dostu platformumuz ve arayüzlerimiz, her seviyedeki üyemizin tüm işlemlerini en kolay ve en hızlı şekilde yapabilmesi için tasarlandı.",
    },
    {
      img: "/img/ic-privacy.svg",
      title: "İki Faktörlü Doğrulama",
      desc: "TOMYA'da iki faktörlü güvenlik doğrulama sistemi uygulanır; kişisel bilgilerinizin ve yatırımlarınızın güvenliği en üst seviyede tutulur.",
    },
    {
      img: "/img/ic-sellbuy.svg",
      title: "Hızlı Alım/Satım",
      desc: "Tomya’nin pratik arayüzü ve gelişmiş mobil özellikleriyle işlemlerinizi dilediğiniz yerden takip etmek çok kolay!",
    },
    {
      img: "/img/ic-support.svg",
      title: "7/24 Yatırım İşlemleri",
      desc: "Anlaşmalı olduğumuz bankalar üzerinden para gönderme işlemlerinizi 7/24 gerçekleştirebilirsiniz.",
    },
  ];
  return (
    <div className="App">
      <div className="">
        <Header />
        <TomyaInfo />
        <div className="flex gap-4 container max-w-6xl mx-auto featureCard-box">
          {CardItems.map((item) => (
            <FeatureCard img={item.img} title={item.title} desc={item.desc} />
          ))}
        </div>
        <div className="container max-w-6xl mx-auto">
          <ServiceMission />
        </div>
        <div className="container max-w-6xl mx-auto">
          <Collaborations />
        </div>
        <div className="container max-w-6xl mx-auto">
          <SocialMedia />
        </div>
        <div className="container max-w-6xl mx-auto">
          <MediaKit />
        </div>
        <div className="container max-w-6xl mx-auto">
          <CreateAccount />
        </div>
        <div className="footer">
          <Footer />
        </div>
        <div className="flex">
          <Message />
          <WelcomeBox />
        </div>
      </div>
    </div>
  );
}

export default App;
