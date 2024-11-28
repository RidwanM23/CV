import pp from "../assets/pp.jpg"
import "aos/dist/aos.css";
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000});
  }, []);
  return (
    <section id="about" className="bg-gradient-to-r from-gray-200 to-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center">
        {/* Left Section - Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg" data-aos="fade-right">
            <img
              src={pp}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="text-gray-800" data-aos="fade-right">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            Hai, Saya <span className="font-bold">Ridwan Muhammad Ramdan</span>
            <br />
            Saya Seorang <a class="underline decoration-sky-500">UI/UX</a> Designer Dengan 1 Bulan Pengalaman Dalam
            Menciptakan Pengalaman Digital Yang Intuitif, Menarik, Dan Berbasis
            Kebutuhan Pengguna.
          </p>
          <p className="mb-4">
            Dengan Latar Belakang Di <a class="decoration-pink-500/30">Desainer Grafis</a>, Saya Memadukan Kreativitas
            Dan Analisis Untuk Menghasilkan Solusi Desain Yang Tidak Hanya
            Estetis Tetapi Juga Fungsional.
          </p>
          <p className="font-bold mb-2">Keahlian Utama Saya Meliputi:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <span className="font-medium">User Research:</span> Mengidentifikasi Kebutuhan Dan Perilaku Pengguna Melalui Wawancara, Survei, Dan Analisis Data.
            </li>
            <li>
              <span className="font-medium">Wireframing & Prototyping:</span> Menciptakan Kerangka Dan Prototipe Interaktif Menggunakan Tools Seperti Figma Dan Adobe XD.
            </li>
            <li>
              <span className="font-medium">UI Design:</span> Mendesain Antarmuka Yang Menarik Dengan Fokus Pada Aksesibilitas Dan Pengalaman Pengguna.
            </li>
            <li>
              <span className="font-medium">Usability Testing:</span> Melakukan Pengujian Untuk Memastikan Desain Memenuhi Tujuan Pengguna Dan Bisnis.
            </li>
          </ul>
          <p>
            Saya Telah Bekerja Pada Berbagai Proyek, Mulai Dari Aplikasi Mobile
            Hingga Platform Web Skala Besar, Termasuk Proyek Sekolah. Sebagai
            Seseorang Yang Selalu Ingin Berkembang, Saya Terus Memperbarui
            Pengetahuan Saya Tentang Tren Desain Terbaru Dan Teknologi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
