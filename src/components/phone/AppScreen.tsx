import type { ScreenId } from '../../data/app';
import { BusinessDetailsScreen } from './screens/BusinessDetailsScreen';
import { CashbackScreen } from './screens/CashbackScreen';
import { DiscoverScreen } from './screens/DiscoverScreen';
import { HomeScreen } from './screens/HomeScreen';
import { PaymentScreen } from './screens/PaymentScreen';
import { PaymentSuccessScreen } from './screens/PaymentSuccessScreen';
import { RewardsScreen } from './screens/RewardsScreen';

export function AppScreen({ screenId }: { screenId: ScreenId }) {
  switch (screenId) {
    case 'home':
      return <HomeScreen />;
    case 'discover':
      return <DiscoverScreen />;
    case 'business':
      return <BusinessDetailsScreen />;
    case 'payment':
      return <PaymentScreen />;
    case 'success':
      return <PaymentSuccessScreen />;
    case 'cashback':
      return <CashbackScreen />;
    case 'rewards':
      return <RewardsScreen />;
  }
}
