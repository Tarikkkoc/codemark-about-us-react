import React from "react";

const MediaKit = () => {
  return (
    <div className="flex- flex-col pt-[100px] pb-[120px] px-[150px]">
      <div className="flex gap-4 justify-center">
        <div className="w-[30%] px-[15px] text-TomyaInfo-h2 tomyaInfo-h2">
          <h2>Basın Kiti</h2>
        </div>
        <div className="w-[70%] text-SocialMedia-h3 socialMedia-h3">
          <h3>
            Markamıza ait logomuzun medya kanallarında ya da farklı mecralarda
            en doğru şekilde kullanımı için basın materyallerini
            indirebilirsiniz.
          </h3>
        </div>
      </div>
      <div className="flex gap-2 mt-20 justify-center items-end">
        <div className="w-[25%] h-[270px] py-[32px] px-[38px] flex items-end bg-blue-300">
          <span className="text-MediaKit-h6">Logo kullanım kılavuzu</span>
        </div>
        <div className="w-[75%] h-[270px] py-[32px] px-[38px] flex justfiy-between  items-end bg-slate-100">
          <span className="text-MediaKit-h6 mr-[30px] w-[34%]">
            Renkli ve Siyah/Beyaz kullanım
          </span>
          <span className="text-MediaKit-h6 w-[34%]">
            Logo baskı, web ve HEX renk kodları
          </span>
          <button className="ml-[125px] py-[2px] px-[16px] mb-2 w-[34%] btn-MediaKit border-solid border-[1px] rounded-xl bg-white">
            Basın kitini indir
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaKit;
