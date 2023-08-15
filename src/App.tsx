import './App.css';
import Navigation from './Pages-components/Navigation';
import TopBar from './Pages-components/TopBar';

function App() {
  return (
    <>
      <div className='flex flex-row h-full'>
        <Navigation />
        <div className='text-gray-700 bg-gray-200 h-screen w-screen'>
          <TopBar />
          <div>
            <div className='px-2 md:px-20 py-2 flex'>{'--page content'}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
