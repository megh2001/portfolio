// import React from 'react'
// import skills from "../../data/skills.json"
// import history from "../../data/history.json"
import { getImageUrl } from "../../utils"
import styles from "./Experience.module.css"

export const Experience = () => {
  return (
        <section className={styles.container} id='experience'>
            <h2>EXPERIENCE</h2>
            <div className={styles.card}>
                <img src= {getImageUrl("experience/imemori.png")} alt = "" className={styles.img} />
                <div className={styles.info}>
                    <h3 className={styles.info}>Software  Engineer,  iMemori.ai</h3>
                    <p className={styles.info}>Sept 2023 - May 2024</p>
                    <ul>
                        <li className={styles.info}>Fine-tuned the spaCy small NER model to recognize entities for domain-specific environments.<br />Used the larger ROBERTA based NER model to label the Enron dataset and then augmented the labels by randomly replacing entities with list of entities from that domain or environment. Resulted in a versatile framework for training an NER model for various different client conditions.</li>
                        <li className={styles.info}>Assisted in converting the code structure from a monolithic system to a microservices-based structure.<br />Refactored over 2000 lines of code in the API module while fixing bugs in code logic and Arango Queries to
                        reduce code smells and code duplications to below 2%. and cover over 95% of test cases for the API module.</li>
                        <li className={styles.info}>Created a program that identifies product mentions from any text data, considering spelling errors and variations.<br />Used a combination of Levenstein distance to find similar sounding words and a custom trained context based NER model to detemrine whether the similar words were mentioned as products or not.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.card}>
                <img src= {getImageUrl("experience/pwc.png")} alt = "" className={styles.img2} />
                <div className={styles.info}>
                    <h3 className={styles.info}>Technological Consultant, PwC</h3>
                    <p className={styles.info}>May 2022 - July 2024</p>
                    <ul>
                        <li className={styles.info}>Collaborated with the Global Data Collection team to develop a machine learning model to calculate
                        attributes of objects identified for retail analytics, like product visibility adn shelf space using the YOLOv5 algorithm</li>
                        <li className={styles.info}>Worked in the SAP consultancy team in the production planning department to implement S4HANA for the
                        client. Explored AI solutions to optimize production based on sales data using SAP IBP.</li>
                    </ul>
                </div>
            </div>
            {/* <h2 className={styles.title}>Experinece</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src= {getImageUrl(skill.imageSrc)} alt = {skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                        );
                    })
                }
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(historyItem.imageSrc)} alt = {`${historyItem.organisation} Logo`} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>{historyItem.experiences.map((experience, id) => {
                                        return <li key = {id}>{experience}</li>
                                    })}
                                    </ul>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div> */}
        </section>
  );
};
