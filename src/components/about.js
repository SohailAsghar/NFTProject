import { Parallax } from 'react-parallax';
import Aboutbg from '../img/img-2.jpg'
import Metaknight from '../img/metaknight.png'
import Kayos from '../img/kayos.png'
import Jdcoded from '../img/jdcoded.png'
import Mindbender from '../img/mindbender.png'
import Andrakis from '../img/andrakis.png'
import Technwondo from '../img/technwondo.png'
import Kozhibear from '../img/kozhibear.png'
import Tuanbezel from '../img/tuanbezel.png'

const About = () => (
    <Parallax className='img-bg' bgImage={Aboutbg} strength={350}>
        <div className='main-content team'>

            <div className="grid-container">



                <div className="grid-item">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='meta-knight' src={Metaknight} alt="Meta Knight" />
                            </div>
                            <div className="flip-card-back">
                                <h4>Metaknight</h4> 
                                <p>Founder &amp; CEO</p> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='kayos' src={Kayos} alt="Kayos" />
                            </div>
                            <div className="flip-card-back">
                                <h4>Saeed Alayali</h4> 
                                <p>Co-Founder</p> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='jdcoded' src={Jdcoded} alt="Jdcoded" />
                            </div>
                            <div className="flip-card-back">
                                <h4>Stuart Holroyd</h4> 
                                <p>Artist</p> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='mindbender' src={Mindbender} alt="Mindbender" />
                            </div>
                            <div className="flip-card-back">
                                <h4>Fouad AbdelMalak</h4> 
                                <p>Creative Director</p> 
                            </div>
                        </div>
                    </div>
                </div>

              

                <div className="grid-item">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='andrakis' src={Andrakis} alt="Andrakis" />
                            </div>
                            <div className="flip-card-back">
                                <h4>Shance Boyd</h4> 
                                <p>Influencer Manager</p> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='technwondo' src={Technwondo} alt="Technwondo" />
                            </div>
                            <div className="flip-card-back">
                                <h4>Techwondo</h4> 
                                <p>Digital Strategist</p> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='kozhibear' src={Kozhibear} alt="Kozhibear" />
                            </div>
                            <div className="flip-card-back">
                                <h4>WildKarma</h4> 
                                <p>Project Manager</p> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='tuanbezel' src={Tuanbezel} alt="Tuanbezel" />
                            </div>
                            <div className="flip-card-back">
                                <h4>Tuanbezel</h4> 
                                <p>Product Designer</p> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </Parallax>
);

export default About