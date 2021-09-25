import "./App.css";
import userData from "./social-profile/user";
import SocialProfile from "./social-profile/social-profile";
import statsData from "./statistics/statistical-data.json";
import Statistic from "./statistics/Statistic";
import friendsData from "./friend-list/friends.json";
import Friends from "./friend-list/Friends";
import transactionsData from "./transaction-history/transactionsData.json";
import Transactions from "./transaction-history/Transactions";

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
