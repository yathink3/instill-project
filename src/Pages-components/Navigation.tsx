import InstillLogo from '../assets/instill-logo-1.png';
import XFrameDashIcon from '../assets/x-base-one-line-frame-dash.svg';
import XLineChartIcon from '../assets/x-base-one-line-icon.svg';
import XPieChartIcon from '../assets/x-base-one-line-chart-pie.svg';
import XOneWaveIcon from '../assets/x-base-one-wave-icon.svg';
import XPeopleIcon from '../assets/x-base-one-line-people.svg';
import XBriefCaseIcon from '../assets/x-base-one-line-line-rounded-briefcase.svg';
import XBulbIcon from '../assets/x-base-one-line-light-bulb.svg';
import XInstillIcon from '../assets/x-base-one-line-instill-icon.svg';
import XUserIcon from '../assets/x-base-one-line-user.svg';
import XBellIcon from '../assets/x-base-one-line-bell.svg';

function Navigation() {
  return (
    <>
      {/* <div class='bg-gray-500 flex flex-col h-screen'>
        <div class='flex h-32 bg-gray-200'></div>
        <div class='flex-1 w-2/3 mx-auto p-4 text-lg bg-white h-full shadow-lg bg-gray-300'></div>
      </div> */}
      <div className='flex flex-row h-full'>
      <nav className='w-20 flex flex-col bg-black'>
        <div className=''>
          <div className='mt-5 mb-5'>
            <a href='#'>
              <img src={InstillLogo} className='w-10 mb-3 mx-auto' alt='Instill' />
            </a>
          </div>

          <div className='mt-4'>
            <ul>
              <li className='mb-4'>
                <a href='#'>
                  <span className='w-12 rounded-lg bg-slate-700'>
                    <img src={XFrameDashIcon} className='w-6 mb-3 mx-auto' alt='Instill' />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className='mt-10'>
            <ul>
              <li className='mb-4'>
                <a href='#'>
                  <span>
                    <img src={XLineChartIcon} className='w-6 mb-3 mx-auto' alt='Instill' />
                  </span>
                </a>
              </li>
              <li className='mb-4'>
                <a href='#'>
                  <span>
                    <img src={XPieChartIcon} className='w-6 mb-3 mx-auto' alt='Instill' />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className='mt-10'>
            <ul>
              <li className='mb-4'>
                <a href='#'>
                  <span>
                    <img src={XOneWaveIcon} className='w-6 mb-3 mx-auto' alt='Instill' />
                  </span>
                </a>
              </li>
              <li className='mb-4'>
                <a href='#'>
                  <span>
                    <img src={XPeopleIcon} className='w-6 mb-3 mx-auto' alt='Instill' />
                  </span>
                </a>
              </li>
              <li className='mb-4'>
                <a href='#'>
                  <span>
                    <img src={XBriefCaseIcon} className='w-6 mb-3 mx-auto' alt='Instill' />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className='mt-10'>
            <ul>
              <li className='mb-4'>
                <a href='#'>
                  <span>
                    <img src={XBulbIcon} className='w-6 mb-3 mx-auto' alt='Instill' />
                  </span>
                </a>
              </li>
              <li className='mb-4'>
                <a href='#'>
                  <span>
                    <img src={XInstillIcon} className='w-6 mb-3 mx-auto' alt='Instill' />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='h-2/3 flex flex-col justify-center'>
          <div>
            <ul>
              <li className='mb-4'>
                <a href='#'>
                  <span>
                    <img src={XUserIcon} className='w-6 mb-3 mx-auto' alt='Instill' />
                  </span>
                </a>
              </li>
              <li className='mb-4'>
                <a href='#'>
                  <span>
                    <img src={XBellIcon} className='w-6 mb-3 mx-auto' alt='Instill' />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen'></div>
    </div>
    </>
  );
}

export default Navigation;
