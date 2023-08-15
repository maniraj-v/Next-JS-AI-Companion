"use client";

import { cn } from "@/lib/utils";
import { Home, Plus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const routes = [
  {
    href: "/",
    icon: Home,
    label: "Home",
  },
  {
    href: "/create-new",
    icon: Plus,
    label: "Create",
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onNavigate = (url: string) => {
    router.push(url)
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex-1 flex justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href)}
              key={route.href}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
