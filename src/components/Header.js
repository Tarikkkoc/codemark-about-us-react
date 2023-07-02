import React, { Fragment, useState } from "react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="bg-primary w-full">
      <div className="w-full h-14 flex justify-center fixed top-0 z-20 ">
        <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center bg-color-custom-nav rounded-b-[10px] navbar">
          <img
            className="h-12 shrink-0"
            src="https://www.tomya.com/assets/img/general/tomya-logo.svg"
            alt=""
          />
          <nav className="grow flex justify-end">
            <ul className="flex gap-6 items-center pt-[22px] pb-[32px] navbar-font text-white navbar-ul">
              <li>Kripto Paralar</li>
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
              <button
                type="button"
                className="button text-2xl pr-3 ml-3"
                onClick={toggleDrawer}
              >
                ☰
              </button>
            </div>
          </nav>
          {isDrawerOpen && (
            <>
              <div className="fixed h-screen w-screen bg-black/40 z-10 right-0 left-0 top-0 bottom-0" />
              <div className="w-[350px] z-20 right-0 top-0 bottom-0 py-[90px] px-[30px] h-screen fixed bg-secondary-gray overflow-y-auto">
                <button
                  className="bg-primary text-white rounded-xl w-10 h-10 fixed top-0 right-0 m-2.5"
                  onClick={closeDrawer}
                >
                  X
                </button>
                <div className="flex flex-col">
                  <ul className="drawer-menu flex flex-col gap-4">
                    <li>Kripto Paralar</li>
                    <li>Market</li>
                    <li>Komisyonlar</li>
                    <li>Hakkımızda</li>
                    <li>Basında Biz</li>
                    <li>Duyurular</li>
                    <li>İletişim</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div className="grid place-items-center">
                  <button className="bg-primary rounded-full px-6 py-3 text-header-h4 text-secondary-gray">
                    Giriş Yap
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <section className="w-full relative">
        <div className="container max-w-6xl mx-auto flex gap-4 header reverse content">
          <div className="max-w-[500px] -mb-20">
            <img
              className="min-w-full header-img"
              src="/img/aboutus-banner.png"
              alt="Tomya"
            />
          </div>
          <div className="flex z-10 flex-col justify-end items-end pb-2 text-white">
            <h1 className="text-header-h1 header-h1">
              TOMYA; kripto para almanın hızlı ve kolay yoludur.
            </h1>
            <h4 className="text-header-h4 header-h4 pt-5">
              Yenilikçi, dürüst ve profesyonel bakış açısı ile hareket eden
              TOMYA, kullanıcılara dijital para borsalarında güvenli ve şeffaf
              şekilde hizmet etmeyi vizyon edinmiştir.
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
