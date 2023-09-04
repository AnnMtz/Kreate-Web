import React, { useRef,useEffect } from "react";
import styles from './contact.module.css';
import emailjs from 'emailjs-com';
import contact from 'assets/img/contacto.jpg';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';

const Contact = () => {
    const form = useRef();

    const scrollToElement = () => {
        form.current?.scrollIntoView({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        scrollToElement()
    }, [])


    const senEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        )
        .then(
            result => console.log(result.text),
            error => console.log(error.text)
        );

        e.target.reset();
    };

    return (
        <div className={styles['container-fluid']}>
            <div className={styles['about-img']} ref={form}>
                <img src={contact} id={styles.contact} alt="contact" />
            </div>
            <div className={styles.row}>
                <div className={styles.columns}>
                    <div className={styles.card}>
                        <div className={styles['contact-card']}>
                            <h5 className={styles['card-title']}>Dejanos tus dudas y nos pondremos en contacto a la brevedad</h5>
                            <p className={styles['card-text']}>
                                <BsFillTelephoneFill/>
                                <span>55 8686 0053</span>
                            </p>
                            <p className={styles['card-text']}>
                                <IoIosMail />
                                <span>contacto.kreateweb@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.card}>
                        <div className={styles['contact-card']}>
                            <h5 className={styles['card-title']}>Eviar mensaje</h5>
                            <form ref={form} onSubmit={senEmail}>
                                <label htmlFor="user_name">Nombre</label>
                                <input type="text" required name="user_name" placeholder="Escribe tu nombre" />
                                <label htmlFor="user_email">Email</label>
                                <input type="email" required name="user_email" placeholder="Escribe tu email" />
                                <label htmlFor="asunto">Asunto</label>
                                <input type="text" required name="asunto" placeholder="Escribe el asunto" />
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea name="message" required cols="30" rows="10" placeholder="Dejanos tus dudas y/o comentarios" id={styles.message}></textarea>
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