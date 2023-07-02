import React, { Fragment, useState } from "react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const cryptoItem = [
    { img: "/img/btc-icon.svg", title: "Bitcoin" },
    { img: "/img/eth-icon.svg", title: "Ethereum" },
    { img: "/img/ripple-icon.svg", title: "Ripple" },
    { img: "/img/litecoin-icon.svg", title: "Litecoin" },
    { img: "/img/tether-icon.svg", title: "Tether" },
    { img: "/img/chainlink-icon.svg", title: "Chainlink" },
    { img: "/img/poldakot-icon.svg", title: "Polkadot" },
    { img: "/img/doge-icon.svg", title: "Dogecoin" },
    { img: "/img/cardano-icon.svg", title: "Cardano" },
    { img: "/img/neo-icon.svg", title: "NEO" },
    { img: "/img/chiliz-icon.svg", title: "Chiliz" },
    { img: "/img/hot-icon.svg", title: "Holochain" },
    { img: "/img/bittorent-icon.svg", title: "BitTorrent Chain" },
    { img: "/img/avalanche-icon.svg", title: "Avalanche" },
  ];
  return (
    <div className="bg-primary w-full pt-10 pb-5">
      <div className="w-full h-14 flex justify-center fixed top-0 z-20 ">
        <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center bg-color-custom-nav rounded-b-[10px] navbar">
          <img className="h-10 shrink-1" src="/img/tomya-logo.svg" alt="" />
          <nav className="grow flex justify-end">
            <ul className="flex gap-6 navbar-ul items-center pt-[22px] pb-[32px] navbar-font text-white tablet:hidden mobile:hidden">
              <li
              // onMouseEnter={hoverCrypto}
              >
                Kripto Paralar
                <div className="box">
                  <h2 className="text-crypto-item pt-5 px-7 pb-3">
                    Kripto Paralar
                  </h2>
                  <hr />
                  <ul>
                    {cryptoItem.map((item) => (
                      <li className="flex py-2.5 px-2 gap-2 rounded-xl items-center">
                        <img
                          className="w-8 h-8 cursor-pointer"
                          src={item.img}
                        />
                        <span className="cursor-pointer">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>Market</li>
              <li>Komisyonlar</li>
              <li>Hakkımızda</li>
              <li>Basında Biz</li>
              <li>Duyurular</li>
              <li>İletişim</li>
              <li>Blog</li>
              <li>
                <span className="border-solid border rounded-xl border-white p-2">
                  Giriş Yap
                </span>
              </li>
              <li>Kayıt Ol</li>
            </ul>
            <div className="tablet:flex tablet:justify-between mobile:flex mobile:justify-between tablet:bg-primary hidden">
              <img src="/img/ic-user.svg" alt="" />
              <button
                type="button"
                className="text-white text-2xl pr-3 ml-3"
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
          <div className="max-w-[500px] w-full  -mb-20">
            <img
              className="max-w-[500px] w-full"
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
