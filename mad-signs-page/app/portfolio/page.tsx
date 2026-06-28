"use client";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import style from "./Portfolio.module.css";
import { useState, useEffect, useRef } from "react";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Play } from "lucide-react";


const portfolioItems = [
    { id: 15, type: "image", src: "/images/portaACM4.jpeg", category: "Residencial", title: "Porta Residencial Premium", description: "Acabamento impecável" },
    { id: 16, type: "image", src: "/images/portaACM5.jpeg", category: "Comercial", title: "Porta ACM Escritório", description: "Elegância corporativa" },
    { id: 7, type: "image", src: "/images/projeto-porta-cobre.jpeg", category: "Residencial", title: "Porta Cobre Moderna", description: "Acabamento cobre acetinado" },
    { id: 1, type: "image", src: "/images/projeto-porta-pivotante.jpeg", category: "Residencial", title: "Porta Pivotante Premium", description: "Porta pivotante preta com fechadura digital e laterais de vidro" },
    { id: 19, type: "image", src: "/images/portaACM.jpeg", category: "Residencial", title: "Porta Preta com Vidros", description: "Entrada em ACM preto com laterais de vidro e fechadura digital" },
    { id: 2, type: "video", src: "/images/video-porta-ripada-preta.mp4", poster: "/images/video-porta-ripada-preta-poster.jpg", category: "Fachadas", title: "Fachada Ripada Preta", description: "Painel ripado em ACM preto" },
    { id: 14, type: "image", src: "/images/portaACM1.jpeg", category: "Comercial", title: "Porta ACM Comercial", description: "Acabamento premium em ACM" },
    { id: 4, type: "video", src: "/images/video-porta-branca.mp4", poster: "/images/video-porta-branca-poster.jpg", category: "Residencial", title: "Porta Branca Moderna", description: "Linhas limpas com puxador vertical" },
    { id    : 6, type: "video", src: "/images/video-porta-madeira-fechadura.mp4", poster: "/images/video-porta-madeira-fechadura-poster.jpg", category: "Residencial", title: "Porta Ripada Amadeirada", description: "Ripado madeira com fechadura digital" },
    { id: 8, type: "video", src: "/images/video-fechadura-digital.mp4", poster: "/images/video-fechadura-digital-poster.jpg", category: "Comercial", title: "Fechadura Digital", description: "Tecnologia e segurança integradas" },
    {    id: 5, type: "image", src: "/images/projeto-porta-preta-dourada.jpeg", category: "Residencial", title: "Porta Preta Clássica", description: "Acabamento preto com puxador dourado" },
    { id: 9, type: "image", src: "/images/projeto-porta-marrom-vidro.jpeg", category: "Residencial", title: "Porta com Detalhe em Vidro", description: "Design moderno com vidro lateral" },
    { id: 10, type: "video", src: "/images/video-porta-ripada-madeira.mp4", poster: "/images/video-porta-ripada-madeira-poster.jpg", category: "Residencial", title: "Porta Ripada Madeira", description: "Acabamento amadeirado de alto padrão" },
    {id: 3, type: "image", src: "/images/projeto-porta-madeira.jpeg", category: "Residencial", title: "Porta Amadeirada", description: "Padrão madeira com fechadura digital" },
    { id: 11, type: "video", src: "/images/video-detalhe-madeira.mp4", poster: "/images/video-detalhe-madeira-poster.jpg", category: "Residencial", title: "Detalhe do Acabamento", description: "Puxador embutido e textura madeira" },
    { id: 17, type: "image", src: "/images/portaACM6.jpeg", category: "Residencial", title: "Porta ACM Casa", description: "Leveza e modernidade" },
    { id: 18, type: "video", src: "/images/portaACMVideo.mp4", poster: "/images/portaACM3.jpeg", category: "Comercial", title: "Instalação ACM", description: "Processo de instalação" },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const [transformOrigin, setTransformOrigin] = useState("center center");
    const [visible, setVisible] = useState<number[]>([]);

    const filtered = portfolioItems.filter(
        (item) => activeCategory === "Todos" || item.category === activeCategory
    );

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
        setZoomed(false);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setZoomed(false);
        document.body.style.overflow = "";
    };

    const goPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
        setZoomed(false);
    };

    const goNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxIndex((i) => (i + 1) % filtered.length);
        setZoomed(false);
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
            if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % filtered.length);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxOpen, filtered.length]);

    // Staggered reveal on category change
    useEffect(() => {
        setVisible([]);
        filtered.forEach((item, i) => {
            setTimeout(() => {
                setVisible((prev) => [...prev, item.id]);
            }, i * 60);
        });
    }, [activeCategory]);

    const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
        if (!zoomed) {
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            setTransformOrigin(`${x}% ${y}%`);
        }
        setZoomed(!zoomed);
    };

    const currentItem = filtered[lightboxIndex];

    return (
        <div className={style.page}>
            <Header />

            {/* Hero */}
            <section className={style.hero}>
                <div className={style.hero_content}>
                    <span className={style.hero_label}>MadSigns</span>
                    <h1>Nosso Portfólio</h1>
                    <p>Explore nossos projetos em Portas ACM, fachadas e comunicação visual</p>
                </div>
                <div className={style.hero_line} />
            </section>

            {/* Filter bar */}
            <section className={style.filter_section}>
                
                <span className={style.count}>{filtered.length} projetos</span>
            </section>

            {/* Masonry grid */}
            <section className={style.grid_section}>
                <div className={style.grid}>
                    {filtered.map((item, index) => (
                        <div
                            key={item.id}
                            className={`${style.grid_item} ${visible.includes(item.id) ? style.grid_item_visible : ""}`}
                            onClick={() => openLightbox(index)}
                        >
                            {item.type === "video" ? (
                                <div className={style.video_thumb}>
                                    <img src={item.poster} alt={item.title} />
                                    <div className={style.play_overlay}>
                                        <Play size={36} fill="white" color="white" />
                                    </div>
                                </div>
                            ) : (
                                <img src={item.src} alt={item.title} />
                            )}
                            <div className={style.item_overlay}>
                                <span className={style.item_category}>{item.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className={style.cta_section}>
                <h2>Gostou do que viu?</h2>
                <p>Entre em contato e solicite seu orçamento personalizado.</p>
                <button
                    className={style.cta_btn}
                    onClick={() => {
                        window.location.href = "/#contato";
                    }}
                >
                    Solicitar Orçamento
                </button>
            </section>

            {/* Lightbox */}
            {lightboxOpen && currentItem && (
                <div className={style.lightbox_overlay} onClick={closeLightbox}>
                    <button className={style.lb_close} onClick={closeLightbox}>
                        <X size={24} />
                    </button>

                    <button className={style.lb_prev} onClick={goPrev}>
                        <ChevronLeft size={28} />
                    </button>

                    <div className={style.lb_content} onClick={(e) => e.stopPropagation()}>
                        {currentItem.type === "video" ? (
                            <video
                                src={currentItem.src}
                                poster={currentItem.poster}
                                controls
                                autoPlay
                                className={style.lb_video}
                            />
                        ) : (
                            <img
                                src={currentItem.src}
                                alt={currentItem.title}
                                className={style.lb_image}
                                onClick={handleImageClick}
                                style={{
                                    transform: zoomed ? "scale(2.2)" : "scale(1)",
                                    transformOrigin: transformOrigin,
                                    cursor: zoomed ? "zoom-out" : "zoom-in",
                                    transition: "transform 0.35s ease",
                                }}
                            />
                        )}
                        <div className={style.lb_info}>
                            <span className={style.lb_category}>{currentItem.category}</span>
                            <span className={style.lb_counter}>
                                {lightboxIndex + 1} / {filtered.length}
                            </span>
                        </div>
                    </div>

                    <button className={style.lb_next} onClick={goNext}>
                        <ChevronRight size={28} />
                    </button>
                </div>
            )}

            <Footer />
        </div>
    );
}
