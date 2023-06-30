import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center w-1/2">
        <h2 className="text-TomyaInfo-h2">
          TOMYA'yı Sosyal Medyada Takip Edin
        </h2>
        <h3 className="mt-5 text-SocialMedia-h3">
          Dijital para borsalarındaki diğer yatırımcılarla bağlantı kurmak,
          promosyonlar hakkında bilgi almak ve yatırım stratejilerini tartışmak
          için TOMYA'yı sosyal medya üzerinden takip edebilirsiniz.
        </h3>
        <img
          className="w-[150px] h-[28px] mt-10"
          src="/img/followTwitter.svg"
          alt=""
        />
      </div>
      <div className="grid place-items-center w-1/2 px-[15px]">
        <img
          className="min-w-full h-[380px]"
          src="/img/img_twitter_social.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialMedia;
