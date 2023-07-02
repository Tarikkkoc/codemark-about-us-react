import React from "react";

const ServiceMission = () => {
  return (
    <div className="flex justify-center pt-10 service-mission gap-4 bg-secondary-gray">
      <div className="flex justify-center">
        <img className="w-full max-w-xs " src="/img/aboutus-coins.png" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center px-3.5">
        <ul className="flex flex-col list-disc">
          <h2 className="text-TomyaInfo-h2 tomyaInfo-h2">Hizmet Misyonumuz</h2>
          <li className="text-TomyaInfo-h4 mt-3.5 pl-5">
            Güçlü takım ve işbirliği ile tam hizmet
          </li>
          <li className="text-TomyaInfo-h4 mt-3.5 pl-5">
            Üstün teknoloji ürünleri ile 7/24 destek
          </li>
          <li className="text-TomyaInfo-h4 mt-3.5 pl-5">
            Güvenilir kaynaklardan en son piyasa bilgileri
          </li>
          <li className="text-TomyaInfo-h4 mt-3.5 pl-5">
            Sonuç odaklı araştırma ve strateji planlaması
          </li>
          <li className="text-TomyaInfo-h4 mt-3.5 pl-5">
            Yüksek güvenlik ve kişisel verilerin korunması
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceMission;
