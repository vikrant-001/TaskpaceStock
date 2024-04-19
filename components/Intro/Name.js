"use client"

import linked from '../../asset/linkedin.png';
import insta from '../../asset/intaicon.jpg';
import face from '../../asset/fc.png';
import git from '../../asset/git.png';
import Image from 'next/image';
import classes from './Name.module.css';
import { ReactTyped } from "react-typed";
const Intro = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.name}>
        <h1>Vikrant Mishra</h1>
        <ReactTyped strings={["Passionate about changing the world with technology."]} 
        typeSpeed={40} loop={true} className={classes.namety}
        backSpeed={80} backDelay={1000}></ReactTyped>
      </div>

      <div className={classes.imAg}>
        <Image src={linked} alt='linkedIn' height={44} width={44} className={classes.micon}/>
        <Image src={insta} alt='inta' height={43} width={43} className={classes.micon}/>
        <Image src={face} alt='facebook' height={43} width={43} className={classes.micon}/>
        <Image src={git} alt='gitHub' height={43} width={43} className={classes.micon}/>
      </div>
      <div className={classes.morebtn}>
        More about me
      </div>
    </div>
  )
}

export default Intro