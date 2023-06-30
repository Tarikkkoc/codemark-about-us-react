import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center socialMedia-1">
        <div className="w-1/2 width-full">
          <h2 className="text-TomyaInfo-h2 tomyaInfo-h2">
            TOMYA'yı Sosyal Medyada Takip Edin
          </h2>
          <h3 className="mt-5 text-SocialMedia-h3 socialMedia-h3">
            Dijital para borsalarındaki diğer yatırımcılarla bağlantı kurmak,
            promosyonlar hakkında bilgi almak ve yatırım stratejilerini
            tartışmak için TOMYA'yı sosyal medya üzerinden takip edebilirsiniz.
          </h3>
        </div>
        <div className="grid place-items-center w-1/2 px-[15px] ">
          <img
            className="min-w-full h-[380px]"
            src="/img/img_twitter_social.png"
            alt=""
          />
        </div>
      </div>
      <img className="w-[150px] h-[28px]" src="/img/followTwitter.svg" alt="" />
    </div>
  );
};

export default SocialMedia;
