import { Profile } from 'components/Profile/Profile';
import user from 'components/user';
import data from 'components/data';
import { Statistics } from 'components/Statistics/Statistics';
import friends from 'components/friends';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/transactions';

export const App = () => {
  return (
    <>
      <Profile
        userName={user.username}
        userTag={user.tag}
        userLocation={user.location}
        userAvatar={user.avatar}
        userStats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
