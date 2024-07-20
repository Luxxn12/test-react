import React from "react";
import Logo from "../assets/logo-footer.svg";
import Youtube from "../assets/iconyoutube.svg";
import ig from "../assets/ig.svg";
import fb from "../assets/fb.svg";
import x from "../assets/x.svg";

function Footer() {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 ">
        <div className="flex flex-col">
          <img src={Logo} alt="" width={300} />
          <text className="font-bold text-gray-600 mt-4 ">
            Baitul Maal Barakatul Ummah
          </text>
          <text className="text-sm text-gray-400 mt-2">
            Jalan Brigjend Katamso KM 6 No. 6 Kel. Gn. Telihan, Kec. Bontang
            Barat Kota Bontang
          </text>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col">
            <text className="font-bold mb-4">Tentang Kami</text>

            <text className=" text-gray-400 mt-2">Manajemen</text>
            <text className=" text-gray-400 mt-2">Visi Misi</text>
            <text className=" text-gray-400 mt-2">Nilai Utama</text>
            <text className=" text-gray-400 mt-2">Sejarah</text>
            <text className=" text-gray-400 mt-2">Contact</text>
          </div>
          <div className="flex flex-col mt-5 lg:mt-0">
            <text className="font-bold mb-4">Layanan Kami</text>
            <text className=" text-gray-400 mt-2">Ziswaf Prioritas</text>
            <text className=" text-gray-400 mt-2">Konsultasi Zakat</text>
            <text className=" text-gray-400 mt-2">Kalkulator Zakat</text>
            <text className=" text-gray-400 mt-2">Jemput Donasi</text>
          </div>
        </div>
        <div>
          <div className="rounded-md p-5 bg-red-200 w-full">
            <div className="text-red-500">
              ⛔ Kami tidak menerima segala bentuk donasi yang ber-sumber dari
              tindak kejahatan seperti tindak pidana korupsi, pencucian uang,
              penggelapan, penipuan, dll.
            </div>
          </div>
          <div className="flex xl:flex-row-reverse flex-row mt-3">
  <text className="font-bold mb-4 text-2xl">Temukan Kami</text>
</div>
<div className="flex xl:flex-row-reverse flex-row mt-1 gap-4">
  <img src={Youtube} alt="" />
  <img src={ig} alt="" />
  <img src={fb} alt="" />
  <img src={x} alt="" />
</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
