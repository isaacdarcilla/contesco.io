import SidebarButton from '@/components/sidebar/SidebarButton'
import { Inter } from '@next/font/google'
import { Home, Settings } from 'react-feather';
import Sidebar from '@/components/sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Dashboard() {
  return (
    <main className="bg-supabase">
      <Sidebar>
        <SidebarButton>
          <Home size={18} />
        </SidebarButton>
        <SidebarButton>
          <Settings size={18} />
        </SidebarButton>
        <SidebarButton divider={true}>
          <Settings size={18} />
        </SidebarButton>
      </Sidebar>
    </main>
  )
}
