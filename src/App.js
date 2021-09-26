import userData from "./components/social-profile/user";
import SocialProfile from "./components/social-profile/Social-profile";
import statsData from "./components/statistics/statistical-data.json";
import Statistic from "./components/statistics/Statistic";
import friendsData from "./components/friend-list/friends.json";
import Friends from "./components/friend-list/Friends";
import transactionsData from "./components/transaction-history/transactionsData.json";
import Transactions from "./components/transaction-history/Transactions";

function App() {
  return (
    <div className="components-wrapper">
      <SocialProfile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistic stats={statsData} title="Upload stats" />
      <Friends arr={friendsData} />
      <Transactions items={transactionsData} />
    </div>
  );
}

export default App;
