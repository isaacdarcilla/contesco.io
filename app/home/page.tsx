import SidebarButton from "@/components/sidebar/SidebarButton";
import { Home, Settings } from "react-feather";
import Sidebar from "@/components/sidebar/Sidebar";
import NavBar from "@/components/navbar/NavBar";
import { Lora } from "@next/font/google";

const lora = Lora({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <main className={lora.className}>
      <div className="bg-primary h-screen w-full flex overflow-hidden">
        <Sidebar>
          <SidebarButton content="Home" link="/home">
            <Home size={18} />
          </SidebarButton>
          <SidebarButton content="Setting" link="/home">
            <Settings size={18} />
          </SidebarButton>
        </Sidebar>

        <NavBar />
      </div>
    </main>
  );
}
