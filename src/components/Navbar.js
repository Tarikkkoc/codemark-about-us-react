import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center bg-color-custom-nav rounded-b-[10px]">
        <img
          className="min-h-[8px] min-w-[15%] py-1"
          src="https://www.tomya.com/assets/img/general/tomya-logo.svg"
          alt=""
        />
        <ul className="flex gap-6 items-center min-w-[70%] pt-[22px] pb-[32px] min-h-[8px] navbar-font text-white">
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
      </div>
    </div>
  );
};

export default Navbar;
