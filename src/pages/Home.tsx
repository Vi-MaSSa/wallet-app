import SidebarContainer from "../components/SidebarContainer";
import HomeCard from "../components/HomeCard";
import BalanceWidget from "../components/widgets/BalanceWidget";
import HelloCard from "../components/widgets/HelloCard";
import TransactionsWidget from "../components/widgets/TransactionsWidget";

export default function Home() {
  return (
    <SidebarContainer>
      <HomeCard>
        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-5 shadow-sm border border-black/5 dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="self-end-top md:order-2">
              <HelloCard />
            </div>

            <div className="md:order-1">
              <BalanceWidget />
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {/* widgets futuros */}
            <TransactionsWidget />
          </div>
        </div>
      </HomeCard>
    </SidebarContainer>
  );
}
