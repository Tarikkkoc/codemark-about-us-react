import React from "react";

const Collaborations = () => {
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <h2 className="mt-[150px] text-TomyaInfo-h2">İş Birliklerimiz</h2>
      </div>
      <div className="mt-16 "></div>
      <div className="flex p-[30px] rounded-[10px]">
        <div className="w-1/2 px-[15px] grid place-items-center">
          <img className="h-48 w-[40%]" src="/img/BCTR-logo.png" alt="" />
        </div>
        <div className="w-1/2 grid place-items-center">
          <p className="mt-[20px] px-[15px] text-FeatureCard-p">
            Tomya Teknoloji A.Ş. olarak kripto ekosisteminde faaliyetlerimize
            hız kesmeden devam ediyoruz. Türkiye’de sürdürülebilir blockchain
            ekosistemi oluşturan, bu teknoloji ile yeni dönem iş yapış
            biçimlerinin önündeki zorlukların giderilmesine yönelik çalışmaları
            bulunan Blockchain Türkiye Platformu'na platin üye olduk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
