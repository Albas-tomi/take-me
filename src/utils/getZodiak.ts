export function getZodiak(tanggalInput: number, bulan: number) {
  const zodiacSigns = [
    { name: "Capricorn", akhir: { tanggal: 19, bulan: 1 } },
    { name: "Aquarius", akhir: { tanggal: 18, bulan: 2 } },
    { name: "Pisces", akhir: { tanggal: 20, bulan: 3 } },
    { name: "Aries", akhir: { tanggal: 19, bulan: 4 } },
    { name: "Taurus", akhir: { tanggal: 20, bulan: 5 } },
    { name: "Gemini", akhir: { tanggal: 20, bulan: 6 } },
    { name: "Cancer", akhir: { tanggal: 22, bulan: 7 } },
    { name: "Leo", akhir: { tanggal: 22, bulan: 8 } },
    { name: "Virgo", akhir: { tanggal: 22, bulan: 9 } },
    { name: "Libra", akhir: { tanggal: 22, bulan: 10 } },
    { name: "Scorpio", akhir: { tanggal: 21, bulan: 11 } },
    { name: "Sagitarius", akhir: { tanggal: 21, bulan: 12 } },
  ];

  for (let i = 0; i < zodiacSigns.length; i++) {
    const sign = zodiacSigns[i];
    // jika jumlah bulan < akhir bulan zodiak
    // contoh bulan taurus = mei(5) dan bulan inputan 5
    // serta tanggal input <= tanggal akhir

    if (
      bulan < sign.akhir.bulan ||
      (bulan === sign.akhir.bulan && tanggalInput <= sign.akhir.tanggal)
    ) {
      return sign.name;
    }
    if (!bulan && !tanggalInput) {
      return "";
    }
  }
  return "Capricorn";
}
