import style from "./Header.module.css"

export default function Header() {
    return (
        <header className={style.header_bar}>
            <div className={style.main_div_header}>
                <div>
                    <img src="/images/logo.png" alt="MadSignsLogo" />
                </div>
                <div className={style.header_links}>
                    <a href="/#home">Home</a>
                    <a href="/#produtos">Nossos Produtos</a>
                    <a href="/portfolio">Portfólio</a>
                    <a href="/#sobre">Sobre nós</a>
                    <a href="/#contato">Contato</a>
                </div>
            </div>
        </header>
    );
}