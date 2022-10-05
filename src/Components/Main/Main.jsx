import React from 'react'

import styles from './Main.module.css'

const Main = () => {
	return (
		<div className={styles.main}>
			<div className={styles.about}>
				<h2 className={styles.aboutPosition}>Front-End Developer</h2>
				<h1 className={styles.aboutName}>Bohdan Nahorniak</h1>
				<p className={styles.aboutDesription}>
					I'm a young, responsible, learning fast and hard-working. I always
					achieve my goals. I'm ready to learn new technologies.
				</p>
			</div>
			<div>
				<h3 className={styles.title}>Projects</h3>
				<ol className={styles.projectsList}>
					<li className={styles.projectsItems}>
						<a
							href='https://cheerful-fudge-33368e.netlify.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span
								className={`${styles.projectsText} ${styles.projectsTextActiv}`}
							>
								https://cheerful-fudge-33368e.netlify.app/
							</span>
						</a>
						............[
						<span className={styles.projectsText}>HTML5, CSS3</span> ]
					</li>
					<li className={styles.projectsItems}>
						<a
							href='https://bogdann322.github.io/chat-with-chuck/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span
								className={`${styles.projectsText} ${styles.projectsTextActiv}`}
							>
								https://bogdann322.github.io/chat-with-chuck/
							</span>
						</a>
						.....[
						<span className={styles.projectsText}>React.js, CSS Modules</span> ]
					</li>
				</ol>
			</div>
			<div>
				<h3 className={styles.mainTitle}>Work Experience</h3>
				<div>
					<h4 className={styles.workPosition}>
						Front-End Developer{' '}
						<span className={styles.organization}>Freelance</span>
					</h4>
					<p className={styles.period}>November 2021 - December 2021</p>
					<ul className={styles.workList}>
						<li className={styles.workListItem}>
							Create User Page with slider and different
						</li>
						<li className={styles.workListItem}>
							Create Admin Page with ability to add/delete new posts/photos
						</li>
						<li className={styles.workListItem}>
							Make the site adaptable for all devices
						</li>
					</ul>
				</div>
				<div></div>
			</div>
			<div>
				<h3 className={styles.mainTitle}>Education</h3>
				<h4 className={styles.educationUniversity}>
					Ivan Franko National University of Lviv
				</h4>
				<h5 className={styles.educationSpecialty}>
					Department of applied mathematics and informatics
				</h5>
				<h5 className={styles.period}>September 2017 - June 2021</h5>
			</div>
			<div>
				<h3 className={styles.mainTitle}>Languages</h3>
				<ul>
					<li>
						<span>Ukrainian - native</span>
					</li>
					<li>
						<span>English - intermediate</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Main