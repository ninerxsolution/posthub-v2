import BackofficeLeftSidebar from "@/components/backoffice/LeftSidebar";
import BackofficeNavbar from "@/components/backoffice/Navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function BackofficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <BackofficeLeftSidebar />
      <SidebarInset>
        <BackofficeNavbar />
        <div className="p-4 md:p-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
