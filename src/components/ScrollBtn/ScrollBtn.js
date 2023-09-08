/* eslint-disable no-restricted-globals */
import { useState, useEffect } from 'react';
import styles from './ScrollBtn.module.css';
import { IoIosArrowDropup } from 'react-icons/io'

const ScrollBtn = () => {
    const [ visible, setVisible ] = useState(false)
    const getPixels = () => document.documentElement.scrollTop || document.body.scrollTop;

    const scroll = () => {
        if(getPixels() > 0) {
           requestAnimationFrame(scroll)
           scrollTo(0, getPixels() - (getPixels() / 20))
        }
    }



    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400){
                setVisible(true)
            } else {
                setVisible(false)
            }
        })
    }, [])

    return (
        <>
            <div id={styles.upBtn} className={`${visible ? `${styles.show}` : `${styles.hide}`}`} onClick={scroll}>
                {/* <IoIosMail /> */}
                <IoIosArrowDropup  style={{width:'2rem', height:'2rem', backgroundColor: '#070ca0', borderRadius: '50px'}}/>
            </div>
        </>
    );
}

export default ScrollBtn;