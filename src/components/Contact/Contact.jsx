// import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"></img>
            <a href="mailto:megh2001@gmail.com">megh2001@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"></img>
            <a href="https://www.linkedin.com/in/megh-panandikar/">Linkedin</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon"></img>
            <a href="https://github.com/megh2001/Projects">Github</a>
        </li>
    </ul>
  </footer>
}
