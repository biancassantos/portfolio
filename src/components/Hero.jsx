import useLanguageContext from '../hooks/useLanguageContext';
import SocialsIcons from './ui/SocialsIcons';
import RoundBtn from './ui/RoundBtn';
import heroImg from '../assets/hero-img.png';

function Hero() {
  const { info } = useLanguageContext();

  return (
    <section className='hero'>
      <section className='hero-text'>
        <h1>
          {info.greeting}<br/>
          <span>Bianca Santos,</span><br/>
          {info.stack}
        </h1>

        <SocialsIcons />

        <RoundBtn 
        text={info.contactBtn} 
        url="mailto:biancassantos89@gmail.com" 
        target='_blank' />
      </section>

      <div className='hero-img'>
        <img src={heroImg} alt="Angle brackets and a slash" />
      </div>
    </section>
  )
}

export default Hero;