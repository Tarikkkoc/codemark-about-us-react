import React from "react";
const Header = () => {
  return (
    <div className="bg-color-custom-header">
      <div className="w-full flex justify-center fixed top-0 z-20 ">
        <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center bg-color-custom-nav rounded-b-[10px] navbar">
          <img
            className="min-h-[8px] min-w-[15%] py-1"
            src="https://www.tomya.com/assets/img/general/tomya-logo.svg"
            alt=""
          />
          <ul className="flex gap-6 items-center max-w-[70%] pt-[22px] pb-[32px] min-h-[8px] navbar-font text-white navbar-ul">
            <li className="crypto-item">Kripto Paralar</li>
            <li>Market</li>
            <li>Komisyonlar</li>
            <li>Hakkımızda</li>
            <li>Basında Biz</li>
            <li>Duyurular</li>
            <li>İletişim</li>
            <li>Blog</li>
            <li className="border-solid border-2 rounded-xl border-white px-2">
              Giriş Yap
            </li>
            <li>Kayıt Ol</li>
          </ul>
          <div className="navbar-mobile hidden">
            <img src="/img/ic-user.svg" alt="" />
            <button type="button" className="button text-2xl pr-3 ml-3">
              ☰
            </button>
          </div>
        </div>
      </div>
      <div className="container max-w-6xl mx-auto pb-10 px-4 flex header">
        <div className="w-1/2">
          <img
            className="min-w-full h-[542px] relative top-[185px] left-6"
            src="/img/aboutus-banner.png"
            alt="Tomya"
          />
        </div>
        <div className="flex z-10 flex-col justify-end items-end w-1/2 pb-2 text-white">
          <h1 className="text-header-h1">
            TOMYA; kripto para almanın hızlı ve kolay yoludur.
          </h1>
          <h4 className="text-header-h4 pt-5">
            Yenilikçi, dürüst ve profesyonel bakış açısı ile hareket eden TOMYA,
            kullanıcılara dijital para borsalarında güvenli ve şeffaf şekilde
            hizmet etmeyi vizyon edinmiştir.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
