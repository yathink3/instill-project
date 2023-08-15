import { cn } from '@/lib/utils';

import { ReactComponent as XFrameDashIcon } from '@/assets/x-base-one-line-frame-dash.svg';
import { ReactComponent as XLineChartIcon } from '@/assets/x-base-one-line-icon.svg';
import { ReactComponent as XPieChartIcon } from '@/assets/x-base-one-line-chart-pie.svg';
import { ReactComponent as XOneWaveIcon } from '@/assets/x-base-one-wave-icon.svg';
import { ReactComponent as XPeopleIcon } from '@/assets/x-base-one-line-people.svg';
import { ReactComponent as XBriefCaseIcon } from '@/assets/x-base-one-line-line-rounded-briefcase.svg';
import { ReactComponent as XBulbIcon } from '@/assets/x-base-one-line-light-bulb.svg';
import { ReactComponent as XInstillIcon } from '@/assets/x-base-one-line-instill-icon.svg';
import { ReactComponent as XUserIcon } from '@/assets/x-base-one-line-user.svg';
import { ReactComponent as XBellIcon } from '@/assets/x-base-one-line-bell.svg';

const iconsObj = {
  'frame-dash': XFrameDashIcon,
  'line-chart': XLineChartIcon,
  'pie-chart': XPieChartIcon,
  'one-wave': XOneWaveIcon,
  people: XPeopleIcon,
  'brief-case': XBriefCaseIcon,
  bulb: XBulbIcon,
  instill: XInstillIcon,
  user: XUserIcon,
  bell: XBellIcon,
};

export type IconType = keyof typeof iconsObj;

interface NavItemProps {
  iconType: IconType;
  selectedKey?: IconType;
  url?: string;
  onSelect: (v?: IconType) => void;
}

function NavItem({ iconType, selectedKey, url = '', onSelect }: NavItemProps) {
  const Icon = iconsObj[iconType];
  const selected = iconType === selectedKey;

  return (
    <li className={cn('mt-2 mb-2 w-12 h-8 p-1 mx-auto', selected && 'rounded-lg  bg-gray-900')} onClick={() => onSelect?.(iconType)}>
      <a href={url || '#'}>
        <span className=''>{Icon ? <Icon className={cn('w-6 mb-3 mx-auto', selected && 'sel-icon')} /> : null}</span>
      </a>
    </li>
  );
}

NavItem.displayName = 'NavItem';

export default NavItem;
