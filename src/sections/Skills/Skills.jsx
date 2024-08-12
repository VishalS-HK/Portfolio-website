import React from 'react';
import styles from './SkillsStyles.module.css';
import c from '../../assets/langs&tools/c-original.svg';
import cplusplus from '../../assets/langs&tools/cplusplus-original.svg'
import python from '../../assets/langs&tools/python-original.svg'
import java from '../../assets/langs&tools/java-original.svg'

import html from '../../assets/langs&tools/html5-original.svg'
import css from '../../assets/langs&tools/css3-original.svg'
import js from '../../assets/langs&tools/javascript-original.svg'
import nodejs from '../../assets/langs&tools/nodejs-original.svg'
import react from '../../assets/langs&tools/react-original.svg'

import git from '../../assets/langs&tools/git-original.svg'
import github from '../../assets/langs&tools/github-original-wordmark.svg'
import vscode from '../../assets/langs&tools/vscode-original.svg'
import intellij from '../../assets/langs&tools/intellij-original.svg'
import conda from '../../assets/langs&tools/anaconda-original.svg'

import apple_dark from '../../assets/langs&tools/apple-original.svg'
import windows from '../../assets/langs&tools/windows11-original.svg'
import ubuntu from '../../assets/langs&tools/ubuntu-original.svg'

import docker from '../../assets/langs&tools/docker-original.svg'
import kube from '../../assets/langs&tools/kubernetes-original.svg'


import mysql from '../../assets/langs&tools/mysql-original-wordmark.svg'
import sqlite from '../../assets/langs&tools/sqlite-original.svg'

// import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function SkillsList() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={c} skill="C"/>
        <SkillList src={cplusplus} skill="C++"/>
        <SkillList src={python} skill="Python"/>
        <SkillList src={java} skill="Java"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={html} skill="HTML"/>
        <SkillList src={css} skill="CSS"/>
        <SkillList src={js} skill="JavaScript"/>
        <SkillList src={nodejs} skill="NodeJS"/>
        <SkillList src={react} skill="React"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={git} skill="Git"/>
        <SkillList src={github} skill="GitHub"/>
        <SkillList src={vscode} skill="VSCode"/>
        <SkillList src={intellij} skill="IntelliJ"/>
        <SkillList src={conda} skill="Anaconda/ MiniConda"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={apple_dark} skill="macOS X"/>
        <SkillList src={windows} skill="Windows"/>
        <SkillList src={ubuntu} skill="Ubuntu"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={docker} skill="Docker"/>
        <SkillList src={kube} skill="Kubernetes"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={mysql} skill="MySQL"/>
        <SkillList src={sqlite} skill="SQLite"/>
      </div>
    </section>
  );
}

export default SkillsList;