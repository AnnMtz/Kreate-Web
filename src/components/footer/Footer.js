import React from "react";
import { Link } from "react-router-dom";
import logo from 'assets/img/logo.png';
import face from 'assets/img/face.png';
import twitter from 'assets/img/twitter.png';
import instagram from 'assets/img/instagram.png';
import styles from './footer.module.css';

const Footer = () => {

    <Link to="/"id="nav-a" href="#">
    <img src={logo} className="logo" alt="logo"/>
  </Link>
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles['logo-container']}>
                    <Link to="/" id={styles.nav} href='logo'>
                        <img src={logo} className={styles.logo} alt="logo" />
                    </Link>
                    <p className={styles.paragraph}>La mejor solución</p>
                </div>
                <div className={styles['card-col']} id={styles['contact-card']}>
                    <p id={styles['contact-info']} className={styles.paragraph}>Información de contacto</p>
                    <span className={styles['contact-data']}>Telefóno: 55 8686 0053</span>
                    <span className={styles['contact-data']}>Email: contacto.kreateweb@gmail.com</span>
                </div>
                <div className={styles['card-rows']}>
                    <button id={styles.btn} type="submit">
                        <Link to="/contact" id={styles['btn-link']}>Contacto</Link>
                    </button>
                    <div className={styles['social-media']}>
                        <img src={face} alt="facebook" id={styles.face} />
                        <img src={twitter} alt="facebook" className={styles.redes} />
                        <img src={instagram} alt="facebook" className={styles.redes} />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;