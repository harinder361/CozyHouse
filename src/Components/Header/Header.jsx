import './Header.css';
import headerImage from '../../Assets/headerImage.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <div className="headerTitleSm">React & Node</div>
            <div className="headerTitleLg">CozyHouse</div>
        </div>
        <img src={headerImage} alt="" className="headerImage" />
    </div>
  )
}

export default Header;
