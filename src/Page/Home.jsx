import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/search.svg";
import Kotak from "../assets/kotak.svg";
import Banner from "../assets/Banner.svg";
import Img1 from "../assets/img1.svg";
import Img2 from "../assets/img2.svg";
import Img3 from "../assets/img3.svg";
import Img4 from "../assets/img4.svg";
import Img6 from "../assets/img6.svg";
import Img7 from "../assets/img7.svg";
import Img8 from "../assets/img8.svg";
import Img9 from "../assets/img9.svg";
import Card from "../Components/Card";
import CardBasic from "../Components/CardBasic";
import CardBerita from "../Components/CardBerita";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-row justify-between px-3 py-4">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex flex-row border w-44 justify-between  border-grey-400 px-4 rounded-lg">
          <input
            type="text"
            placeholder="Cari Program"
            className="w-full outline-none text-sm bg-transparent "
          />{" "}
          <img className="w-4" src={SearchIcon} alt="" />
        </div>
        <div>
          <img src={Kotak} alt="" />
        </div>
      </div>
      <div className="px-3">
        <img src={Banner} alt="" />
      </div>
      <div className="flex flex-row h-20 justify-between px-3 items-center">
        <img src={Img1} alt="" className="w-24" />
        <img src={Img3} alt="" className="w-24" />
        <img src={Img2} alt="" className="w-20" />
      </div>
      <div className="flex items-center">
        <div className="grid grid-cols-3 gap-4 px-3">
          <div className="...">
            {" "}
            <img src={Img4} alt="" />
          </div>
          <div className="col-span-2 ">
            <div className="px-3 py-4">
              <h1 className="text-xl font-bold text-green-700">Tentang BMBU</h1>
              <h1 className="text-2xl font-bold text-yellow-500">
                (Baitul Maal Barakatul Umah)
              </h1>
              <p className="text-gray-500 mb-5">
                Yayasan Baitul Maal Barakatul Ummah (“Yayasan”) didirikan
                berdasarkan Akta Notaris Juliansyah, SH Nomor 15 Tanggal 15
                Oktober 2016, yang berstatus badan hukumnya telah disahkan
                dengan Keputusan Menteri Hukum dan Hak Asasi Manusia Republik
                Indonesia Nomor AHU-0041321.AH.01.04. Tahun 2016 Tanggal 26
                Oktober 2016. Yayasan telah diberikan izin sebagai Lembaga Amil
                Zakat (LAZ) Skala Kabupaten/Kota, yang selanjutnya disebut LAZ
                Baitul Maal Barakatul Ummah (“LAZ BMBU”).
              </p>
              <button className="w-44 h-14 rounded-2xl text-md  text-white font-bold bg-green-500">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        <div className="px-3"></div>
      </div>
      <div className="my-10">
        <div className="flex flex-row px-3 justify-between items-center">
          <div>
            <h1 className="text-green-700 font-bold text-2xl">
              Program{" "}
              <text className="text-yellow-500 font-bold text-2xl">BMBU</text>
            </h1>
            <text className="text-gray-500 text-sm">
              Kini membantu sesama menjadi lebih mudah dengan kami
            </text>
          </div>
          <button>Lihat Semua</button>
        </div>
        <div className=" flex flex-row gap-5 flex-nowrap overflow-hidden pl-3 mt-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-red-6000 h-44">
        <p className="text-2xl font-bold">
          <span className="text-green-800">Layanan</span>{" "}
          <span className="text-yellow-300">Kami</span>{" "}
        </p>
        <p className="text-center text-gray-400">
          Berbagi kebahagiaan dengan sesama kini lebih mudah dan nyaman dengan
          kami
        </p>
      </div>
      <div className="w-full px-5 flex md:flex-row flex-col gap-5 items-center">
        <CardBasic
          url={Img6}
          title={"Ziswaf Prioritas"}
          desc={"Pilih sedekah pada program pilihan terbaik Anda"}
        />
        <CardBasic
          url={Img7}
          title={"Konsultasi Zakat"}
          desc={"Pilih kategori zakat dan pilih ketentuannya"}
        />
        <CardBasic
          url={Img8}
          title={"Kalkulator Zakat"}
          desc={"Hitung dengan mudah ketentuan wajib zakat Anda"}
        />
        <CardBasic
          url={Img9}
          title={"Jemput Donasi"}
          desc={"Donasi mudah kapanpun dan dimanapun Anda berada"}
        />
      </div>
      <div className="py-10">
        <div className="flex flex-row px-3 justify-between items-center">
          <div>
            <h1 className="text-violet-700 font-bold text-2xl">
              Berita dan Kegiatan{" "}
              <text className="text-yellow-500 font-bold text-2xl">BMBU</text>
            </h1>
            <text className="text-gray-500 text-sm">
              Lihat berita dan kegiatan terbaru kami disini
            </text>
          </div>
          <button className="border border-gray-300 rounded-lg text-green-800 px-4 p-1">
            Lihat Semua
          </button>
        </div>
        <div className="flex gap-5 py-3  px-3">
          <button className="border border-gray-300 rounded-lg text-green-800 px-4 p-1">
            {" "}
            Kegiatan
          </button>
          <button className="border border-gray-300 rounded-lg text-green-800 px-4 p-1">
            Berita
          </button>
          <button className="border border-gray-300 rounded-lg text-green-800 px-4 p-1">
            Fun Fact
          </button>
          <button className="border border-gray-300 rounded-lg text-green-800 px-4 p-1">
            Artikel
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3 px-3">
          <div className="flex flex-col gap-4">
            <img src={Img4} alt="" />
            <div className="flex flex-col gap-2">
              <text className="text-violet-700 text-sm font-bold">
                KEGIATAN
              </text>
              <text className="text-xl font-bold">
                Rahasia Awet Muda: 5 Kebiasaan Sehat yang Wajib Dilakukan
              </text>
              <text className="text-gray-500 text-xs">
                Ingin memiliki wajah awet muda dan badan yang bugar seperti
                selebritas? Temukan rahasianya
              </text>
              <text className="text-gray-400 text-xs">
                3 Juni 2024 · 3 menit membaca
              </text>
              <div className="mt-3">
                <button className="border border-cyan-600 rounded-lg text-cyan-600 px-4 p-1">
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img src={Img4} alt="" />
            <div className="flex flex-col gap-2">
              <text className="text-violet-700 text-sm font-bold">
                KEGIATAN
              </text>
              <text className="text-xl font-bold">
                Rahasia Awet Muda: 5 Kebiasaan Sehat yang Wajib Dilakukan
              </text>
              <text className="text-gray-500 text-xs">
                Ingin memiliki wajah awet muda dan badan yang bugar seperti
                selebritas? Temukan rahasianya
              </text>
              <text className="text-gray-400 text-xs">
                3 Juni 2024 · 3 menit membaca
              </text>
              <div className="mt-3">
                <button className="border border-cyan-600 rounded-lg text-cyan-600 px-4 p-1">
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img src={Img4} alt="" />
            <div className="flex flex-col gap-2">
              <text className="text-violet-700 text-sm font-bold">
                KEGIATAN
              </text>
              <text className="text-xl font-bold">
                Rahasia Awet Muda: 5 Kebiasaan Sehat yang Wajib Dilakukan
              </text>
              <text className="text-gray-500 text-xs">
                Ingin memiliki wajah awet muda dan badan yang bugar seperti
                selebritas? Temukan rahasianya
              </text>
              <text className="text-gray-400 text-xs">
                3 Juni 2024 · 3 menit membaca
              </text>
              <div className="mt-3">
                <button className="border border-cyan-600 rounded-lg text-cyan-600 px-4 p-1">
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="flex flex-row px-3 justify-between items-center">
            <div>
              <h1 className="text-violet-700 font-bold text-2xl">
                Program{" "}
                <text className="text-yellow-500 font-bold text-2xl">
                  Pilihan
                </text>
              </h1>
              <text className="text-gray-500 text-sm">
                Bantu mewujudkan impian dan kebutuhan mereka yang membutuhkan
              </text>
            </div>
            <button className="border border-gray-300 rounded-lg text-green-800 px-4 p-1">
              Lihat Semua
            </button>
          </div>
          <div className="flex flex-nowrap mt-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3 justify-center px-3">
              <CardBerita />
              <CardBerita />
              <CardBerita />
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="px-3 py-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
