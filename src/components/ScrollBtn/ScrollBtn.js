/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import styles from './ScrollBtn.module.css';
import { useEffect } from 'react';

const ScrollBtn = () => {
    // console.log ( `react snippet works!` );
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
            if(window.scrollY > 600){
                setVisible(true)
            } else {
                setVisible(false)
            }
        })
    }, [])

    return (
        <>
            <div id={styles.upBtn} className={`${visible ? `${styles.show}` : `${styles.hide}`}`} onClick={scroll}>
                ^
            </div>
        </>
    );
}

export default ScrollBtn;