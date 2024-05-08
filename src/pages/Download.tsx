import drivers from "@/assets/data/drivers.json";
import { Button } from "@/components/ui/button";
import useDownloader from "@/hooks/useDownloader";
import { DownloadIcon } from "lucide-react";
import { useParams } from "react-router-dom";

export default function Download() {
  const { category } = useParams();
  const { addDownload, removeDownload, isDownloadExist } = useDownloader();
  return (
    <div className="text-left">
      {category === "drivers" && (
        <div className="w-full flex w-full">
          {drivers.map((driver, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 items-center justify-center border p-2"
            >
              <DownloadIcon size={50} />
              <div>{driver.name}</div>
              {driver.servers.map((server, serverIndex) => (
                <div className="flex-1" key={serverIndex}>
                  {isDownloadExist(server.url) ? (
                    <Button>Na Fila</Button>
                  ) : (
                    <Button
                      onClick={() =>
                        addDownload({
                          name: driver.name,
                          url: server.url,
                        })
                      }
                    >
                      Baixar
                    </Button>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
