import { useEffect, useRef } from "react";
import styles from "./us.module.css";
import company from 'assets/img/company.svg';
import values from 'assets/img/valores1.png';
import mision from 'assets/img/mision.svg';
import vision from 'assets/img/vison.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)


const Us = () => {
    const ref = useRef(null)

    useEffect(() =>{
        const element = ref.current;
        gsap.fromTo(element, {rotateX: 90}, {rotateX: 0, duration: 2, scrollTrigger: {
            trigger: element
        }})
    }, [])
    return (
        <div className={styles['container-fluid']}>
            <div className={styles['about-img']}>
                <div className={styles['img-container']}>
                    <img src={company} id={styles.company} alt="company logo"/>
                </div>
                <h3 id={styles.subtitle} >Mejoramos tu imagen</h3>
            </div>
            <h1 id={styles.title}>NUESTRA EMPRESA</h1>
            <div className={styles.rows} ref={ref}>
                <div className={styles.columns}>
                    <div className={styles.card}>
                        <img src={values}  id={styles['values-img']} alt="values-img" />
                        <div id={styles.missionCard} >
                            <h5 className={styles['card-title']}>Valores</h5>
                            <p className={styles['card-text']}>
                                <ul className={styles['values-imb']}>
                                    <li>Honestidad</li>
                                    <li>Compromiso</li>
                                    <li>Respeto</li>
                                    <li>Confiabilidad</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.card}>
                        <img src={mision} id="mision-img" className={styles['card-img']} alt="mision"/>
                        <div className={styles['card-body']}>
                            <h5 className={styles['card-title']}>Misión</h5>
                            <p className={styles['card-text']}>Darte un excelente producto que te ayude a cumplir todas tus metas, brindandote el mejor servicio y atención.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.colums}>
                    <div className={styles.card}>
                        <img src={vision} id="vision-img" className={styles['card-img']} alt="Vision" />
                        <div className={styles['card-body']}>
                            <h5 className={styles['card-title']}>Visión</h5>
                            <p className={styles['card-text']}>Nuestra prioridad es que logres tus objetivos, haciendo que tu empresa o negocio sea visual dentro de internet y redes sociales, para así maximizar tus ganancias</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Us;