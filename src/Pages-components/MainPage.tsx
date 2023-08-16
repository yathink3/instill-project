import AppleIcon from '@/assets/apple-logo-black-11.svg';
import InstillIcon from '@/assets/x-base-one-line-instill-icon.svg';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CircularPercentage from '@/components/ui/circular-percentage';
import HalfCircleCount from '@/components/ui/half-circle-count';

function MainPage() {
  return (
    <div>
      <div className='mx-2 md:mx-20'>
        <div className='flex items-center  mt-8 mb-5'>
          <div className='border-2 border-gray-300 bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-md'>
            <img src={AppleIcon} />
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
      <div className='mx-1 md:mx-20 mt-5'>
        <Card className='p-2 mt-5 mx-1 shadow-md'>
          <CardHeader>
            <h2 className='text-base font-medium text-[#666666]'>THIS MONTH</h2>
            <CardTitle className='text-3xl'>Culture Vital signs</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap justify-between'>
            <div className='m-1 rounded-lg w-[200px] h-[240px] bg-[#FAFAFA] p-3'>
              <h3 className='text-lg font-medium'>Inclusion</h3>
              <div className='my-5 mx-3 w-[150px] flex flex-col justify-center items-center'>
                <CircularPercentage percentage={25} />
                <h3 className='text-[#FF3B6B]'>↓ 25%</h3>
              </div>
            </div>
            <div className='m-1 rounded-lg w-[200px] h-[240px] bg-[#FAFAFA] p-3'>
              <h3 className='text-lg font-medium'>Trust</h3>
              <div className='my-5 mx-3 w-[150px] flex flex-col justify-center items-center'>
                <CircularPercentage percentage={85} />
                <h3 className='text-[#6ED29C]'>↑ 15%</h3>
              </div>
            </div>
            <div className='m-1 rounded-lg w-[200px] h-[240px] bg-[#FAFAFA] p-3'>
              <h3 className='text-lg font-medium'>Psychological Safety</h3>
              <div className='my-5 mx-3 w-[150px] flex flex-col justify-center items-center'>
                <CircularPercentage percentage={60} />
                <h3 className='text-[#6ED29C]'>↑ 5%</h3>
              </div>
            </div>
            <div className='m-1 rounded-lg w-[200px] h-[240px] bg-[#FAFAFA] p-3'>
              <h3 className='text-lg font-medium'>Innovation</h3>
              <div className='my-5 mx-3 w-[150px] flex flex-col justify-center items-center'>
                <CircularPercentage percentage={72} />
                <h3 className='text-[#FF3B6B]'>↓ 22%</h3>
              </div>
            </div>
            <div className='m-1 rounded-lg w-[200px] h-[240px] bg-[#FAFAFA] p-3'>
              <h3 className='text-lg font-medium'>Burnout</h3>
              <div className='my-5 mx-3 w-[150px] flex flex-col justify-center items-center'>
                <CircularPercentage percentage={38} />
                <h3 className='text-[#6ED29C]'>↑ 25%</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='mx-1 md:mx-20 mt-5 flex md:flex-grow'>
        <Card className='p-2 mt-2 mx-1 md:w-[50%] shadow-md'>
          <CardHeader>
            <div className='rounded-lg  bg-gray-900 w-[50px] h-[50px] flex justify-center items-center shadow-md mb-2'>
              <img src={InstillIcon} />
            </div>
            <CardTitle className='mt-4'>Instill Sense</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap'>
            <div className='border border-gray-300 m-1 rounded-lg md:w-[600px] md:h-[100px] p-2 flex flex-wrap justify-between'>
              <div className='w-[200px] flex flex-col justify-center p-3'>
                <h3 className='font-medium'>Upcoming Meetings</h3>
                <h1 className='text-4xl font-bold'>12</h1>
              </div>
              <div className='w-[200px] flex flex-col justify-center p-3'>
                <h3 className='font-medium'>New Summaries</h3>
                <h1 className='text-4xl font-bold'>03</h1>
              </div>
            </div>
            <div className='border border-gray-300 m-1 rounded-lg md:w-[600px] md:h-[200px] p-2'>
              <h3 className='font-medium p-3'>Meetings Sentiments</h3>
              <div className='flex flex-wrap justify-around'>
                <div className='m-1 w-[100px] h-[100px] p-2'>
                  <div className='my-1 w-[90px] flex flex-col justify-center items-center'>
                    <CircularPercentage percentage={62} color='green' />
                    <h3>Positive</h3>
                  </div>
                </div>
                <div className='m-1 w-[100px] h-[100px] p-2'>
                  <div className='my-1 w-[90px] flex flex-col justify-center items-center'>
                    <CircularPercentage percentage={30} color='yellow' />
                    <h3>Neutral</h3>
                  </div>
                </div>
                <div className='m-1 w-[100px] h-[100px] p-2'>
                  <div className='my-1 w-[90px] flex flex-col justify-center items-center'>
                    <CircularPercentage percentage={'08'} color='red' />
                    <h3>Negative</h3>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className='p-2 mt-2 mx-1 md:w-[50%] shadow-md'>
          <CardHeader>
            <h2 className='text-base font-medium text-[#666666]'>THIS MONTH</h2>
            <CardTitle className='text-3xl'>Pulse Survey</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap'>
            <div className='md:w-[600px] md:h-[200px] flex flex-wrap justify-between'>
              <div className='border border-gray-300 m-1 rounded-lg md:w-[48%] flex flex-col justify-center p-2'>
                <h3 className='font-medium p-2'>eNPS Score</h3>
                <div className='m-1 w-[250px] h-[100px] p-2 pt-0'>
                  <div className='my-1 w-[180px] flex flex-col justify-center items-center'>
                    <HalfCircleCount value={'+54'} />
                    <h4 className='mt-3'>Score is Excellent </h4>
                  </div>
                </div>
              </div>
              <div className='border border-gray-300 m-1 rounded-lg md:w-[48%] flex flex-col justify-center p-2'>
                <h3 className='font-medium p-2'>Support from Manager</h3>
                <div className='m-1 w-[250px] h-[100px] p-2 pt-0'>
                  <div className='my-1 w-[180px] flex flex-col justify-center items-center'>
                    <div className='flex h-[60px]  pt-2'>
                      <h2 className='font-bold text-[#333] text-4xl'>7.5</h2>
                      <h4 className='mt-4'>/10</h4>
                    </div>
                    <h3 className='mt-3'>Score {`>`} 7 is a Good one</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[600px] h-[200px] flex flex-wrap justify-between'>
              <div className='border border-gray-300 m-1 rounded-lg w-[48%] flex flex-col justify-center p-2'>
                <h3 className='font-medium p-2'>Mission & Values Alignment</h3>
                <div className='m-1 w-[250px] h-[100px] p-2 pt-0'>
                  <div className='my-1 w-[180px] flex flex-col justify-center items-center'>
                    <div className='flex h-[60px]  pt-2'>
                      <h2 className='font-bold text-[#333] text-4xl'>60</h2>
                      <h4 className='mt-4'>%</h4>
                    </div>
                    <h3 className='mt-3'>Score is Average</h3>
                  </div>
                </div>
              </div>
              <div className='border border-gray-300 m-1 rounded-lg w-[48%] flex flex-col justify-center p-2'>
                <h3 className='font-medium p-2'>Performance Feedback</h3>
                <div className='m-1 w-[250px] h-[100px] p-2 pt-0'>
                  <div className='my-1 w-[180px] flex flex-col justify-center items-center'>
                    <div className='flex h-[60px] pt-2'>
                      <h2 className='font-bold text-[#FF3B6B] text-4xl'>4.5</h2>
                      <h4 className='mt-4'>/10</h4>
                    </div>
                    <h3 className='mt-3'>Need focus on this </h3>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='mx-1 md:mx-20 mt-5'>
        <Card className='p-2 mt-5 mx-1 shadow-md'>
          <CardHeader>
            <h2 className='text-base font-medium text-[#666666]'>ADVANCE YOUR CULTURE WITH</h2>
            <CardTitle className='text-3xl'>Action Steps</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap'>
            <div className='border border-gray-300 m-1 rounded-lg w-[100%] p-2'>
              <div className='flex flex-row p-3'>
                <div className='h-10 w-10 m-2 mr-3'>
                  <div className='h-full w-full rounded-full mx-auto bg-gray-200'></div>
                </div>
                <div className='p-1 w-[80%]'>
                  <h2 className='font-bold'>Psychological Safety Alert on Sales Team</h2>
                  <h4 className=''>Share something vulnerable in your next team meeting. </h4>
                </div>
                <div className='p-1 flex items-center mr-0'>
                  <Button className='bg-black rounded-full p-1 px-3 text-white'>TAKE ACTION</Button>
                </div>
              </div>
              <hr className='bg-gray-300'></hr>
              <div className='flex flex-row p-3'>
                <div className='h-10 w-10 m-2 mr-3'>
                  <div className='h-full w-full rounded-full mx-auto bg-gray-200'></div>
                </div>
                <div className='p-1 w-[80%]'>
                  <h2 className='font-bold'>Psychological Safety Alert on Sales Team</h2>
                  <h4 className=''>Share something vulnerable in your next team meeting. </h4>
                </div>
                <div className='p-1 flex items-center mr-0'>
                  <Button className='bg-black rounded-full p-1 px-3 text-white'>TAKE ACTION</Button>
                </div>
              </div>
              <hr className='bg-gray-300'></hr>
              <div className='flex flex-row p-3'>
                <div className='h-10 w-10 m-2 mr-3'>
                  <div className='h-full w-full rounded-full mx-auto bg-gray-200'></div>
                </div>
                <div className='p-1 w-[80%]'>
                  <h2 className='font-bold'>Psychological Safety Alert on Sales Team</h2>
                  <h4 className=''>Share something vulnerable in your next team meeting. </h4>
                </div>
                <div className='p-1 flex items-center mr-0'>
                  <Button className='bg-black rounded-full p-1 px-3 text-white'>TAKE ACTION</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default MainPage;
