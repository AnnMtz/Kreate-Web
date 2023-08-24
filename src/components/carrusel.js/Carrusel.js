import { useState } from "react";
import styles from './carrusel.module.css';

const Carrusel = ({images}) => {
    const [ actualImg, setActualImg ] = useState(0);

    const quantity = images?.length;

    const timer = setTimeout(() => {
        console.log('change');
        setActualImg(actualImg === 0 ? quantity - 1 : actualImg -1)
    }, 5000)

    return (
        <>
            <div className={styles.container}>
                {images.map((image, idx) => {
                    return (
                    <div onChange={timer}>
                        {actualImg === idx && (
                        <img src={image} key={idx} alt="slides" className={styles.slides}/>
                    )}
                    </div>
                    )
                })}
            </div>
        </>
    );
}

export default Carrusel;