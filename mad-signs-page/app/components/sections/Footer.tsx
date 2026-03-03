import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        
        <div className={style.col}>
          <h3>MadSigns</h3>
          <p>
            Especialistas na manufatura de Portas ACM e projetos de
            comunicação visual personalizados.
          </p>
        </div>

        <div className={style.col}>
          <h4>Navegação</h4>
          <a href="/">Home</a>
          <a href="/sobre">Sobre Nós</a>
          <a href="/trabalhos">Nossos Trabalhos</a>
          <a href="/portfolio">Portfólio</a>
          <a href="/contato">Fale Conosco</a>
        </div>

        <div className={style.col}>
          <h4>Contato</h4>
          <p>São José dos Campos - SP</p>
          <p>(12) 0000-0000</p>
          <p>contato@madsigns.com.br</p>
        </div>

      </div>

      <div className={style.bottom}>
        © {new Date().getFullYear()} MadSigns. Todos os direitos reservados.
      </div>
    </footer>
  );
}