
import React from "react";

export default function BodoBoats() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <nav className="flex justify-between items-center px-8 py-6 shadow-md bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <img src="/assets/logo.png" alt="Bodo Logo" className="h-10" />
        <ul className="flex gap-6 text-lg font-semibold text-blue-900">
          <li><a href="#home">Početna</a></li>
          <li><a href="#models">Modeli</a></li>
          <li><a href="#about">O nama</a></li>
          <li><a href="#specs">Specifikacije</a></li>
          <li><a href="#gallery">Galerija</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>

      <section id="home" className="flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-br from-blue-100 to-blue-200">
        <img src="/assets/logo.png" alt="Bodo Logo" className="w-48 mb-6" />
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900">BODO BOATS</h1>
        <p className="mt-4 text-lg text-blue-800">Uživanje na vodi nikada nije bilo dostupnije</p>
      </section>

      <section id="models" className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Modeli</h2>
        <p className="text-lg text-gray-700 mb-8">Trenutno dostupan model: BODO 540</p>
        <img src="/assets/bodo540-blue.png" alt="Bodo 540" className="mx-auto rounded-xl shadow-xl" />
      </section>

      <section id="about" className="bg-white py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-900">O nama</h2>
        <p className="text-lg text-gray-700">
          Ljubav prema reci, nastala još u ranom detinjstvu i najrećnija sećanja o vremenu provedenom na vodi,
          navela su nas da napravimo čamac koji će svima pružiti maksimalno uživanje – bilo da je reč o pecanju,
          kupanju ili samo uživanju u vožnji i druženju sa prijateljima.
        </p>
      </section>

      <section id="specs" className="bg-gradient-to-tr from-blue-50 to-white py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Tehničke specifikacije</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-lg text-gray-800">
          <p><strong>Dužina:</strong> 5,65 m</p>
          <p><strong>Širina:</strong> 1,56 m</p>
          <p><strong>Dubina:</strong> 0,65 m</p>
          <p><strong>Težina:</strong> 230 kg</p>
          <p><strong>Max snaga motora:</strong> 50 ks (37 kW)</p>
          <p><strong>Max opterećenost:</strong> 550 kg</p>
          <p><strong>Broj putnika:</strong> 6 osoba</p>
        </div>
      </section>

      <section id="gallery" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Galerija</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <img src="/assets/bodo540-blue-2.png" alt="Plavi model 1" className="rounded-lg shadow" />
          <img src="/assets/bodo540-red.png" alt="Crveni model" className="rounded-lg shadow" />
          <img src="/assets/bodo540-green.png" alt="Zeleni model" className="rounded-lg shadow" />
        </div>
      </section>

      <section id="contact" className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Kontakt</h2>
        <p className="text-lg text-gray-700 mb-4">Za porudžbine i više informacija, posetite nas na Instagramu:</p>
        <a
          href="https://www.instagram.com/bodo_boats/"
          className="inline-block bg-blue-900 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-800"
          target="_blank"
        >
          @bodo_boats
        </a>
      </section>

      <footer className="text-center py-6 bg-blue-900 text-white">
        <p>&copy; {new Date().getFullYear()} BODO BOATS. Sva prava zadržana.</p>
      </footer>
    </div>
  );
}
