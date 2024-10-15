import React from "react";

const Result = ({ formJodoh }: any) => {
  return (
    <div>
      {" "}
      <div className=" w-[570px] z-10 shadow-md mb-6 shadow-blue-700   border-blue-900 border-[1px] rounded-lg">
        <h1 className="text-2xl text-blue-700 text-center font-extrabold rounded-t-lg py-2 border-b-[1px] border-blue-900 bg-[#AAB6EA]  w-full mb-4">
          Cari Jodoh
        </h1>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex justify-around gap-3">
            <label className="w-40" htmlFor="nama">
              Nama
            </label>
            <p className="w-full h-8">{formJodoh?.nama}</p>
          </div>
          <div className="flex justify-around gap-3">
            <label className="w-40" htmlFor="nama">
              Jenis Kelamin
            </label>
            <p className="w-full h-8">{formJodoh?.jenis_kelamin}</p>
          </div>
          <div className="flex justify-around gap-3">
            <label className="w-40" htmlFor="nama">
              Tanggal Lahir
            </label>
            <p className="w-full h-8">{formJodoh?.tanggal_lahir}</p>
          </div>
          <div className="flex justify-around gap-3">
            <label className="w-40" htmlFor="nama">
              Zodiak
            </label>
            <p className="w-full h-8">{formJodoh?.zodiak}</p>
          </div>
          <div className="flex justify-around gap-3">
            <label className="w-40" htmlFor="nama">
              Hobi
            </label>
            <p className="w-full h-8">{formJodoh?.hobi}</p>
          </div>
          <div className="flex justify-around gap-3">
            <label className="w-40" htmlFor="nama">
              No Telp.
            </label>
            <p className="w-full h-8">{formJodoh?.no_telp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
