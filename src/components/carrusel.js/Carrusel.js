import { useState } from "react";
import styles from './carrusel.module.css';
// import images from "exports/images";
// import herramientas from 'assets/img/herramientas-crear-paginas-web.jpg';
// import http from 'assets/img/https.jpg';
// import web from 'assets/img/webdeveloper.jpg';




const Carrusel = ({images}) => {
    const [ actualImg, setActualImg ] = useState(0);
    const quantity = images?.length;

    if(!Array.isArray(images) || quantity === 0) return;

    const nextImg = () => {
        setActualImg(actualImg === quantity - 1 ? 0 : actualImg + 1 )
    }

    const previousImg = () => {
        setActualImg(actualImg === 0 ? quantity - 1 : actualImg - 1)
    }

    const timer = setTimeout(() => {
        console.log('change');
        setActualImg(actualImg === 0 ? quantity - 1 : actualImg -1)
    }, 5000)

    return (
        <div className={styles.container}>
            <button id={styles['left-btn']} onClick={previousImg}>{'<'}</button>
            {images.map((image, idx) => {
                return (
                <div onChange={timer}>
                     {actualImg === idx && (
                    <img src={image} key={idx} alt="slides" className={styles.slides}/>
                )}
                </div>
                )
            })}
            <button id={styles['right-btn']} onClick={nextImg}>{'>'}</button>
        </div>
    );
}

export default Carrusel;


        // <motion.div className={styles['slider-container']}>
            {/* <img src={require(`assets/img/${selectedImage}`).default} alt="Slides"/>
            <button onClick={previous}>{"<"}</button>
            <button onClick={next}>{">"}</button> */}
        //     <motion.div className={styles.slider} drag='x' dragConstraints={{right: 0}}>
        //         {images.map(image => (
        //             <motion.div className={styles.item}> 
        //                 <img src={image} alt="Slides" />
        //             </motion.div>
        //         ))}  
        //     </motion.div>
        // </motion.div>