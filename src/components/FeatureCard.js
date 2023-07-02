import React from "react";

const FeatureCard = () => {
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
    <div className="grid grid-cols-4 gap-4 tablet:grid-cols-2 mobile:grid-cols-1">
      {CardItems.map((item) => (
        <FeatureCardItem img={item.img} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
};
const FeatureCardItem = ({ img, title, desc }) => {
  return (
    <div className="box">
      <div className="flex flex-col justify-between">
        <img className="float-left w-12 h-12 cursor-pointer" src={img} alt="" />
        <div>
          <h4 className="mt-9 text-FeatureCard-h4 featureCard-h4 w-full">
            {title}
          </h4>
          <p className="mt-2.5 text-FeatureCard-p featureCard-p">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default FeatureCard;
