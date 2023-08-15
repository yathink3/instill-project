// import BellIcon from './assets/x-base-one-line-bell.svg';
// import ChartIcon from './assets/x-base-one-line-chart-pie.svg';
import './App.css';

import Navigation from './Pages-components/Navigation';

function App() {
  return (
    <>
      {/* <div>
        <img src={BellIcon} className='logo' alt='Bell' />
        <img src={ChartIcon} className='logo' alt='Chart' />
      </div>
      <h1>Instill</h1>
      <div className='card'>
        <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
      </div>
      <p className='read-the-docs'>This is Instill App</p> */}
      <div>
        <Navigation />
      </div>
    </>
  );
}

export default App;
