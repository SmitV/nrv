import logo from './logo.svg';
import nerve from './nerve.svg';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faCoins, faDonate } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  // Nerve stats. Subject to change and will be provided by the API in the future
  const nerveStats = [
    {value: '32.9M', subtitle: 'Total Value Locked', icon: faLock},
    {value: '$0.60', subtitle: 'NRV Token Price', icon: faDonate},
    {value: '13.2M', subtitle: 'Volume Daily', icon: faCoins}
  ];
  return (
    <div className="nerve-app__main-container">
      <Nav />
      <div className="nerve-app__content-container">
        <div>
          <h1 className="nerve-app__main-header">An AMM for stable coins and pegged assets</h1>
          <h3>Launched on Binance Smart Chain, Nerve's first pool is a basket of dollar-pegged stablecoins consisting of BUSD, USDT, and USDC. </h3>
          <a href="https://nerve.fi"><button className="nerve-app__content-button">Get Started</button></a>
        </div>
        <div>
          <img src={nerve} />
        </div>
      </div>
      <ul className="nerve-app__stats-container">
        {nerveStats.map((stat) =>
          <li>
            <FontAwesomeIcon icon={stat.icon} className="nerve-app__stats-icon" />
            <div className="nerve-app__stats-right">
              <h1>{stat.value}</h1>
              <span>{stat.subtitle}</span>
            </div>
          </li>
        )}
      </ul>
      
    </div>
  );
}

export default App;
