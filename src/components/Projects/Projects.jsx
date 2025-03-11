// import React from 'react'
// import projects from "../../data/projects.json"
// import { ProjectCard } from "./ProjectCard"
import styles from "./Projects.module.css"
import { getImageUrl } from '../../utils'

export const Projects = () => {
  return <div> <h2 className={styles.title}>Projects</h2>
  <section className={styles.container} id="projects">
    {/* <h2 className={styles.title}>Projects</h2> */}
    <div className={styles.projects}>
        <div className={styles.project}>
            {/* <img src={getImageUrl("projects/project.png")} alt="" className={styles.image}></img> */}
            <video src={getImageUrl("projects/drone.mp4")} autoPlay loop muted playsInline className={styles.video}></video>
            <div className={styles.heading}>
                <h3>Optimization and Reinforcement Learning in Robotics</h3>
                <a href="https://github.com/megh2001/Projects/tree/main/RL_and_Optimization">
                    <img className={styles.icon} src={getImageUrl("about/github.svg")} alt =""/>
                </a>
            </div>
            <p> Performed trajectory optimization from scratch for a simulated quadrotor in python using:<br />
            -Linear and Sequential Quadratic Programming with Model Predictive Control<br />
            -RL techniques like Deep Q learning and PPO with a custom environment in stablebaselines3</p>
        </div>
    </div>
  </section>
  </div>
}
