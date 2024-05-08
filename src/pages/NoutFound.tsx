import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap justify-center items-center w-full h-full z-10">
        <div className="m-10">
          <h1 className="text-[99px] text-primary">Ops!</h1>
          <div>Não encontramos o que você procurou!</div>
        </div>
        <div className="flex flex-col justify-center mt-6">
          <h1>O que pode ter acontecido?</h1>
          <li>O conteúdo não está mais no ar.</li>
          <li>Você digitou o endereço errado.</li>
          <li>A página foi abduzida!</li>
          <Button className="mt-3" onClick={() => navigate("/")}>
            voltar ao inicio
          </Button>
        </div>
      </div>
    </>
  );
}
