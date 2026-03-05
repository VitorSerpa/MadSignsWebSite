"use client";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import style from "./Page.module.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imgSrc: string) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  const images = [
    "/images/portaACM1.jpeg",
    "/images/portaACM2.jpeg",
    "/images/portaACM3.jpeg",
    "/images/portaACM4.jpeg",
    "/images/portaACM5.jpeg",
    "/images/portaACM6.jpeg",
    "/images/portaACM1.jpeg",
    "/images/portaACM2.jpeg",
    "/images/portaACM3.jpeg",
    "/images/portaACM4.jpeg",
    "/images/portaACM5.jpeg",
    "/images/portaACM6.jpeg",
  ];

  return (
    <div>
      <Header />
      <div className={style.radial_div}>
        <div className={style.title_div}>
          <h1>MadSigns</h1>
          <h2>
            Manufatura de Portas <br />
            ACM
          </h2>
          <button className={style.button_veja}>Veja mais</button>
        </div>
        <div className={style.img_div}>
          <img src="/images/portaACM5.jpeg" className={style.img1} alt="" />
          <img src="/images/portaACM4.jpeg" className={style.img2} alt="" />
        </div>
      </div>

      <div className={style.about}>
        <h1>Nossos Produtos:</h1>
        <div className={style.portas_carousel}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            coverflowEffect={{
              rotate: 8,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Porta ACM ${idx + 1}`}
                  onClick={() => openModal(img)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className={style.orcamentoButton}>Solicite um orçamento</button>
        </div>

        {modalOpen && (
          <div className={style.modal_overlay} onClick={closeModal}>
            <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
              <img src={modalImage} alt="Imagem ampliada" />
              <button className={style.modal_close} onClick={closeModal}>
                ×
              </button>
            </div>
          </div>
        )}

        <div className={style.sobre_container}>
          <div className={style.sobre_texto}>
            <h2>Sobre a MadSigns</h2>
            <p>
              A MadSigns Comunicação Visual, fundada em 1999, está localizada em
              São José dos Campos/SP e conta com uma ampla estrutura para
              atender seus clientes.
            </p>

            <p>
              Possuímos galpões próprios, frota de veículos sinalizada, máquinas
              de impressão digital, equipamentos de corte CNC, equipe de solda,
              instaladores profissionais e setor especializado em projetos
              personalizados.
            </p>

            <p>
              Somos especialistas na fabricação de Portas ACM, fachadas,
              coberturas, comunicação visual completa e projetos sob medida.
            </p>
          </div>

          <div className={style.sobre_imagem}>
            <img
              src="/images/empresa.jpg"
              alt="Estrutura da empresa MadSigns"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}