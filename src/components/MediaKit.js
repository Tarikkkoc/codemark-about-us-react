import React from "react";

const MediaKit = () => {
  return (
    <div className="flex rounded-xl flex-col items-center pt-[100px] pb-[120px] bg-slate-200">
      <div className="flex mediaKit px-[100px] mobile:px-5 gap-4 justify-center">
        <div className="w-9/12 text-TomyaInfo-h2 tomyaInfo-h2">
          <h2>Basın Kiti</h2>
        </div>
        <div className="text-SocialMedia-h3 socialMedia-h3">
          <h3>
            Markamıza ait logomuzun medya kanallarında ya da farklı mecralarda
            en doğru şekilde kullanımı için basın materyallerini
            indirebilirsiniz.
          </h3>
        </div>
      </div>
      <div className="flex tablet:px-5 mobile:px-5 tablet:w-full mobile:w-full tablet:flex tablet:flex-col mobile:flex mobile:flex-col gap-6 mt-20 mobile:justify-start mobile:items-start justify-center items-end">
        <div className=" mediaBox1 rounded-xl h-[270px] py-[32px] px-[38px] flex items-end bg-white">
          <span className="text-MediaKit-h6">Logo kullanım kılavuzu</span>
        </div>
        <div className="h-[270px] py-[32px] px-[38px] rounded-xl mediaBox2 flex justfiy-between items-end bg-white">
          <span className="text-MediaKit-h6 mr-[30px]">
            Renkli ve Siyah/Beyaz kullanım
          </span>
          <span className="text-MediaKit-h6 logoBaski">
            Logo baskı, web ve HEX renk kodları
          </span>
          <button className="ml-[125px] py-[2px] mediaBoxBtn px-[16px] mb-2 btn-MediaKit border-solid border rounded-xl bg-white">
            Basın kitini indir
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaKit;
