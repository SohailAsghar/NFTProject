import { Parallax } from 'react-parallax';
import Utilitybg from '../img/img-4.jpg';
import UtilityImg from '../img/utility.png';
import Icon1 from '../img/icon-1.png';
import Icon2 from '../img/icon-2.png';
import Icon3 from '../img/icon-3.png';
import Icon4 from '../img/icon-4.png';

const Utility = () => (
    <Parallax className='img-bg' bgImage={Utilitybg} strength={350}>
        <div className='main-content utility'>
            <div className='utility-sec'>
                <img className='utility-char' src={UtilityImg} alt="Utility Img" />
            </div>
            <div className='utility-content'>
                <h3>Your NFT is special because no one else owns them. </h3>
                <p>
                    Owning one means you are special because not a creature that has walked (or crawled) this planet will have yours. Each NFT is specially 
                    hand-drawn and programmatically generated so each one is 100% different. With the amount of special traits included characters, watches, 
                    colors, function etc, each piece is a distinct work of art that lives on its own.
                </p>
                <div className='utility-icons'>
                    <img className='Icon1' src={Icon1} alt="icon1" />
                    <img className='Icon2' src={Icon2} alt="icon2" />
                    <img className='Icon3' src={Icon3} alt="icon3" />
                    <img className='Icon4' src={Icon4} alt="icon4" />
                </div>
            </div>
        </div>
    </Parallax>
);

export default Utility