import './App.css';
import Navigation from '@/Pages-components/Navigation';
import TopBar from '@/Pages-components/TopBar';
import MainPage from '@/Pages-components/MainPage';

function App() {
  return (
    <>
      <div className='flex flex-row min-h-full'>
        <Navigation />
        <div className='text-[#333] bg-[#F5F7F9] h-screen w-screen'>
          <TopBar />
          <div className='fixed left-20 top-20 bottom-2 right-0 pb-2 overflow-y-scroll'>
            <MainPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
