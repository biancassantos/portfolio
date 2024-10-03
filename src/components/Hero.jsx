/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import RoundBtn from './ui/RoundBtn';
import heroImg from '../assets/hero-img.png';

const Hero = ({ phrase1, phrase2, contactBtn }) => {
  return (
    <section className='hero'>
      <div className='hero-text'>
        <h1>
          {phrase1}<br/>
          <span>Bianca Santos,</span><br/>
          {phrase2}
        </h1>
        <div className='socials-icons'>
          <Link to="https://github.com/biancassantos" target='_blank'><FaGithubAlt /></Link>
          <Link to="https://www.linkedin.com/in/biancassantos89/" target='_blank'><FaLinkedinIn /></Link>
        </div>
        <RoundBtn text={contactBtn} url="mailto:biancassantos89@gmail.com" target='_blank' />
      </div>
      <div className='hero-img'>
        <img src={heroImg} alt="hero image" />
      </div>
    </section>
  )
}

export default Hero;