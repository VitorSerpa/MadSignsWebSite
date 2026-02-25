import style from "./Footer.module.css"

export default function Footer() {
    return (
        <div className={style.main_div_footer}>
            <div className={style.footer_links}>
                <a href="/">Home</a>
                <a href="">Sobre nós</a>
                <a href="">Nossos Trabalhos</a>
                <a href="">Portfólio</a>
                <a href="">Fale conosco</a>
            </div>
        </div>  
    );
}
