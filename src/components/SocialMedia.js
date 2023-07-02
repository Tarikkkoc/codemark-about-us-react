import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="flex gap-7 mt-36 justify-center mobile:flex-col mobile:items-center tablet:flex-col tablet:items-center">
      <div>
        <h2 className="text-TomyaInfo-h2 tomyaInfo-h2">
          TOMYA'yı Sosyal Medyada Takip Edin
        </h2>
        <h3 className="mt-5  text-SocialMedia-h3 socialMedia-h3">
          Dijital para borsalarındaki diğer yatırımcılarla bağlantı kurmak,
          promosyonlar hakkında bilgi almak ve yatırım stratejilerini tartışmak
          için TOMYA'yı sosyal medya üzerinden takip edebilirsiniz.
        </h3>
        <img
          className="w-[150px] h-[28px] mt-4"
          src="/img/followTwitter.svg"
          alt=""
        />
      </div>
      <div className="shrink-0">
        <img
          className="max-w-[455px]"
          src="/img/img_twitter_social.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialMedia;
