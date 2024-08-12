import React from "react";
import styles from './ProjectsStyles2.module.css'
import BackupService from '../../assets/Backup.png'
import FortuneTeller from '../../assets/FortuneTeller.png'
import ProductRecomm from '../../assets/ProductRec.jpg'
import IndicBert from '../../assets/ai4bharat.png'
import Portfolio from '../../assets/Portfolio2.png'
import ProjectCard from "../../common/ProjectCard";


function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>

                <ProjectCard src={Portfolio} link="https://github.com/VishalS-HK/Portfolio-website" h3="Portfolio Webiste" />

                {/* <a href="https://github.com/VishalS-HK/Portfolio-website">
                    <img className="hover" src={Portfolio} alt="" />
                    <h3>Portfolio Website</h3>
                </a> */}

                <ProjectCard src={BackupService} link="https://github.com/VishalS-HK/605_609_619_624_Back-Up-service-using-docker-and-Kubernetes" h3="Backup Services" />

                {/* <a href="https://github.com/VishalS-HK/605_609_619_624_Back-Up-service-using-docker-and-Kubernetes">
                    <img className="hover" src={BackupService} alt="" />
                    <h3>Backup Service</h3>
                </a> */}

                <ProjectCard src={FortuneTeller} link="https://github.com/VishalS-HK/FortuneTeller" h3="Fortune Teller" />
                
                {/* <a href="https://github.com/VishalS-HK/FortuneTeller">
                    <img className="hover" src={FortuneTeller} alt="" />
                    <h3>Fortune Teller Application</h3>
                </a> */}

                <ProjectCard src={ProductRecomm} link="https://github.com/VishalS-HK/product-recommendation-system-BERT" h3="Product Recommendation" />
                
                {/* <a href="https://github.com/VishalS-HK/product-recommendation-system-BERT">
                    <img className="hover" src={ProductRecomm} alt="" />
                    <h3>Product Recommendation System</h3>
                </a> */}

                <ProjectCard src={IndicBert} link="https://github.com/VishalS-HK/NLP-MiniProject" h3="Aggression Detection" />

                {/* <a href="https://github.com/VishalS-HK/NLP-MiniProject">
                    <img className="hover" src={IndicBert} alt="" />
                </a> */}
            </div>
        </section>
    );
}

export default Projects;