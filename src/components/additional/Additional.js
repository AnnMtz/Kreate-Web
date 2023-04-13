import React from "react";
import styles from './additional.module.css';
import diseño from 'assets/img/diseñoweb.jpg';

const Additional = () => {

    return (
        <div className={styles['container-fluid']}>
            <div className={styles.about}>
                <div className={styles.img}>
                    <img src={diseño} id={styles.diseño} alt="compañia" />
                </div>
                <h1>FORMA DE TRABAJO</h1>
            </div>
           <blockquote>Nuestra forma de trabajo la distribuimos en 5 pasos para tu mayor tranquilidad, facilidad, beneficio y confianza.</blockquote>
           <div className={styles['additional-rows']}>
            <div className={styles['additional-columns']} id={styles['dev-column']}>
                <h2 className={styles['card-title']}>Desarrollo</h2>
                <div className={styles['card-add']}>
                    <h5 className={styles['card-text']}>1. Platicaremos a fondo de tus requerimientos y necesidades.</h5>
                    <h5 className={styles['card-text']}>2. Basado en lo que necesites, te ofreceremos la mejor solución y cotización.</h5>
                    <h5 className={styles['card-text']}>3. Para iniciar, solo solicitaremos el 50% de anticipo.</h5>
                    <h5 className={styles['card-text']}>4. Haremos el diseño de un prototipo, una vez terminado y que sea de tu agrado comenzaremos con el desarrollo.</h5>
                    <h5 className={styles['card-text']}>5. Finalizado el trabajo, se hace la entrega y liquidación a contra entrega.</h5>
                </div>
            </div>
            <div className={styles['additional-columns']}>
                <h2 className={styles['card-title']}>Marketing Digital</h2>
                <div className={styles['card-add']}>
                    <h5 className={styles['card-text']}>Te podemos incluir el Marketing Digital en Redes Sociales como:</h5>
                    <ul>
                        <li> - Google</li>
                        <li> - Facebook</li>
                        <li> - Twitter</li>
                        <li> - Instagram</li>
                    </ul>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Additional;