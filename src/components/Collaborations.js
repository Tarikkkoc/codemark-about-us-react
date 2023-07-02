import React from "react";

const Collaborations = () => {
  return (
    <div className="flex flex-col gap-8 items-center ">
      <h2 className="mt-[150px] text-TomyaInfo-h2 tomyaInfo-h2">
        İş Birliklerimiz
      </h2>
      <div className="flex gap-7 box items-center mobile:flex-col">
        <div className="shrink-0">
          <img className="h-48" src="/img/BCTR-logo.png" alt="" />
        </div>
        <p className="text-FeatureCard-p">
          Tomya Teknoloji A.Ş. olarak kripto ekosisteminde faaliyetlerimize hız
          kesmeden devam ediyoruz. Türkiye’de sürdürülebilir blockchain
          ekosistemi oluşturan, bu teknoloji ile yeni dönem iş yapış
          biçimlerinin önündeki zorlukların giderilmesine yönelik çalışmaları
          bulunan Blockchain Türkiye Platformu'na platin üye olduk.
        </p>
      </div>
    </div>
  );
};

export default Collaborations;
