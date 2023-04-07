import React from "react";
import styles from './contact.module.css';
import contact from 'assets/img/contacto.jpg';
import telephone from 'assets/img/phone-icon.jpg';
import email from 'assets/img/email-icon.jpg';

const Contact = () => {

    return (
        <div className={styles['container-fluid']}>
            <div className={styles['about-img']}>
                <img src={contact} id={styles.contact} alt="contact" />
            </div>
            <div className={styles.row}>
                <div className={styles.columns}>
                    <div className={styles.card}>
                        <div className={styles['contact-card']}>
                            <h5 className={styles['card-title']}>Dejanos tus dudas y nos pondremos en contacto a la brevedad</h5>
                            <p className={styles['card-text']}>
                                <img src={telephone} className={styles['contact-icon']} alt="teléfono"/>
                                <span>55 8686 0053</span>
                            </p>
                            <p className={styles['card-text']}>
                                <img src={email} className={styles['contact-icon']} alt="email" />
                                <span>contacto.kreateweb@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.card}>
                        <div className={styles['contact-card']}>
                            <h5 className={styles['card-title']}>Eviar mensaje</h5>
                            <form>
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="name" placeholder="Escribe tu nombre" />
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Escribe tu email" />
                                <label htmlFor="asunto">Asunto</label>
                                <input type="text" name="asunto" placeholder="Escribe el asunto" />
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea name="mensaje" cols="30" rows="10" placeholder="Dejanos tus dudas y/o comentarios" id={styles.message}></textarea>
                                <button type="submit" id={styles.submit}>Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;