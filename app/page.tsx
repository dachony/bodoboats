'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [language, setLanguage] = useState<'sr' | 'en' | 'ru' | 'de'>('sr');
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const galleryImages = Array.from({ length: 16 }, (_, i) => String(i + 1).padStart(3, '0'));
  const heroImages = ['001', '002', '003'];

  const translations = {
    sr: {
      nav: { home: 'Početna', about: 'O nama', gallery: 'Galerija', contact: 'Kontakt' },
      hero: {
        tagline: 'Vaš pouzdani partner na vodi',
        subtitle: 'Proizvodnja čamaca i prodaja kvalitetne opreme za čamce'
      },
      about: {
        title: 'O nama',
        text1: 'Ljubav prema reci, nastala još u ranom detinjstvu i najlepša sećanja o vremenu provedenom na vodi, navela su nas da napravimo čamac, koji će svima pružiti maksimalno uživanje, bilo da je reč o pecanju, kupanju na rečnim adama i obalama ili samo uživanju u vožnji i druženju sa prijateljima.',
        text2: 'Izradi ovog plovila posvetili smo se veoma studiozno, a da bismo ispunili sve Vaše zahteve vodili smo računa o svakom detalju. U saradnji sa inžinjerima brodogradnje i nakon izrađenog projekta stabiliteta i plovnosti, pristupili smo izradi potpuno novog modela na tržištu, koji će zadovoljiti potrebe i najzahtevnijih.',
        text3: 'Posle nešto više od godinu dana od prve skice, sa zadovoljstvom Vam predstavljamo naš prvi model BODO 540, a tu se naša priča ne zaustavlja...',
        bodo540text1: 'Ono što odlikuje BODO 540, su moderan dizajn, izuzetna plovnost, preciznost u izradi i pre svega sigurnost korisnika. Veliki broj boksova (pet), koji se po Vašoj želji i potrebi mogu modifikovati, omogući će Vam organizaciju potrebnog pribora i opreme za maksimalno komforno provedeno vreme na vodi.',
        bodo540text2: 'Dubina čamca (0,65 m) bez ograda, pružiće neophodan osećaj sigurnosti za Vas i Vaše saputnike, a dužina čamca (5,65 m) će u tome svakako doprineti u vetrovitim danima, kada su na vodi talasi. Važno je još i reći da čamac poseduje 12 odvojenih vazdušnih komora, što ga čini skoro nepotopivim.',
        certificate: 'Sve navedene karakteristike potvrđuje zvaničan izveštaj sa testiranja nemačke kompanije DNV, čime je BODO 540 sertifikovan CE Sertifikatom o usaglašenosti sa evropskim standardima.',
        specs: 'Dimenzije i tehnička dokumentacija',
        length: 'Dužina',
        width: 'Širina',
        depth: 'Dubina',
        weight: 'Težina',
        maxPower: 'Max snaga motora',
        maxLoad: 'Max opterećenost',
        passengers: 'Broj putnika',
        certified: 'CE Sertifikovan - DNV'
      },
      gallery: { title: 'Galerija', subtitle: 'BODO 540' },
      welcome: {
        text: 'Drago nam je što ste posetili našu stranicu! Biće nam zadovoljstvo da nas kontaktirate telefonom, email-om ili putem društvenih mreža da Vam pomognemo u odabiru pravog čamca za Vaše vodene avanture i uživanje.',
        signature: 'Vaš,',
        company: 'Bodo Boats'
      },
      contact: {
        title: 'Kontakt',
        email: 'Email',
        phone: 'Telefon',
        web: 'Web',
        social: 'Pratite nas na društvenim mrežama',
        cta: 'Pošaljite upit'
      },
      footer: { tagline: 'Vaš pouzdani partner na vodi', links: 'Linkovi', rights: 'Sva prava zadržana.' }
    },
    en: {
      nav: { home: 'Home', about: 'About', gallery: 'Gallery', contact: 'Contact' },
      hero: {
        tagline: 'Your trusted partner on the water',
        subtitle: 'Boat manufacturing and quality equipment sales'
      },
      about: {
        title: 'About Us',
        text1: 'Our love for the river, born in early childhood and the best memories of time spent on the water, led us to create a boat that will provide everyone with maximum enjoyment, whether it\'s fishing, swimming on river islands and shores, or simply enjoying the ride and socializing with friends.',
        text2: 'We approached the construction of this vessel very studiously, and to meet all your requirements, we took care of every detail. In collaboration with naval engineers and after completing a stability and buoyancy project, we proceeded to create a completely new model on the market that will satisfy even the most demanding needs.',
        text3: 'After just over a year from the first sketch, we are pleased to present our first model BODO 540, and our story doesn\'t stop there...',
        bodo540text1: 'What distinguishes the BODO 540 are modern design, exceptional buoyancy, precision in construction, and above all, user safety. A large number of compartments (five), which can be modified according to your wishes and needs, will allow you to organize the necessary accessories and equipment for maximum comfortable time on the water.',
        bodo540text2: 'The boat\'s depth (0.65 m) without railings will provide the necessary sense of security for you and your companions, and the boat\'s length (5.65 m) will certainly contribute on windy days when there are waves on the water. It is also important to mention that the boat has 12 separate air chambers, making it almost unsinkable.',
        certificate: 'All the mentioned characteristics are confirmed by the official test report of the German company DNV, whereby the BODO 540 is certified with a CE Certificate of compliance with European standards.',
        specs: 'Dimensions and Technical Documentation',
        length: 'Length',
        width: 'Width',
        depth: 'Depth',
        weight: 'Weight',
        maxPower: 'Max engine power',
        maxLoad: 'Max load capacity',
        passengers: 'Number of passengers',
        certified: 'CE Certified - DNV'
      },
      gallery: { title: 'Gallery', subtitle: 'BODO 540' },
      welcome: {
        text: 'We are glad you visited our website! It will be our pleasure to contact us by phone, email, or social media to help you choose the right boat for your water adventures and enjoyment.',
        signature: 'Yours,',
        company: 'Bodo Boats'
      },
      contact: {
        title: 'Contact',
        email: 'Email',
        phone: 'Phone',
        web: 'Web',
        social: 'Follow us on social media',
        cta: 'Send inquiry'
      },
      footer: { tagline: 'Your trusted partner on the water', links: 'Links', rights: 'All rights reserved.' }
    },
    ru: {
      nav: { home: 'Главная', about: 'О нас', gallery: 'Галерея', contact: 'Контакты' },
      hero: {
        tagline: 'Ваш надежный партнер на воде',
        subtitle: 'Производство лодок и продажа качественного оборудования'
      },
      about: {
        title: 'О нас',
        text1: 'Любовь к реке, зародившаяся еще в раннем детстве, и самые лучшие воспоминания о времени, проведенном на воде, привели нас к созданию лодки, которая подарит всем максимальное удовольствие, будь то рыбалка, купание на речных островах и берегах или просто наслаждение поездкой и общением с друзьями.',
        text2: 'К созданию этого судна мы подошли очень внимательно, и чтобы выполнить все ваши требования, мы учли каждую деталь. В сотрудничестве с инженерами судостроения и после завершения проекта устойчивости и плавучести мы приступили к созданию совершенно новой модели на рынке, которая удовлетворит даже самые требовательные потребности.',
        text3: 'Спустя чуть более года с момента первого эскиза, мы рады представить вам нашу первую модель BODO 540, и наша история на этом не заканчивается...',
        bodo540text1: 'BODO 540 отличается современным дизайном, исключительной плавучестью, точностью изготовления и, прежде всего, безопасностью пользователя. Большое количество отсеков (пять), которые можно модифицировать по вашему желанию и потребностям, позволит вам организовать необходимые аксессуары и оборудование для максимально комфортного времяпрепровождения на воде.',
        bodo540text2: 'Глубина лодки (0,65 м) без ограждений обеспечит необходимое чувство безопасности для вас и ваших спутников, а длина лодки (5,65 м) обязательно поможет в ветреные дни, когда на воде волны. Также важно отметить, что лодка имеет 12 отдельных воздушных камер, что делает ее практически непотопляемой.',
        certificate: 'Все перечисленные характеристики подтверждены официальным отчетом испытаний немецкой компании DNV, благодаря чему BODO 540 сертифицирован сертификатом CE о соответствии европейским стандартам.',
        specs: 'Размеры и техническая документация',
        length: 'Длина',
        width: 'Ширина',
        depth: 'Глубина',
        weight: 'Вес',
        maxPower: 'Макс. мощность двигателя',
        maxLoad: 'Макс. грузоподъемность',
        passengers: 'Количество пассажиров',
        certified: 'Сертификат CE - DNV'
      },
      gallery: { title: 'Галерея', subtitle: 'BODO 540' },
      welcome: {
        text: 'Мы рады, что вы посетили наш сайт! Нам будет приятно, если вы свяжетесь с нами по телефону, электронной почте или в социальных сетях, чтобы помочь вам выбрать подходящую лодку для ваших водных приключений и удовольствия.',
        signature: 'С уважением,',
        company: 'Bodo Boats'
      },
      contact: {
        title: 'Контакты',
        email: 'Электронная почта',
        phone: 'Телефон',
        web: 'Веб-сайт',
        social: 'Следите за нами в социальных сетях',
        cta: 'Отправить запрос'
      },
      footer: { tagline: 'Ваш надежный партнер на воде', links: 'Ссылки', rights: 'Все права защищены.' }
    },
    de: {
      nav: { home: 'Startseite', about: 'Über uns', gallery: 'Galerie', contact: 'Kontakt' },
      hero: {
        tagline: 'Ihr zuverlässiger Partner auf dem Wasser',
        subtitle: 'Bootsbau und Verkauf hochwertiger Ausrüstung'
      },
      about: {
        title: 'Über uns',
        text1: 'Unsere Liebe zum Fluss, die in der frühen Kindheit entstand, und die schönsten Erinnerungen an die Zeit auf dem Wasser führten uns dazu, ein Boot zu schaffen, das jedem maximales Vergnügen bietet, sei es beim Angeln, Schwimmen auf Flussinseln und Ufern oder einfach nur beim Genießen der Fahrt und beim Geselligkeit mit Freunden.',
        text2: 'Wir näherten uns dem Bau dieses Schiffes sehr studiert, und um alle Ihre Anforderungen zu erfüllen, kümmerten wir uns um jedes Detail. In Zusammenarbeit mit Schiffsbauingenieuren und nach Abschluss eines Stabilitäts- und Schwimmprojekts haben wir ein völlig neues Modell auf dem Markt geschaffen, das selbst die anspruchsvollsten Bedürfnisse erfüllt.',
        text3: 'Nach etwas mehr als einem Jahr seit der ersten Skizze freuen wir uns, Ihnen unser erstes Modell BODO 540 vorzustellen, und unsere Geschichte endet hier nicht...',
        bodo540text1: 'Was die BODO 540 auszeichnet, sind modernes Design, außergewöhnlicher Auftrieb, Präzision in der Konstruktion und vor allem Benutzersicherheit. Eine große Anzahl von Fächern (fünf), die nach Ihren Wünschen und Bedürfnissen modifiziert werden können, ermöglicht es Ihnen, das notwendige Zubehör und die Ausrüstung für eine maximal komfortable Zeit auf dem Wasser zu organisieren.',
        bodo540text2: 'Die Tiefe des Bootes (0,65 m) ohne Geländer bietet das notwendige Sicherheitsgefühl für Sie und Ihre Begleiter, und die Länge des Bootes (5,65 m) wird sicherlich an windigen Tagen helfen, wenn Wellen auf dem Wasser sind. Es ist auch wichtig zu erwähnen, dass das Boot 12 separate Luftkammern hat, was es fast unsinkbar macht.',
        certificate: 'Alle genannten Eigenschaften werden durch den offiziellen Testbericht des deutschen Unternehmens DNV bestätigt, wodurch die BODO 540 mit einem CE-Zertifikat zur Konformität mit europäischen Standards zertifiziert ist.',
        specs: 'Abmessungen und technische Dokumentation',
        length: 'Länge',
        width: 'Breite',
        depth: 'Tiefe',
        weight: 'Gewicht',
        maxPower: 'Max. Motorleistung',
        maxLoad: 'Max. Belastbarkeit',
        passengers: 'Anzahl der Passagiere',
        certified: 'CE-zertifiziert - DNV'
      },
      gallery: { title: 'Galerie', subtitle: 'BODO 540' },
      welcome: {
        text: 'Wir freuen uns, dass Sie unsere Website besucht haben! Es wird uns eine Freude sein, wenn Sie uns telefonisch, per E-Mail oder über soziale Medien kontaktieren, um Ihnen bei der Auswahl des richtigen Bootes für Ihre Wasserabenteuer und Ihr Vergnügen zu helfen.',
        signature: 'Mit freundlichen Grüßen,',
        company: 'Bodo Boats'
      },
      contact: {
        title: 'Kontakt',
        email: 'E-Mail',
        phone: 'Telefon',
        web: 'Webseite',
        social: 'Folgen Sie uns in sozialen Medien',
        cta: 'Anfrage senden'
      },
      footer: { tagline: 'Ihr zuverlässiger Partner auf dem Wasser', links: 'Links', rights: 'Alle Rechte vorbehalten.' }
    }
  };

  const t = translations[language];

  // Swipe handler functions
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - next image
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }
    if (isRightSwipe) {
      // Swipe right - previous image
      setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  // Auto-play gallery carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Auto-play hero slider every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Header with Mobile Menu */}
      <header className="fixed top-0 left-0 right-0 bg-gray-50/95 backdrop-blur-sm shadow-md z-50 border-b border-gray-200">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" className="block">
                <Image
                  src="/assets/hero/bodo-logo-green-glow.png"
                  alt="Bodo Boats Logo"
                  width={400}
                  height={132}
                  className="h-11 lg:h-16 w-auto object-contain"
                  priority
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-6">
              <li><a href="#home" className="text-gray-700 hover:text-green-500 hover:scale-105 transition-all duration-200 font-medium">{t.nav.home}</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-green-500 hover:scale-105 transition-all duration-200 font-medium">{t.nav.about}</a></li>
              <li><a href="#gallery" className="text-gray-700 hover:text-green-500 hover:scale-105 transition-all duration-200 font-medium">{t.nav.gallery}</a></li>
              <li><a href="#contact" className="bg-green-500/90 text-white px-6 py-2 rounded-full hover:bg-green-600 hover:scale-105 hover:shadow-lg transition-all duration-200 font-semibold shadow-md">{t.nav.contact}</a></li>

              {/* Language Switcher - Desktop */}
              <li className="flex gap-1 border-l border-gray-300 pl-4">
                <button onClick={() => setLanguage('sr')} className={`px-2 py-1 text-xs font-semibold rounded transition ${language === 'sr' ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>SR</button>
                <button onClick={() => setLanguage('en')} className={`px-2 py-1 text-xs font-semibold rounded transition ${language === 'en' ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>EN</button>
                <button onClick={() => setLanguage('ru')} className={`px-2 py-1 text-xs font-semibold rounded transition ${language === 'ru' ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>RU</button>
                <button onClick={() => setLanguage('de')} className={`px-2 py-1 text-xs font-semibold rounded transition ${language === 'de' ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>DE</button>
              </li>
            </ul>

            {/* Mobile - Language Switcher + Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              {/* Language Switcher - Mobile Compact */}
              <div className="flex gap-1">
                <button onClick={() => setLanguage('sr')} className={`px-2 py-1 text-xs font-semibold rounded transition ${language === 'sr' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'}`}>SR</button>
                <button onClick={() => setLanguage('en')} className={`px-2 py-1 text-xs font-semibold rounded transition ${language === 'en' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'}`}>EN</button>
                <button onClick={() => setLanguage('ru')} className={`px-2 py-1 text-xs font-semibold rounded transition ${language === 'ru' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'}`}>RU</button>
                <button onClick={() => setLanguage('de')} className={`px-2 py-1 text-xs font-semibold rounded transition ${language === 'de' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'}`}>DE</button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <ul className="space-y-4">
                <li><a href="#home" className="block text-gray-700 hover:text-green-500 transition font-medium">{t.nav.home}</a></li>
                <li><a href="#about" className="block text-gray-700 hover:text-green-500 transition font-medium">{t.nav.about}</a></li>
                <li><a href="#gallery" className="block text-gray-700 hover:text-green-500 transition font-medium">{t.nav.gallery}</a></li>
                <li><a href="#contact" className="block bg-green-500/90 text-white px-6 py-2 rounded-full hover:bg-green-600 transition text-center font-semibold">{t.nav.contact}</a></li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section with Image Slider */}
      <section id="home" className="relative h-[70vh] overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((num, index) => (
            <div
              key={num}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHeroImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={`/assets/hero/hero-${num}.jpg`}
                alt={`BODO Boats Workshop ${num}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Professional Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-end pt-14 lg:pt-16 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              {/* Logo closer to text */}
              <div className="mb-6">
                <Image
                  src="/assets/hero/bodo-logo-green-glow.png"
                  alt="Bodo Boats Logo"
                  width={400}
                  height={133}
                  className="h-24 sm:h-32 lg:h-40 w-auto object-contain mx-auto"
                  priority
                />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                {t.hero.tagline}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-100 mb-4 leading-relaxed max-w-lg mx-auto drop-shadow-md">
                {t.hero.subtitle}
              </p>

              {/* Slider Indicators */}
              <div className="flex justify-center gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHeroImage(index)}
                    className={`transition-all duration-300 ${
                      index === currentHeroImage
                        ? 'w-8 h-2 bg-green-500'
                        : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                    } rounded-full`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-green-500/80 mx-auto mb-8"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                {t.about.text1}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                {t.about.text2}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                {t.about.text3}
              </p>
            </div>

            {/* BODO 540 Section */}
            <div className="bg-gradient-to-br from-gray-50 to-green-50/20 rounded-2xl p-8 sm:p-12 mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">BODO 540</h3>

              <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                {t.about.bodo540text1}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                {t.about.bodo540text2}
              </p>

              <div className="bg-white/80 rounded-xl p-6 border-l-4 border-green-500">
                <p className="text-gray-700 leading-relaxed text-justify">
                  {t.about.certificate}
                </p>
              </div>
            </div>

              {/* Technical Specifications */}
              <div className="bg-gray-900 text-white rounded-xl p-5 sm:p-7">
                <h3 className="text-lg sm:text-xl font-bold mb-5 text-center">
                  {t.about.specs}
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  <div className="text-center">
                    <div className="text-green-400 text-xs uppercase tracking-wide mb-1">{t.about.length}</div>
                    <div className="text-xl font-bold">5,65m</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 text-xs uppercase tracking-wide mb-1">{t.about.width}</div>
                    <div className="text-xl font-bold">1,56m</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 text-xs uppercase tracking-wide mb-1">{t.about.depth}</div>
                    <div className="text-xl font-bold">0,65m</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 text-xs uppercase tracking-wide mb-1">{t.about.weight}</div>
                    <div className="text-xl font-bold">230kg</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 text-xs uppercase tracking-wide mb-1">{t.about.maxPower}</div>
                    <div className="text-xl font-bold">50ks</div>
                    <div className="text-gray-400 text-xs">(37kw)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 text-xs uppercase tracking-wide mb-1">{t.about.maxLoad}</div>
                    <div className="text-xl font-bold">550kg</div>
                  </div>
                  <div className="text-center sm:col-span-2 lg:col-span-3">
                    <div className="text-green-400 text-xs uppercase tracking-wide mb-1">{t.about.passengers}</div>
                    <div className="text-xl font-bold">6</div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                  <div className="inline-flex items-center gap-2 bg-green-500/20 px-6 py-3 rounded-full">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-400 font-semibold">{t.about.certified}</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Carousel */}
      <section id="gallery" className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t.gallery.title}
            </h2>
            <div className="w-20 h-1 bg-green-500/80 mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              {t.gallery.subtitle}
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            {/* Main Image Display */}
            <div
              className="relative mb-2 group"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative w-full rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={`/assets/gallery/bodo540/gallery-540-${galleryImages[currentImageIndex]}.png`}
                  alt={`BODO 540 - Slika ${galleryImages[currentImageIndex]}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto cursor-pointer"
                  priority={currentImageIndex === 0}
                  onClick={() => setIsLightboxOpen(true)}
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-gray-900/40 hover:bg-gray-900/60 text-white p-1 rounded transition opacity-0 group-hover:opacity-100"
                aria-label="Prethodna slika"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-gray-900/40 hover:bg-gray-900/60 text-white p-1 rounded transition opacity-0 group-hover:opacity-100"
                aria-label="Sledeća slika"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="relative">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-1 pb-2">
                  {galleryImages.map((num, index) => (
                    <button
                      key={num}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded overflow-hidden transition-all ${
                        index === currentImageIndex
                          ? 'ring-2 ring-green-500 scale-105'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={`/assets/gallery/bodo540/gallery-540-${num}.png`}
                        alt={`Thumbnail ${num}`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/assets/gallery/bodo540/gallery-540-${galleryImages[currentImageIndex]}.png`}
                alt={`BODO 540 - Slika ${galleryImages[currentImageIndex]}`}
                fill
                className="object-contain rounded-2xl"
                sizes="100vw"
              />

              {/* Lightbox Navigation Arrows - Hidden on mobile, visible on desktop */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
                }}
                className="hidden sm:flex absolute left-4 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition items-center justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
                }}
                className="hidden sm:flex absolute right-4 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition items-center justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Close Button - Bottom Right */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
              className="mt-4 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition shadow-lg flex items-center gap-2 font-semibold"
              aria-label="Zatvori"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Zatvori</span>
            </button>
          </div>
        )}
      </section>

      {/* Welcome Message Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-green-50/20 rounded-2xl p-8 sm:p-10 shadow-lg border border-green-50">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center mb-6">
                {t.welcome.text}
              </p>
              <div className="text-right">
                <p className="text-base sm:text-lg text-gray-700 italic">{t.welcome.signature}</p>
                <p className="text-lg sm:text-xl font-semibold text-green-500">{t.welcome.company}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <div className="w-20 h-1 bg-green-500/80 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">

            {/* Contact Info and Map */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t.contact.title}</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">{t.contact.email}</p>
                      <a href="mailto:bodoboats@gmail.com" className="text-green-500 hover:text-green-600 transition">bodoboats@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">{t.contact.phone}</p>
                      <a href="tel:+381638087748" className="text-green-500 hover:text-green-600 transition">+381 63 8087748</a><br/>
                      <a href="tel:+381691548685" className="text-green-500 hover:text-green-600 transition">+381 69 1548685</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">{t.contact.web}</p>
                      <a href="https://www.bodoboats.com" className="text-green-500 hover:text-green-600 transition">www.bodoboats.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-4 border-t border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">{t.contact.social}</p>
                      <div className="flex gap-3">
                        <a href="https://www.facebook.com/profile.php?id=100076453789362" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition text-white">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/bodo_boats" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition text-white">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-2xl p-2 shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.428536723159!2d19.9751931!3d45.1784208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b030046befad1%3A0x1e00bcc5b2498bae!2sBodo%20Boats!5e0!3m2!1sen!2srs!4v1760814619874!5m2!1sen!2srs"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="tel:+381638087748"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-500 border-2 border-green-500 px-10 py-4 rounded-full hover:bg-green-50 hover:scale-105 transition-all duration-200 font-semibold shadow-lg text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {language === 'sr' ? 'Pozovite nas' : language === 'en' ? 'Call us' : language === 'ru' ? 'Позвоните нам' : 'Rufen Sie uns an'}
              </a>
              <a
                href="mailto:bodoboats@gmail.com?subject=Zanima%20me%20Bodo%20%C4%8Damac"
                className="inline-flex items-center justify-center gap-2 bg-green-500/90 text-white px-10 py-4 rounded-full hover:bg-green-600 hover:scale-105 transition-all duration-200 font-semibold shadow-lg text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.contact.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <Image
                src="/assets/hero/bodo-logo-green-glow.png"
                alt="Bodo Boats Logo"
                width={150}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm sm:text-base">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">{t.footer.links}</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#home" className="hover:text-green-400 transition">{t.nav.home}</a></li>
                <li><a href="#about" className="hover:text-green-400 transition">{t.nav.about}</a></li>
                <li><a href="#gallery" className="hover:text-green-400 transition">{t.nav.gallery}</a></li>
                <li><a href="#contact" className="hover:text-green-400 transition">{t.nav.contact}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">{t.contact.title}</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="mailto:bodoboats@gmail.com" className="hover:text-green-400 transition">bodoboats@gmail.com</a></li>
                <li><a href="tel:+381638087748" className="hover:text-green-400 transition">+381 63 8087748</a></li>
                <li><a href="tel:+381691548685" className="hover:text-green-400 transition">+381 69 1548685</a></li>
                <li><a href="https://www.bodoboats.com" className="hover:text-green-400 transition">www.bodoboats.com</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">{t.contact.social}</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=100076453789362" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500/80 transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/bodo_boats" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500/80 transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Bodo Boats. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
