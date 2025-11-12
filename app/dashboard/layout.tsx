import { Menu } from "@/components/layout/menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <Menu />
      {children}
    </div>
  );
}
