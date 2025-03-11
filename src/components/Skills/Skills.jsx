// import React from 'react'
import styles from "./Skills.module.css"

export const Skills = () => {
  return <div><h2 className={styles.title}>SKILLS</h2>
            <section className = {styles.container} id="skills">
                <div className={styles.containerInner}>
                    <h3>Languages</h3>
                    <div className={styles.icons}>
                        <div className= {styles.icon}>
                            <a href="https://www.python.org/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python"/>
                            </a>
                            <span>Python</span>
                        </div>
                        <div className= {styles.icon}>
                            <a href="https://isocpp.org/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++"/>
                            </a>
                            <span>C++</span>
                        </div>
                        <div className= {styles.icon}>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript"/>
                            </a>
                            <span>JavaScript</span>
                        </div>
                        <div className= {styles.icon}>
                            <a href="https://arangodb.com/unified-query-languageaql/">
                                <img src="https://monotykamary.gallerycdn.vsassets.io/extensions/monotykamary/vscode-aql/1.10.1/1724402000436/Microsoft.VisualStudio.Services.Icons.Default" alt="Arango Query Language"/>
                            </a>
                            <span>AQL</span>
                        </div>
                        <div className= {styles.icon}>
                            <a href="/">
                                <img src= "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL"/>
                            </a>
                            <span>SQL</span>
                        </div>
                        <div className= {styles.icon}>
                            <a href="https://www.mathworks.com/products/matlab.html">
                                <img src= "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" alt="Matlab"/>
                            </a>
                            <span>Matlab</span>
                        </div>

                    </div>
                </div>
                <div className={styles.containerInner}>
                    <h3>Full Stack</h3>
                    <div className={styles.icons}>
                        <div className= {styles.icon}>
                            <a href="https://fastapi.tiangolo.com/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastApi"/>
                            </a>
                            <span>FastAPI</span>
                        </div>
                        <div className= {styles.icon}>
                            <a href="https://react.dev/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React"/>
                            </a>
                            <span>React</span>
                        </div>
                        <div className= {styles.icon}>
                            <a href="https://www.postgresql.org/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL"/>
                            </a>
                            <span>PostgreSQL</span>
                        </div>
                        <div className={styles.icon}>
                            <a href="https://www.docker.com/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker"/>
                            </a>
                            <span>Docker</span>
                        </div>
                        <div className={styles.icon}>
                            <a href="https://git-scm.com/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git"/>
                            </a>
                            <span>Git</span>
                        </div>
                        <div className={styles.icon}>
                            <a href="https://www.postman.com/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman"/>
                            </a>
                            <span>Postman</span>
                        </div>
                        <div className={styles.icon}>
                            <a href="https://docs.pytest.org/en/latest/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" alt="Pytest"/>
                            </a>
                            <span>Pytest</span>
                        </div>
                    </div>
                </div>
                <div className={styles.containerInner}>
                    <h3>ML / AI</h3>
                    <div className={styles.icons}>
                    <div className={styles.icon}>
                            <a href="https://pytorch.org/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="Pytorch"/>
                            </a>
                            <span>Pytorch</span>
                        </div>

                        <div className={styles.icon}>
                            <a href="https://www.langchain.com/">
                                <img src="https://images.seeklogo.com/logo-png/61/2/langchain-icon-white-logo-png_seeklogo-611656.png" alt="Langchain"/>
                            </a>
                            <span>Langchain</span>
                        </div>

                        <div className={styles.icon}>
                            <a href="https://scikit-learn.org/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" alt="Sklearn"/>
                            </a>
                            <span>Sklearn</span>
                        </div>

                        <div className={styles.icon}>
                            <a href="https://www.nltk.org/">
                                <img src="https://storage.googleapis.com/kaggle-datasets-images/4813597/8141506/25cd98b59c4ade2c0a744f6ed46ea861/dataset-card.png?t=2024-04-17-03-48-00" alt="NLTK"/>
                            </a>
                            <span>NLTK</span>
                        </div>

                        <div className={styles.icon}>
                            <a href="https://spacy.io/">
                                <img src="https://img.stackshare.io/service/7312/7-7zis8f_400x400.png" alt="SpaCy"/>
                            </a>
                            <span>SpaCy</span>
                        </div>

                        <div className={styles.icon}>
                            <a href="https://www.tensorflow.org/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow"/>
                            </a>
                            <span>TensorFlow</span>
                        </div>

                        <div className={styles.icon}>
                            <a href="https://numpy.org/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy"/>
                            </a>
                            <span>NumPy</span>
                        </div>

                        <div className={styles.icon}>
                            <a href="https://pandas.pydata.org/">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas"/>
                            </a>
                            <span>Pandas</span>
                        </div>

                    </div>
                </div>
            </section>
        </div>;
}
