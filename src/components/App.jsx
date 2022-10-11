import { Profile } from "components/Profile/Profile"
import user from "components/user"
import data from "components/data"
import { Statistics } from "components/Statistics/Statistics"
import friends from "components/friends"
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import transactions 

export const App = () => {
  return (
    <>
    <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
       <FriendList friends={friends} />
     <TransactionHistory items ={items } />
    </>

    
      
  );
};
