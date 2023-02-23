import SidebarButton from '@/components/sidebar/SidebarButton'
import { Home, Settings } from 'react-feather';
import Sidebar from '@/components/sidebar/Sidebar';
import NavBar from '@/components/navbar/NavBar';

export default function Dashboard() {
  return (
    <main className="bg-primary h-screen w-ful relative flex overflow-hidden">
      <Sidebar>
        <SidebarButton content='Home'>
          <Home size={18} />
        </SidebarButton>
        <SidebarButton content='Setting'>
          <Settings size={18} />
        </SidebarButton>
      </Sidebar>

      <NavBar />
    </main>
  )
}
