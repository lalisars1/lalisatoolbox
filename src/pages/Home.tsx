import { Button } from "@/components/ui/button";
import { useState } from "react";
import UpdateElectron from "@/components/update";
import useSystem from "@/hooks/useSystem";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const { username, osVersion } = useSystem();
  const [count, setCount] = useState(0);
  console.log(username);
  return (
    <div className="w-full text-left">
      <div className="bg-[url(/home.jpg)] bg-cover w-full h-[200px] mb-3"></div>
      <Separator orientation="horizontal" />
      <h4 className="scroll-m-20 text-[22px] font-semibold tracking-tight">
        Bem vindo(a) ao meu app. {username}!
      </h4>
      <div className="flex flex-col">
        <div className="mt-2">
          <div>
            <div>Parece que você está utilizando: </div>
            <b className="font-bold">
              {osVersion} <Button variant="outline">Ver Mais</Button>
            </b>
          </div>
        </div>
        <Separator className="mt-2 mb-2" orientation="horizontal" />
        <h1>
          Adicionei alguns atalhos para instalar programas e drivers no seu
          sistema.
        </h1>
        <br />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <UpdateElectron />
      </div>
    </div>
  );
}
