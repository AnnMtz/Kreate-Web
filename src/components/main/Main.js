import { useState, useEffect, useRef } from "react";
import styles from './main.module.css';
import Carrusel from "components/carrusel.js/Carrusel";
import desarrollo from 'assets/img/Desarrollo.jpg';
import responsive from 'assets/img/responsiveweb.jpg';
import resp from 'assets/img/responsiveweb2.jpg';
import { Link } from "react-router-dom";
import images from "exports/images";
import msg from "exports/message";
import Message from "components/Message/Message";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger)

const Main = () => {
    const ref = useRef(null);
    // const [ scrollTop, setScrollTop] = useState();

    const arrayImages = images
    const arrayMessage = msg
    
    const scrollToElement = () => {
        ref.current?.scrollIntoView({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        scrollToElement()
    //    const element = ref.current;
    //    gsap.fromTo(element, {rotateX: 90}, {rotateX: 0, duration: 5, scrollTrigger: {
    //     trigger: element
    //    }} )
    }, [])
    
    return (
        <>
            <div ref={ref}>
                <Carrusel 
                        images={arrayImages}
                        // arrayMessage={arrayMessage}
                />
            </div>
           <div id={styles.container}>
                <div className={styles['message-container']}>
                        <Message msg={arrayMessage}/>
                </div>
                 <h1 id={styles.header}>Nuestros Servicios</h1>
                 <div className={styles.mainRow}
                 >
                    <div className={styles['main-columns']}>
                        <div className={styles.card}>
                            <img src={desarrollo} alt="desarrollo"  id={styles['dev-img']} />
                            <div className={styles['card-body']}>
                                <h5 className={styles['card-title']}>Sitio Web</h5>
                                <p className={styles['card-text']}>Desarrollamos páginas, sitios o apps web para presentar tus productos y/o servicios más populares. Siempre apegandonos a tus gustos y preferencias en el diseño. Contamos con paquetes para tu mayor comodidad y beneficio.</p>
                                <Link to="/additional" id={styles.info}>Leer más</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles['main-columns']}>
                        <div className={styles.card}>
                            <img src={responsive} className={styles['card-img']} alt="responsivo" />
                            <div className={styles['card-body']}>
                                <h5 className={styles['card-title']}>Planeación bajo necesidades</h5>
                                <p className={styles['card-text']} id={styles.plan}>Nos enfocamos en las necesidades de tu negocio para que tengas la mayor satiscacción del producto que te entregamos.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles['main-columns']}>
                        <div className={styles.card}>
                            <img src={resp} className={styles['card-img']} alt="desarrollo responsivo" />
                            <div  className={styles['card-body']}>
                                <h5 className={styles['card-title']}>Responsive Web</h5>
                                <p className={styles['card-text']}>Tu página la podran ver con una excelente calidad en cualquier dispositivo ya sea celular, tablet, laptop o pantalla.</p>
                            </div>
                        </div>
                    </div>
                 </div>
           </div>
        </>
    );
}

export default Main;