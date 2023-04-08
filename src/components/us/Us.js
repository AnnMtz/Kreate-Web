import React from "react";
import styles from "./us.module.css";
import company from 'assets/img/empresa.jpg';
import values from 'assets/img/valores.jpg';
import mision from 'assets/img/mision.jpg';
import vision from 'assets/img/mision_vision_valores.jpg';

const Us = () => {
    return (
        <div className={styles['container-fluid']}>
            <div className={styles['about-img']}>
                <div className={styles['img-container']}>
                    <img src={company} id={styles.company} alt="company logo"/>
                </div>
                <h1>NUESTRA EMPRESA</h1>
                <h3>La única que se preocupa por ti</h3>
            </div>
            <div className={styles.rows}>
                <div className={styles.columns}>
                    <div className={styles.card}>
                        <img src={values}  id={styles['values-img']} alt="values-img" />
                        <div className={styles['card-body']}>
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
                            <h5 className={styles['card-title']}>Vision</h5>
                            <p className={styles['card-text']}>Nuestra prioridad es que logres tus objetivos, haciendo que tu empresa o negocio sea visual dentro de internet y las redes sociales, para así maximisar tus ganancias</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Us;