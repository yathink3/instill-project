import './App.css';
import Navigation from './Pages-components/Navigation';
import TopBar from './Pages-components/TopBar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import { ReactComponent as AppleIcon } from '@/assets/apple-logo-black-11.svg';
import CircularPercentage from './components/ui/circular-percentage';

function App() {
  return (
    <>
      <div className='flex flex-row h-full'>
        <Navigation />
        <div className='text-[#333] bg-[#F5F7F9] h-screen w-screen'>
          <TopBar />

          <div className='mx-2 md:mx-20'>
            <div className='flex items-center  mt-8 mb-5'>
              <div className='border-2 border-gray-300 bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center'>
                <AppleIcon />
              </div>
              <h1 className='ml-4 font-bold'>APPLE CULTURE DASHBOARD</h1>
            </div>
            <div className='mt-10 flex items-center'>
              <h1 className='font-bold text-5xl'>Hi, Tim</h1>
            </div>
            <div className='flex items-center mt-1'>
              <h1 className='text-lg text-[#888]'>CEO, Apple Inc</h1>
            </div>
          </div>
          <div className='mx-2 md:mx-20 mt-5'>
            <Card className='p-2 mt-5'>
              <CardHeader>
                <h2 className='text-base font-medium text-[#666666]'>THIS MONTH</h2>
                <CardTitle>Culture Vital signs</CardTitle>
              </CardHeader>
              <CardContent className='flex flex-row justify-between'>
                <div className='m-1 rounded-lg w-[200px] h-[240px] bg-[#FAFAFA] p-2'>
                  <h3 className='text-lg font-medium'>Inclusion</h3>
                  <div className='my-5 mx-3 w-[150px] flex flex-col justify-center items-center'>
                    <CircularPercentage percentage={25} color='green' />
                    <h3>↑ 25%</h3>
                  </div>
                </div>
                <div className='m-1 rounded-lg w-[200px] h-[240px] bg-[#FAFAFA] p-2'>
                  <h3 className='text-lg font-medium'>Trust</h3>
                  <div className='my-5 mx-3 w-[150px] flex flex-col justify-center items-center'>
                    <CircularPercentage percentage={85} />
                    <h3>↓ 15%</h3>
                  </div>
                </div>
                <div className='m-1 rounded-lg w-[200px] h-[240px] bg-[#FAFAFA] p-2'>
                  <h3 className='text-lg font-medium'>Psychological Safety</h3>
                  <div className='my-5 mx-3 w-[150px] flex flex-col justify-center items-center'>
                    <CircularPercentage percentage={60} />
                    <h3>↓ 5%</h3>
                  </div>
                </div>
                <div className='m-1 rounded-lg w-[200px] h-[240px] bg-[#FAFAFA] p-2'>
                  <h3 className='text-lg font-medium'>Innovation</h3>
                  <div className='my-5 mx-3 w-[150px] flex flex-col justify-center items-center'>
                    <CircularPercentage percentage={72} />
                    <h3>↑ 22%</h3>
                  </div>
                </div>
                <div className='m-1 rounded-lg w-[200px] h-[240px] bg-[#FAFAFA] p-2'>
                  <h3 className='text-lg font-medium'>Burnout</h3>
                  <div className='my-5 mx-3 w-[150px] flex flex-col justify-center items-center'>
                    <CircularPercentage percentage={38} />
                    <h3>↓ 25%</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
