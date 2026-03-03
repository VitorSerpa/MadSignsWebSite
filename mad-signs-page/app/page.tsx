"use client";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import style from "./Page.module.css";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const options = [
    {
      title: "Portas ACM",
      img_path: "/images/portasLogo.jpg",
      link: "/portas",
    },
    {
      title: "Portas ACM",
      img_path: "/images/portasLogo.jpg",
      link: "/portas",
    },
    {
      title: "Portas ACM",
      img_path: "/images/portasLogo.jpg",
      link: "/portas",
    },
    {
      title: "Portas ACM",
      img_path: "/images/portasLogo.jpg",
      link: "/portas",
    },
    {
      title: "Portas ACM",
      img_path: "/images/portasLogo.jpg",
      link: "/portas",
    },
    {
      title: "Portas ACM",
      img_path: "/images/portasLogo.jpg",
      link: "/portas",
    },
  ];

  return (
    <div>
      <Header></Header>
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
          <img src="images/portaACM5.jpeg" className={style.img1} alt="" />
          <img src="images/portaACM4.jpeg" className={style.img2} alt="" />
        </div>
      </div>
      <div className={style.about}>
        <h1>Nossos Produtos:</h1>
        <div className={style.portas_carousel}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true} // cursor de “pegar” o slide
              slidesPerView={3} // quantos slides visíveis
            spaceBetween={30} // espaço entre slides
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            speed={2000}
            coverflowEffect={{
              rotate: 8, // rotação do slide lateral
              stretch: 0, // quanto os slides se afastam lateralmente
              depth: 200, // profundidade 3D
              modifier: 1, 
              slideShadows: true, 
            }}
            navigation
          >
            <SwiperSlide>
              <img src="/images/portaACM1.jpeg" alt="Porta ACM 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/portaACM4.jpeg" alt="Porta ACM 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/portaACM5.jpeg" alt="Porta ACM 5" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/portaACM2.jpeg" alt="Porta ACM 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/portaACM3.jpeg" alt="Porta ACM 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/portaACM6.jpeg" alt="Porta ACM 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/portaACM1.jpeg" alt="Porta ACM 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/portaACM4.jpeg" alt="Porta ACM 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/portaACM5.jpeg" alt="Porta ACM 5" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/portaACM2.jpeg" alt="Porta ACM 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/portaACM3.jpeg" alt="Porta ACM 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/portaACM6.jpeg" alt="Porta ACM 3" />
            </SwiperSlide>
          </Swiper>
        </div>
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

      <Footer></Footer>
    </div>
  );
}

{
  /* <div className={style.about_text}>
          <h2>Sobre a MadSigns</h2>
          <p>
            A Mad Signs Comunicação Visual , fundada em 1999, está localizada na
            cidade de São José dos Campos/SP e conta hoje com uma grande
            estrutura para atender seus clientes: dois galpões próprios que
            somam mais de 500m², uma frota de veículos bem sinalizada, máquinas
            de impressão digital, máquinas de corte (houter), equipe de solda,
            instaladores profissionais, setor para projetos especiais e muitos
            mais. <br />
            <br /> Nosso portfólio de serviços é bastante extenso: fachadas em
            ACM, toldos, coberturas, impressões digitais, sinalização completa,
            envelopamento veicular, projetos arquitetônicos, banners e adesivos
            em geral. <br />
            <br /> Elaboramos e executamos os mais complexos projetos de
            comunicação visual nos setores automobilísticos, bancário,
            distribuição, telefonia, alimentício, atacadista, varejista,
            industrial, dentre outros. A Mad Signs Comunicação Visual está
            pronta para lhe atender, entre em contato conosco e solicite uma
            visita.
          </p>
        </div>
        
        <div className={style.img_div_about}>
          <img src="/images/empresa.jpg" alt="" />
        </div>*/
}
