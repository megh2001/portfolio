// import React from 'react'
import styles from "./Research.module.css"

export const Research = () => {
  return <section className = {styles.container} id="research">
            <h2>RESEARCH</h2>
            <ul>
                <li>
                    <a href="https://www.researchgate.net/publication/375825212_Fine-Tuning_a_Named_Entity_Recognition_Model_using_Data_Augmentation_and_Oracle-based_learning" target="_blank" rel="noopener noreferrer">
                        Fine-Tuning a Named Entity Recognition Model using Data Augmentation and Oracle-based Learning
                    </a>
                </li>
                <br/>
                <li>
                    <a href="https://ieeexplore.ieee.org/document/10307451" target="_blank" rel="noopener noreferrer">
                        Recognition of Handwritten Medical Prescription Using CNN Bi-LSTM with Lexicon Search
                    </a>
                </li>
            </ul>
        </section>
}
