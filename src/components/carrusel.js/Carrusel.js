import { useState } from "react";
import styles from './carrusel.module.css';

const Carrusel = ({images}) => {
    const [ actualImg, setActualImg ] = useState(0);

    const quantity = images?.length;

    setTimeout(() => {
        console.log('change');
        setActualImg(actualImg === 0 ? quantity - 1 : actualImg -1)
        clearTimeout()
    }, 5000)

    return (
        <>
            <div className={styles.container}>
                {images.map((image, idx) => {
                    return (
                    <div  key={idx}>
                        {actualImg === idx && (
                        <img src={image} alt="slides" className={styles.slides}/>
                    )}
                    </div>
                    )
                })}
            </div>
        </>
    );
}

export default Carrusel;