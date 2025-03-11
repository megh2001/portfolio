// import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css'

export const Hero = () => {
  return <section className={styles.container}>
        <h1 className={styles.name}>
            Megh Panandikar
        </h1>
        <p className={styles.description}>
            A Software Engineer, who likes solving problems with code.
        </p>
        <div className={styles.buttons}>
            <a href="#contact">
                <button className={styles.button} >
                    Contact me
                </button>
            </a>
            <a href={getImageUrl("hero/resume.pdf")} target="blank">
                <button className={styles.button}>
                    Resume
                </button>
            </a>
        </div>
        <img className={styles.arrow} src={getImageUrl("hero/arrow.svg")} alt='arrow'>
        </img>
    {/* <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Megh</h1>   
        <p className={styles.description}>I&apos;m a software Engineer with experience in ML/AI developement.</p>
        <a href='mailto:megh2001@gmail.com'  className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt= '' className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div> */}
  </section>;
}
