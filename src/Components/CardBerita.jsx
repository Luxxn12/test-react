import React from "react";
import { Card } from "antd";
// import Img5 from '../assets/img5.svg'
import Img5 from "../assets/img5.svg";

const CardBerita = () => (
  <Card
    hoverable
    style={{ width: 410 }}
    cover={<img alt="example" src={Img5} />}
  >
    <div className="flex flex-col">
      <text className="mt-2 text-sm">
        Cianjur Berduka: 200 Lebih Meninggal Dunia, Cianjur Berduka: 200 Lebih
        Meninggal Dunia
      </text>
      <div className="flex justify-between mt-2">
        <text className=" text-xs">Terkumpul</text>
        <text className=" text-xs">hari tersisa</text>
      </div>
      <div className="flex justify-between">
        <text className=" text-xs font-bold">Rp131.456.663</text>
        <text className=" text-xs font-bold">656 hari</text>
      </div>
      <button className='w-full text-white h-10 bg-cyan-700 rounded-xl mt-5'>Bantu Sekarang</button>
    </div>
  </Card>
);

export default CardBerita;
