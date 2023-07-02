import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  return (
    <div className="container max-w-6xl mx-auto pt-[160px] footer-mobile">
      <div id="1" className="flex gap-4 mb-10 footer1">
        <div className="flex flex-col py-5">
          <h6 className="text-footer-h6">Kurumsal</h6>
          <ul className="mt-[25px] mr-[70px] text-footer-li">
            <li>Kullanıcı Sözleşmesi</li>
            <li className="mt-[15px]">Gizlilik ve Çerez Politikası</li>
            <li className="mt-[15px]">Kişisel Verilerin Korunması</li>
            <li className="mt-[15px]">
              Açık Rıza Ve Dijital İletişim İzni Beyanı
            </li>
            <li className="mt-[15px]">Hakkımızda</li>
            <li className="mt-[15px]">İletişim</li>
          </ul>
        </div>
        <div className="flex flex-col py-5">
          <h6 className="text-footer-h6">Kullanıcılar için</h6>
          <ul className="mt-[25px] text-footer-li">
            <li>Blog</li>
            <li className="mt-[15px]">Basında Biz</li>
            <li className="mt-[15px]">Sıkça Sorulan Sorular</li>
            <li className="mt-[15px]">Kripto Hesaplayıcı</li>
            <li className="mt-[15px]">Kripto Sözlük</li>
            <li className="mt-[15px]">Duyurular</li>
            <li className="mt-[15px]">Limitler</li>
            <li className="mt-[15px]">Para Yatırma ve Çekme Platformları</li>
            <li className="mt-[15px]">Kara Para Aklamayı Önleme Politikası</li>
            <li className="mt-[15px]">Müşterini Tanı (KYC) Politikası</li>
          </ul>
        </div>
        <div className="flex flex-col py-5">
          <h6 className="text-footer-h6">Kripto Paralar</h6>
          <div className="flex gap-4">
            <ul className="mt-[25px] text-footer-li">
              <li>Bitcoin</li>
              <li className="mt-[15px]">Ethereum</li>
              <li className="mt-[15px]">Ripple</li>
              <li className="mt-[15px]">Litecoin</li>
              <li className="mt-[15px]">Tether</li>
              <li className="mt-[15px]">Chainlink</li>
              <li className="mt-[15px]">Polkadot</li>
              <li className="mt-[15px]">Avalanche</li>
              <li className="mt-[15px]">Binance Coin</li>
              <li className="mt-[15px]">Pancakeswap</li>
              <li className="mt-[15px]">Solana</li>
              <li className="mt-[15px]">NEAR Protocol</li>
              <li className="mt-[15px]">ApeCoin</li>
              <li className="mt-[15px]">Uniswap</li>
              <li className="mt-[15px]">Fantom</li>
              <li className="mt-[15px]">Curve DAO</li>
              <li className="mt-[15px]">Ethereum Classic</li>
            </ul>
            <ul className="mt-[25px] text-footer-li">
              <li>Dogecoin</li>
              <li className="mt-[15px]">Cardano</li>
              <li className="mt-[15px]">NEO</li>
              <li className="mt-[15px]">Chiliz</li>
              <li className="mt-[15px]">Holochain</li>
              <li className="mt-[15px]">BitTorrent Chain</li>
              <li className="mt-[15px]">Decentraland</li>
              <li className="mt-[15px]">The Sandbox</li>
              <li className="mt-[15px]">Shiba Inu</li>
              <li className="mt-[15px]">Polygon</li>
              <li className="mt-[15px]">PAX Gold</li>
              <li className="mt-[15px]">Cosmos</li>
              <li className="mt-[15px]">Enjin Coin</li>
              <li className="mt-[15px]">VeChain</li>
              <li className="mt-[15px]">THORChain</li>
              <li className="mt-[15px]">Oasis Network</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col py-5">
          <h6 className="text-footer-h6">Rehber</h6>
          <div className="flex gap-4">
            <ul className="mt-[25px] text-footer-li">
              <li>Bitcoin al</li>
              <li className="mt-[15px]">Ethereum al</li>
              <li className="mt-[15px]">Ripple al</li>
              <li className="mt-[15px]">Litecoin al</li>
              <li className="mt-[15px]">Tether al</li>
              <li className="mt-[15px]">Chainlink al</li>
              <li className="mt-[15px]">Polkadot al</li>
              <li className="mt-[15px]">Avalanche al</li>
              <li className="mt-[15px]">Binance Coin al</li>
              <li className="mt-[15px]">Pancakeswap al</li>
              <li className="mt-[15px]">Solana al</li>
              <li className="mt-[15px]">NEAR Protocol al</li>
              <li className="mt-[15px]">ApeCoin al</li>
              <li className="mt-[15px]">Uniswap al</li>
              <li className="mt-[15px]">Fantom al</li>
              <li className="mt-[15px]">Curve DAO al</li>
              <li className="mt-[15px]">Ethereum Classic al</li>
            </ul>
            <ul className="mt-[25px] text-footer-li">
              <li>Dogecoin al</li>
              <li className="mt-[15px]">Cardano al</li>
              <li className="mt-[15px]">NEO al</li>
              <li className="mt-[15px]">Chiliz al</li>
              <li className="mt-[15px]">Holochain al</li>
              <li className="mt-[15px]">BitTorrent Chain al</li>
              <li className="mt-[15px]">Decentraland al</li>
              <li className="mt-[15px]">The Sandbox al</li>
              <li className="mt-[15px]">Shiba Inu al</li>
              <li className="mt-[15px]">Polygon al</li>
              <li className="mt-[15px]">PAX Gold al</li>
              <li className="mt-[15px]">Cosmos al</li>
              <li className="mt-[15px]">Enjin Coin al</li>
              <li className="mt-[15px]">VeChain al</li>
              <li className="mt-[15px]">THORChain al</li>
              <li className="mt-[15px]">Oasis Network al</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-2 footer2 flex flex-col hidden">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-footer-h6 px-4 py-2">
                <span>Kurumsal</span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2">
                <ul className="text-footer-li">
                  <li>Kullanıcı Sözleşmesi</li>
                  <li className="mt-[15px]">Gizlilik ve Çerez Politikası</li>
                  <li className="mt-[15px]">Kişisel Verilerin Korunması</li>
                  <li className="mt-[15px]">
                    Açık Rıza Ve Dijital İletişim İzni Beyanı
                  </li>
                  <li className="mt-[15px]">Hakkımızda</li>
                  <li className="mt-[15px]">İletişim</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-footer-h6 px-4 py-2">
                <span>Kullanıcılar için</span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2">
                <ul className="text-footer-li">
                  <li>Blog</li>
                  <li className="mt-[15px]">Basında Biz</li>
                  <li className="mt-[15px]">Sıkça Sorulan Sorular</li>
                  <li className="mt-[15px]">Kripto Hesaplayıcı</li>
                  <li className="mt-[15px]">Kripto Sözlük</li>
                  <li className="mt-[15px]">Duyurular</li>
                  <li className="mt-[15px]">Limitler</li>
                  <li className="mt-[15px]">
                    Para Yatırma ve Çekme Platformları
                  </li>
                  <li className="mt-[15px]">
                    Kara Para Aklamayı Önleme Politikası
                  </li>
                  <li className="mt-[15px]">Müşterini Tanı (KYC) Politikası</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-footer-h6 px-4 py-2">
                <span>Kripto paralar</span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2">
                <ul className="text-footer-li">
                  <li>Bitcoin</li>
                  <li className="mt-[15px]">Ethereum</li>
                  <li className="mt-[15px]">Ripple</li>
                  <li className="mt-[15px]">Litecoin</li>
                  <li className="mt-[15px]">Tether</li>
                  <li className="mt-[15px]">Chainlink</li>
                  <li className="mt-[15px]">Polkadot</li>
                  <li className="mt-[15px]">Avalanche</li>
                  <li className="mt-[15px]">Binance Coin</li>
                  <li className="mt-[15px]">Pancakeswap</li>
                  <li className="mt-[15px]">Solana</li>
                  <li className="mt-[15px]">NEAR Protocol</li>
                  <li className="mt-[15px]">ApeCoin</li>
                  <li className="mt-[15px]">Uniswap</li>
                  <li className="mt-[15px]">Fantom</li>
                  <li className="mt-[15px]">Curve DAO</li>
                  <li className="mt-[15px]">Ethereum Classic</li>
                  <li className="mt-[15px]">Dogecoin</li>
                  <li className="mt-[15px]">Cardano</li>
                  <li className="mt-[15px]">NEO</li>
                  <li className="mt-[15px]">Chiliz</li>
                  <li className="mt-[15px]">Holochain</li>
                  <li className="mt-[15px]">BitTorrent Chain</li>
                  <li className="mt-[15px]">Decentraland</li>
                  <li className="mt-[15px]">The Sandbox</li>
                  <li className="mt-[15px]">Shiba Inu</li>
                  <li className="mt-[15px]">Polygon</li>
                  <li className="mt-[15px]">PAX Gold</li>
                  <li className="mt-[15px]">Cosmos</li>
                  <li className="mt-[15px]">Enjin Coin</li>
                  <li className="mt-[15px]">VeChain</li>
                  <li className="mt-[15px]">THORChain</li>
                  <li className="mt-[15px]">Oasis Network</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-footer-h6 px-4 py-2">
                <span>Rehber</span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2">
                <ul className="text-footer-li">
                  <li>Bitcoin al</li>
                  <li className="mt-[15px]">Ethereum al</li>
                  <li className="mt-[15px]">Ripple al</li>
                  <li className="mt-[15px]">Litecoin al</li>
                  <li className="mt-[15px]">Tether al</li>
                  <li className="mt-[15px]">Chainlink al</li>
                  <li className="mt-[15px]">Polkadot al</li>
                  <li className="mt-[15px]">Avalanche al</li>
                  <li className="mt-[15px]">Binance Coin al</li>
                  <li className="mt-[15px]">Pancakeswap al</li>
                  <li className="mt-[15px]">Solana al</li>
                  <li className="mt-[15px]">NEAR Protocol al</li>
                  <li className="mt-[15px]">ApeCoin al</li>
                  <li className="mt-[15px]">Uniswap al</li>
                  <li className="mt-[15px]">Fantom al</li>
                  <li className="mt-[15px]">Curve DAO al</li>
                  <li className="mt-[15px]">Ethereum Classic al</li>
                  <li className="mt-[15px]">Dogecoin al</li>
                  <li className="mt-[15px]">Cardano al</li>
                  <li className="mt-[15px]">NEO al</li>
                  <li className="mt-[15px]">Chiliz al</li>
                  <li className="mt-[15px]">Holochain al</li>
                  <li className="mt-[15px]">BitTorrent Chain al</li>
                  <li className="mt-[15px]">Decentraland al</li>
                  <li className="mt-[15px]">The Sandbox al</li>
                  <li className="mt-[15px]">Shiba Inu al</li>
                  <li className="mt-[15px]">Polygon al</li>
                  <li className="mt-[15px]">PAX Gold al</li>
                  <li className="mt-[15px]">Cosmos al</li>
                  <li className="mt-[15px]">Enjin Coin al</li>
                  <li className="mt-[15px]">VeChain al</li>
                  <li className="mt-[15px]">THORChain al</li>
                  <li className="mt-[15px]">Oasis Network al</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <hr className="bg-color-hr" />
      <div className="flex flex-col justify-between footer-mobile2">
        <div className="flex justify-between pt-[30px] footer-adress">
          <div className="flex flex-col gap-5">
            <h6 className="text-footer-h6-2">
              TOMYA TEKNOLOJİ A.Ş. <br />
              Maslak Mah. Saat Sok. Spine Tower No: 5/10, <br />
              Sarıyer / İstanbul
            </h6>
            <h6 className="text-footer-h6-2">Tel: 0(212) 807 10 71(72-73)</h6>
          </div>
          <div className="flex justify-center gap-5 items-center">
            <img src="/img/ic-fb.svg" alt="facebook" />
            <img src="/img/ic-tw.svg" alt="twitter" />
            <img src="/img/ic-ins.svg" alt="instagram" />
            <img src="/img/ic-telegram.svg" alt="telegram" />
            <img src="/img/ic-yt-logo.svg" alt="youtube" />
          </div>
        </div>
        <div className="pt-[30px] py-[120px]">
          {" "}
          <h6 className="text-footer-h6-3">
            Tüm Hakları Saklıdır. © 2021 - TOMYA
            <br />
            TOMYA TEKNOLOJİ A.Ş. <br />
            Mersis No: 0850062440300001
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
