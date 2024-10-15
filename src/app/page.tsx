"use client";
import Result from "@/components/result/Result";
import { jodohList } from "@/utils/dummyJodoh";
import { zodiakList } from "@/utils/dummyZodiak";
import { getZodiak } from "@/utils/getZodiak";
import Image from "next/image";
import { useEffect, useState } from "react";
import { dataInput } from "./Home.type";
import { toast } from "sonner";

export default function Home() {
  const [zodiakKu, setZodiakKu] = useState("");
  const [formData, setFormData] = useState({
    nama: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    zodiak: zodiakKu,
    hobi: "",
    no_telp: "",
  });

  const [formJodoh, setFormJodoh] = useState({
    nama: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    zodiak: "",
    hobi: "",
    no_telp: "",
  });

  // berjalan setiap ada perubahan pada form tanggal
  useEffect(() => {
    // untuk mengambil zodiak
    const handleGetZodiak = (birthDate: string) => {
      const lahir = new Date(birthDate);
      const tanggal = lahir.getDate();
      const bulan = lahir.getMonth() + 1;
      const zodiak = getZodiak(tanggal, bulan);
      setZodiakKu(zodiak);
    };
    handleGetZodiak(formData.tanggal_lahir);
  }, [formData.tanggal_lahir]);

  // fungsi memfilter jodoh jodoh
  const getJodoh = (dataInput: dataInput) => {
    const { nama, jenis_kelamin } = dataInput;
    const panjangNama = nama.length;
    const lengthJodoh = panjangNama % 12;

    // -m karena index dimulai dari 0
    // jika sisa hasil bagi = 0 maka kembalikan nilai 11 (indexke 11 dari list zodiak)
    const zodiakJodoh = zodiakList[lengthJodoh === 0 ? 11 : lengthJodoh - 1];

    // jika zodiaknya sama dan jenis kelaminnya tidak sama
    const jodohnya = jodohList.filter(
      (jodoh) =>
        jodoh.zodiak === zodiakJodoh && jodoh.jenis_kelamin !== jenis_kelamin
    );
    if (jodohnya.length >= 0) {
      return jodohnya[0];
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // mengambil zodiak dan masukkan ke dalam form
    const updatedFormData = {
      ...formData,
      zodiak: zodiakKu,
    };
    setFormData(updatedFormData);
    // mengambil jodoh dan masukkan ke dalam state formJodoh
    const jodoh = getJodoh(updatedFormData);
    if (jodoh) {
      setFormJodoh(jodoh as any);
      toast.success("Jodoh ditemukan");
    } else {
      setFormJodoh({} as any);
      toast.error("Jodoh tidak ditemukan");
    }
  };

  return (
    <div className="flex bg-[#F0EBF2] home overflow-x-hidden px-4 flex-col min-h-screen items-center pt-8">
      <Image
        src="/images/heading.png "
        className="h-[60px] w-[330px] mb-3 "
        alt="logo"
        width={200}
        height={200}
      />

      <div className="flex gap-5  w-full ">
        {/* LIST Zodiak */}
        <div className="border  border-[1] border-pink-900 shadow-md shadow-pink-700">
          <p className="text-2xl text-gray-900 bg-red-900/40 py-3 mb-4 text-center font-extrabold">
            Zodiak
          </p>
          <ol className="text-xs px-3">
            <li>1. Aries (21 Maret - 19 April)</li>
            <li>2. Taurus (20 April - 20 Mei)</li>
            <li>3. Gemini (21 Mei - 20 Juni)</li>
            <li>4. Cancer (21 Juni - 22 Juli)</li>
            <li>5. Leo (23 Juli - 22 Agustus)</li>
            <li>6. Virgo (23 Agustus - 22 September)</li>
            <li>7. Libra (23 September - 22 Oktober)</li>
            <li>8. Scorpio (23 Oktober - 21 November)</li>
            <li>9. Sagitarius (22 November - 21 Desember)</li>
            <li>10. Capricorn (22 Desember - 19 Januari)</li>
            <li>11. Aquarius (20 Januari - 19 Februari)</li>
            <li>12. Pisces (19 Februari - 20 Maret)</li>
          </ol>
        </div>

        {/* FORM CARI JODOH */}
        <div className="bg-[#F2CED4] w-[45%] shadow-md shadow-pink-700 border-pink-900 border-[1px] rounded-lg">
          <h1 className="text-2xl text-red-500 text-center font-extrabold rounded-t-lg py-2 border-b-[1px] border-pink-900 bg-[#F2CED4] w-full mb-4">
            Cari Jodoh
          </h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-4 p-4"
          >
            <div className="flex justify-around gap-3">
              <label className="w-40" htmlFor="nama">
                Nama
              </label>
              <input
                required
                onChange={(e) =>
                  setFormData({ ...formData, nama: e.target.value })
                }
                className="w-full h-8 px-2"
                type="text"
                id="nama"
                name="nama"
              />
            </div>
            <div className="flex justify-around gap-3 w-full">
              <label className="w-40" htmlFor="jenis_kelamin">
                Jenis Kelamin
              </label>
              <select
                required
                name="jenis_kelamin"
                id="jenis_kelamin"
                onChange={(e) =>
                  setFormData({ ...formData, jenis_kelamin: e.target.value })
                }
                className="w-full h-8 px-2"
              >
                <option value="">Jenis Kelamin</option>
                <option value="pria">Pria</option>
                <option value="wanita">Wanita</option>
              </select>
            </div>
            <div className="flex  justify-around gap-3 w-full">
              <label className=" mr-2 w-40 max-w-28" htmlFor="tanggal_lahir">
                Tanggal Lahir
              </label>
              <input
                required
                onChange={(e) =>
                  setFormData({ ...formData, tanggal_lahir: e.target.value })
                }
                className="w-full h-8 px-2"
                type="date"
                id="tanggal_lahir"
                name="tanggal_lahir"
              />
            </div>
            <div className="flex justify-around gap-3 w-full">
              <label className="w-40 flex flex-col" htmlFor="zodiak">
                Zodiak
                <span className="text-red-500 text-xs">*otomatis</span>
              </label>
              <input
                required
                onChange={(e) =>
                  setFormData({ ...formData, zodiak: e.target.value })
                }
                value={zodiakKu || "otomatis"}
                disabled
                className="w-full h-8 px-2"
                type="text"
                id="zodiak"
                name="zodiak"
              />
            </div>
            <div className="flex justify-around gap-3 w-full">
              <label className="w-40" htmlFor="hobi">
                Hobi
              </label>
              <input
                required
                onChange={(e) =>
                  setFormData({ ...formData, hobi: e.target.value })
                }
                className="w-full h-8 px-2"
                type="text"
                id="hobi"
                name="hobi"
              />
            </div>
            <div className="flex justify-around gap-3 w-full">
              <label className="w-40" htmlFor="no_telp">
                No. Telp
              </label>
              <input
                required
                onChange={(e) =>
                  setFormData({ ...formData, no_telp: e.target.value })
                }
                className="w-full h-8 px-2"
                type="tel"
                id="no_telp"
                name="no_telp"
              />
            </div>
            <button className="bg-pink-700 text-white p-2 w-24 rounded-lg mx-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center mt-9  bg-gradient-to-b from-transparent to-bg-[#F0EBF2] w-screen pr-[120px]  justify-center flex-col">
        <Image
          src="/images/heart1.png"
          className=" my-5"
          alt="zodiak"
          width={100}
          height={200}
        />
        <Result formJodoh={formJodoh} />
      </div>
    </div>
  );
}
