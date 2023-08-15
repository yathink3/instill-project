import './App.css';
import Navigation from './Pages-components/Navigation';

function App() {
  return (
    <>
      <div className='flex flex-row h-full'>
        <Navigation />
        <div className='px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen'>
          <div>{'--page content'}</div>
        </div>
      </div>
    </>
  );
}

export default App;
