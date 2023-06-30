import React from "react";

const CreateAccount = () => {
  return (
    <div className="flex p-[50px] create-account relative top-20">
      <h3 className="text-CreateAccount-h3 w-[22%]">
        Avantajlı Kripto İşlemleri
      </h3>
      <h4 className="ml-5 text-TomyaInfo-h4 w-[66%]">
        TOMYA, müşterilerine güvenilir ve șeffaf hizmet anlayışının yanında
        düșük komisyon prensipleri de sunar. TOMYA ile dijital para
        borsalarındaki alım satım deneyiminizi en üst noktaya çıkarabilirsiniz.
      </h4>
      <button className="py-[12px] h-[45px] min-w-[190px] px-[16px] create-account-btn ">
        Hesap Oluştur
      </button>
    </div>
  );
};

export default CreateAccount;
