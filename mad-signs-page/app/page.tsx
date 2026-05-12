"use client";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import style from "./Page.module.css";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Settings,
  Truck,
  Target,
  Sparkles,
  Building2,
  Star
} from "lucide-react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Home() {
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
    "/images/portaACM1.jpeg",
    "/images/portaACM2.jpeg",
    "/images/portaACM3.jpeg",
    "/images/portaACM4.jpeg",
    "/images/portaACM5.jpeg",
    "/images/portaACM6.jpeg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  const openModal = (img: string) => {
    setSelectedImage(img);
    setIsModalOpen(true);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const newZoom = zoom - e.deltaY * 0.001;
    setZoom(Math.min(Math.max(1, newZoom), 4));
  };

  const [zoomed, setZoomed] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("center center");

  const handleImageClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (!zoomed) {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();

      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      setTransformOrigin(`${x}% ${y}%`);
    }

    setZoomed(!zoomed);
  };

  // drag imagem
  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setPosition((prev) => ({
      x: prev.x + e.movementX,
      y: prev.y + e.movementY,
    }));
  };

  return (
    <div>
      <Header />

      <div id="home" className={style.radial_div}>
        <div className={style.title_div}>
          <h1>MadSigns</h1>
          <h2>
            Manufatura de Portas <br />
            ACM
          </h2>
          <button
            className={style.button_veja}
            onClick={() => {
              const section = document.getElementById("vantagens");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Nossos Produtos
          </button>
        </div>
        <div className={style.img_div}>
          <img src="/images/portaACM5.jpeg" className={style.img1} alt="" />
          <img src="/images/portaACM4.jpeg" className={style.img2} alt="" />
        </div>
      </div>

      <div id="vantagens" className={style.vantagens_section}>
        <h2>Por que escolher as Portas ACM MadSigns?</h2>

        <div className={style.vantagens_grid}>
          <div className={style.vantagem_item}>
            <Settings size={32} />
            <p>Portas Sob Medida</p>
          </div>

          <div className={style.vantagem_item}>
            <Truck size={32} />
            <p>Opções de cores</p>
          </div>

          <div className={style.vantagem_item}>
            <Target size={32} />
            <p>Altíssima Qualidade</p>
          </div>

          <div className={style.vantagem_item}>
            <Sparkles size={32} />
            <p>Fácil Limpeza</p>
          </div>

          <div className={style.vantagem_item}>
            <Building2 size={32} />
            <p>Até 30% mais Leve</p>
          </div>

          <div className={style.vantagem_item}>
            <Star size={32} />
            <p>Entrega rápida</p>
          </div>
        </div>
      </div>

      <div id="produtos" className={style.about}>
        <h1>Nossos Produtos:</h1>

        <div className={style.portas_carousel}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            initialSlide={2}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            navigation
            loopAdditionalSlides={images.length}
            coverflowEffect={{
              rotate: 8,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
                coverflowEffect: {
                  rotate: 8,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                }
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
            }}
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className={style.slide_item} onClick={() => openModal(img)}>
                  <img
                    src={img}
                    alt={`Porta ACM ${idx + 1}`}
                    style={{ cursor: "pointer" }}
                  />
                  <div className={style.slide_overlay}>
                    <span className={style.slide_label}>Porta ACM</span>
                    <p className={style.slide_title}>Ver imagem</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={style.orcamentoButton}
            onClick={() => {
              window.location.href = "/portfolio";
            }}
          >
            Veja nosso portfólio
          </button>
        </div>

        {isModalOpen && selectedImage && (
          <div className={style.modal_overlay} onClick={closeModal}>
            <div
              className={style.modal_content}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={style.zoom_controls}>
                <button onClick={() => setZoom((z) => Math.min(z + 0.2, 4))}>
                  +
                </button>
                <button onClick={() => setZoom((z) => Math.max(z - 0.2, 1))}>
                  −
                </button>
              </div>

              <img
                src={selectedImage}
                alt="Imagem ampliada"
                onClick={handleImageClick}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  transition: "transform 0.4s ease",
                  transform: zoomed ? "scale(2.5)" : "scale(1)",
                  transformOrigin: transformOrigin,
                  cursor: zoomed ? "zoom-out" : "zoom-in",
                }}
              />
            </div>
          </div>
        )}

        <div id="sobre" className={style.sobre_container}>
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
            <img src="/images/fachada1.jpeg" alt="Estrutura da empresa" />
          </div>
        </div>
      </div>

      <Footer ></Footer>
    </div>
  );
}