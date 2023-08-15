import NavItem from '@/components/ui/NavItem';
import { type IconType } from '@/components/ui/NavItem';
import InstillLogo from '@/assets/instill-logo-1.png';
import { useState } from 'react';

function Navigation() {
  const [selectedKey, setSelectedkey] = useState<IconType | undefined>('frame-dash');
  return (
    <nav className='w-20 flex flex-col bg-black'>
      <div className=''>
        <div className='mt-5 mb-5'>
          <a href='#'>
            <span className=''>
              <img src={InstillLogo} className=' w-10 mb-3 mx-auto' />
            </span>
          </a>
        </div>
        <div className='mt-4'>
          <ul>
            <NavItem iconType='frame-dash' selectedKey={selectedKey} onSelect={setSelectedkey} />
          </ul>
        </div>
        <div className='mt-10'>
          <ul>
            <NavItem iconType='line-chart' selectedKey={selectedKey} onSelect={setSelectedkey} />
            <NavItem iconType='pie-chart' selectedKey={selectedKey} onSelect={setSelectedkey} />
          </ul>
        </div>
        <div className='mt-10'>
          <ul>
            <NavItem iconType='one-wave' selectedKey={selectedKey} onSelect={setSelectedkey} />
            <NavItem iconType='people' selectedKey={selectedKey} onSelect={setSelectedkey} />
            <NavItem iconType='brief-case' selectedKey={selectedKey} onSelect={setSelectedkey} />
          </ul>
        </div>
        <div className='mt-10'>
          <ul>
            <NavItem iconType='bulb' selectedKey={selectedKey} onSelect={setSelectedkey} />
            <NavItem iconType='instill' selectedKey={selectedKey} onSelect={setSelectedkey} />
          </ul>
        </div>
      </div>
      <div className='h-2/3 flex flex-col justify-center'>
        <div>
          <ul>
            <NavItem iconType='user' selectedKey={selectedKey} onSelect={setSelectedkey} />
            <NavItem iconType='bell' selectedKey={selectedKey} onSelect={setSelectedkey} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
