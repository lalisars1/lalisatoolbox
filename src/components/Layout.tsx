import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "./ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Minus } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Nav from "./Nav";

const Layout: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <div className="bg-background text-foreground border flex flex-col items-center w-screen h-screen">
      <div className="flex items-center w-full h-[45px]">
        <div className="flex w-full border-b">
          <div className="titlebar w-full h-[45px] flex items-center pl-3">
            Lalisa Tool Box
          </div>
          <div className="flex items-center justify-end pr-1">
            <ModeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.ipcRenderer.send("app-minimize")}
            >
              <Minus />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.ipcRenderer.send("app-close")}
            >
              <X />
            </Button>
          </div>
        </div>
      </div>
      <div className={`flex w-full h-full`}>
        <div className="flex w-full">
          <Nav />
          <ScrollArea className="w-full p-1">
            <Outlet />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Layout;
