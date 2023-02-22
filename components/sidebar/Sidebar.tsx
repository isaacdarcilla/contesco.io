import SidebarButton from "./SidebarButton";

export default function Sidebar({ children, ...props }: {
  children?: React.ReactNode
}) {
  return (
    <>
      <div className="flex flex-col items-center w-14 overflow-hidden text-gray-400 bg-supabase h-screen border-r border-supabase">
        <SidebarButton>
          <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        </SidebarButton>
        <div className="flex flex-col items-center mt-2 border-t-2 border-supabase">
          {children}
        </div>
      </div>
    </>
  )
}