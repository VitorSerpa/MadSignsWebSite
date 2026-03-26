import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contato" className={style.footer}>
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
          <a href="/trabalhos">Nossos Trabalhos</a>
          <a href="/sobre">Sobre Nós</a>
          <a href="/contato">Fale Conosco</a>
        </div>

        <div className={style.col}>
          <h4>Contato</h4>
          <p>São José dos Campos - SP</p>

          <p>
            <a href="https://wa.me/5512974103242"
              target="_blank"
              rel="noopener noreferrer">(12) 97410-3242</a>
          </p>

          <p>
            (12) 3916-6261
          </p>

          <p>
            <a href="mailto:contato@madsigns.com.br">
              contato@madsigns.com.br
            </a>
          </p>

          <p>
            <a
              
            >
            </a>
          </p>
        </div>
        <div className={style.map}>
          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=Av.%20Ouro%20Fino%201241%20Bosque%20dos%20Eucaliptos%20Sao%20Jose%20dos%20Campos%20SP&output=embed">
          </iframe>
        </div>

      </div>

      <div className={style.bottom}>
        © {new Date().getFullYear()} MadSigns. Todos os direitos reservados.
      </div>
    </footer>
  );
}