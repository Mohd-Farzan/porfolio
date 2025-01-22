import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hey there! I&apos;m
        {' '}
        <a
          href="https://www.linkedin.com/in/muhammad-farzan-801489250/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Mohd Farzan,
        </a>
        {' '}
        a passionate full stack developer specializing in MERN and php frameworks.skilled in front-end and back-end technologies with a proven
track record in building scalable, user-centric applications. Experienced in the MERN stack, API
integrations, and responsive design. Adept at delivering innovative solutions that meet
business objectives while ensuring high-quality user experiences

      </motion.p>
      {/* <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        My journey into full stack developer was anything but ordinary. As a former third-year student at Allenhouse Institute of technology, I made a bold decision to drop out and pursue my true passion. That led me to Microverse, a remote software development school, where I honed my skills through pair programming and real-world projects. I completed the boot camp with unwavering dedication, amassing over
        {' '}
        <a
          href="https://github.com/Rhaegar121"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {' '}
          2500+ contributions on GitHub
        </a>
        {' '}
        in just one year. My experience in the Students&apos; Union further sharpened my problem-solving and communication abilities.
      </motion.p> */}
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        Ready to bring your project to life? Reach out—I&apos;m excited to collaborate!
        {' '}
        <a
          href="https://drive.google.com/file/d/1bdQwT7Vx2y5ZopVgSjzTNaTQo2uv7Vgc/view?usp=drive_link"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Check out my resume
        </a>
        {' '}
        for more insights into my journey and qualifications.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
