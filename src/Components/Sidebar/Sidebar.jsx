import React from 'react';

import avatar from '../../img/avatar.jpg'
import phone from '../../img/telephone.png'
import mail from '../../img/email.png'
import git from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <aside className={styles.aside}>
            <img src={avatar} alt="user" className={styles.photo}/>
            <div className={styles.contacts} > 
                <h3 className={styles.sidebadTitle}>Contacts</h3>
                <div className={styles.contactsItems}>
                    <img src={phone} alt="telephone" />
                    <a href="tel:+380635673270" className={styles.contactsLink}>+380635673270</a>
                </div>
                <div className={styles.contactsItems}>
                    <img src={mail} alt="email" />
                    <a href="mainto:triggerok1488@gmail.com" className={styles.contactsLink}>triggerok1488@gmail.com</a>
                </div>
                <div className={styles.contactsItems}>
                    <img src={git} alt="github" />
                    <a href="https://github.com/bogdann322" target='_blank' rel="noreferrer" className={styles.contactsLink}>Github</a>
                </div>
                <div className={styles.contactsItems}>
                    <img src={linkedin} alt="github" />
                    <a href="https://www.linkedin.com/in/bohdan-nahorniak-372216176/" target='_blank' rel="noreferrer" className={styles.contactsLink}>Linkedin</a>
                </div>
            </div>
            <div className={styles.techSkills}>
                <h3 className={styles.sidebadTitle}>Tech Skills</h3>
                <ul className={styles.techSkillsLists}>
                    <li className={styles.techSkillsItems}><span className={styles.techSkillsText}>React.js</span></li>
                    <li className={styles.techSkillsItems}><span className={styles.techSkillsText}>Redux Toolkit</span></li>
                    <li className={styles.techSkillsItems}><span className={styles.techSkillsText}>TypeScript</span></li>
                    <li className={styles.techSkillsItems}><span className={styles.techSkillsText}>Vue.js</span></li>
                    <li className={styles.techSkillsItems}><span className={styles.techSkillsText}>Node.js</span></li>
                    <li className={styles.techSkillsItems}><span className={styles.techSkillsText}>SASS</span></li>
                    <li className={styles.techSkillsItems}><span className={styles.techSkillsText}>HTML5,CSS3</span></li>
                    <li className={styles.techSkillsItems}><span className={styles.techSkillsText}>GIT, Figma, Trello</span></li>
                    <li className={styles.techSkillsItems}><span className={styles.techSkillsText}>AJAX, JSON</span></li>
                </ul>
            </div>
            <div className={styles.softSkills}>
                <h3 className={styles.sidebadTitle}>Soft Skills</h3>
                <ul className={styles.softSkillsLists}>
                    <li className={styles.softSkillsItems}><span className={styles.softSkillsText}>Scrum</span></li>
                    <li className={styles.softSkillsItems}><span className={styles.softSkillsText}>Agile</span></li>
                    <li className={styles.softSkillsItems}><span className={styles.softSkillsText}>GTD</span></li>
                    <li className={styles.softSkillsItems}><span className={styles.softSkillsText}>Teamwork</span></li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;