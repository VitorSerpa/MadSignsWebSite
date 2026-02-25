import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import style from "./Page.module.css";


export default function Home() {
  const options = [
    {
      title: "Nós",
      img_path: "/images/logoIcon.jpg",
      link: "",
    },
    {
      title: "Portas ACM",
      img_path: "/images/portasLogo.jpg",
      link: "/portas",
    },
    {
      title: "Vagas",
      img_path: "/images/vagasLogo.jpg",
      link: "",
    },
    {
      title: "Carros",
      img_path: "/images/carrosLogo.jpg",
      link: "",
    },
    {
      title: "Fachadas",
      img_path: "/images/fachadasLogo.jpg",
      link: "",
    },
    {
      title: "Parceiros",
      img_path: "/images/parceirosLogo.jpg",
      link: "",
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
          <img src="images/portaACM4.jpeg" className={style.img2}   alt="" />
        </div>
      </div>
        <div className={style.options_div}>
          {options.map((value, index) => (
            <a key={index} href={value.link} className={style.option_item}>
              <img
                className={style.img_option}
                src={value.img_path}
                alt={value.title}
              />
              <h3 className={style.option_title}>{value.title}</h3>
            </a>
          ))}
      </div>
      <div className={style.about}>
        <div className={style.about_text}>
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
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
