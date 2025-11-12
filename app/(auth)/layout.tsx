import { Toaster } from "sonner";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-app-neutral-100 min-h-dvh grid px-4">{children}</div>
      <Toaster richColors />
    </div>
  );
}
