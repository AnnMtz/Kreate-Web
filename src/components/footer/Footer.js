import React from "react";
import { Link } from "react-router-dom";
import logo from 'assets/img/logo.png';
import face from 'assets/img/icon-facebook.svg';
import instagram from 'assets/img/icon-instagram.svg';
import twitter from 'assets/img/icon-twitter.svg';
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
                    <p id={styles['contact-info']} >Información de contacto</p>
                    <span className={styles['contact-data']}>Telefóno: 55 8686 0053</span>
                    <span className={styles['contact-data']}>Email: contacto.kreateweb@gmail.com</span>
                </div>
                <div className={styles['card-rows']}>
                    <button id={styles.btn} type="submit">
                        <Link to="/contact" id={styles['btn-link']}>Contacto</Link>
                    </button>
                    <div className={styles['social-media']}>
                        <Link to="https://www.facebook.com/profile.php?id=61550935143014" target="_blank" href="facebook">
                             <img src={face} alt="facebook" id={styles.face} />
                        </Link>
                        <Link to="https://twitter.com/KreateW3b" target="_blank" href="twitter">
                            <img src={twitter} alt="twitter" className={styles.redes} />
                        </Link>
                        <Link to="https://www.instagram.com/_kreateweb_/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" href="instagram">
                           <img src={instagram} alt="instagram" className={styles.redes} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;