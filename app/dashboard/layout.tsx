import { Header } from "@/components/layout/header";
import { Menu } from "@/components/layout/menu";
import { SidebarProvider } from "@/contexts/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Menu className="hidden md:flex" />
      <div className="grid grid-rows-[auto_1fr]">
        <Header />
        {children}
      </div>
    </SidebarProvider>
  );
}
