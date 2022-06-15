import { Parallax } from 'react-parallax';
import Mainbg from '../img/img-1.png';
import Herobear from '../img/bear-hero.png';
import Logo from '../img/cbwc-logo.png';

const Main = () => (
    <Parallax className='img-bg' bgImage={Mainbg} strength={350}>
        <div className='main-content main'>
            <div className='header'>
                <img className='logo-img' src={Logo} alt="Logo" />
            </div>
            <div className='main-area hero-bear' style={{ backgroundImage: `url(${Herobear})` }}>
                <button className='mint-btn'>Mint Your Own NFT</button>
            </div>
        </div>
    </Parallax>
);

export default Main