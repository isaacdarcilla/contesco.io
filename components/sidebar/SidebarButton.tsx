import Link from "next/link";

export default function SidebarButton({ children, divider = false }: { children: React.ReactNode, divider?: boolean }) {
  return (
    <>
      <div className={divider ? 'flex flex-col items-center mt-2 border-t-2 border-supabase' : ''}>
        <Link href="#" className="flex items-center justify-center w-10 h-10 mt-2 rounded hover:bg-supabase-hover hover:text-gray-300">
          {children}
        </Link>
      </div>
    </>
  )
}