// import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css'

export const About = () => {
    return <section className={styles.container} id="about">
    <h2 className={styles.title}> About me:</h2>
    <div className={styles.content}>
        <div className= {styles.info}>
            <p>
                Hi! I&apos;m  Megh, a Software Engineer who is passionate about building interesting and scallable applications.<br/><br/>
                I am a graduate student at New York University, pursuing my Master&apos;s in Computer Engineering and I have experience working as a Software Engineer developing NLP applications<br/><br/>
                In my free time you&apos;ll catch me watching a movie or playing football. 
                
            </p>
            <div className={styles.icons}>
                <a href="mailto:megh2001@gmail.com">
                    <img className={styles.icon} src={getImageUrl("about/mail.svg")} alt =""/>
                </a>
                <a href="https://github.com/megh2001/Projects">
                    <img className={styles.icon} src={getImageUrl("about/github.svg")} alt =""/>
                </a>
                <a href="https://www.linkedin.com/in/megh-panandikar/">
                    <img className={styles.icon} src={getImageUrl("about/linkedin.svg")} alt =""/>
                </a>
                <a href="https://www.instagram.com/meghpanandikar/">
                    <img className={styles.icon} src={getImageUrl("about/instagram.svg")} alt =""/>
                </a>
            </div>
        </div>
        <img src = {getImageUrl("about/aboutImage2.jpg")} alt= "" className={styles.aboutImg}/>
    </div>
  </section>;
}
