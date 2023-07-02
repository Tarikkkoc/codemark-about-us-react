import React from "react";

const CreateAccount = () => {
  return (
    <div className="flex xs:flex-col gap-2 p-[50px] create-account relative top-20 create-account-mobile">
      <h3 className="text-CreateAccount-h3 socialMedia-h3 shrink-0">
        Avantajlı Kripto İşlemleri
      </h3>
      <h4 className="text-TomyaInfo-h4 featureCard-h4 grow">
        TOMYA, müşterilerine güvenilir ve șeffaf hizmet anlayışının yanında
        düșük komisyon prensipleri de sunar. TOMYA ile dijital para
        borsalarındaki alım satım deneyiminizi en üst noktaya çıkarabilirsiniz.
      </h4>
      <div className="shrink-0">
        <button className="py-[12px] h-[45px] px-[16px] create-account-btn ">
          Hesap Oluştur
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
