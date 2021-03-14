import nerveLogo from './nerveBlack.png';
import './Nav.css';

function Nav() {
    //Options are hardcoded at the moment. In the future, there may be a real analytics page but we can also remove it
    const navOptions = [
        {text:'Analytics', link:"https://docs.nerve.fi/"}, 
        {text:'Docs', link:"https://docs.nerve.fi/"}
    ];
    return (
        <nav className="nerve-app__nav-container">
            <img src={nerveLogo} />
            <ul className="nerve-app__list-container">
                {navOptions.map((navItem) => 
                    <li>
                        <a href={navItem.link} className="nerve-app__list-item">
                            {navItem.text}
                        </a>
                    </li>
                )}
            </ul>
            <a href="https://nerve.fi">
                <button className="nerve-app__nav-launch-btn">Launch App</button>
            </a>
        </nav>
      );
}

export default Nav;
