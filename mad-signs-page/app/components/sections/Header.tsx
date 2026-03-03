import style from "./Header.module.css"

export default function Header() {
    return (
        <div className={style.main_div_header}>
            <div>
                <img src="/images/logo.png" alt="MadSignsLogo" />
            </div>
            <div className={style.header_links}>
                <a href="/">Home</a>
                <a href="">Sobre nós</a>
                <a href="">Nossos Trabalhos</a>
            </div>
        </div>  
    );
}
