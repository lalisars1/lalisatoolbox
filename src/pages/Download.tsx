import drivers from "@/assets/data/drivers.json";
import { Button } from "@/components/ui/button";
import useDownloader from "@/hooks/useDownloader";
import { DownloadIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

interface Application {
  name: string;
  description: string;
  servers: Server[];
}

interface Server {
  name: string;
  url: string;
}

export default function Download() {
  const [data, setData] = useState<Application>([]);
  const { category } = useParams();
  const { addDownload, removeDownload, isDownloadExist } = useDownloader();

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/lalisars1/toolbox/main/${category}.json`
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao obter os dados:", error);
      });
  }, [category]);
  return (
    <div className="text-left">
      <div className="w-full flex w-full">
        {data !== undefined &&
          data.map((driver: any, index: number) => (
            <div
              key={index}
              className="flex flex-col flex-1 items-center justify-center border p-2"
            >
              <DownloadIcon size={50} />
              <div>{driver.name}</div>
              <div className="flex">
                {driver.servers.map((server: Server, serverIndex: number) => (
                  <div className="flex-1 m-1" key={serverIndex}>
                    {isDownloadExist(driver.name) ? (
                      <Button>Na Fila</Button>
                    ) : (
                      <>
                        <Button
                          onClick={() =>
                            addDownload({
                              name: driver.name,
                              url: server.url,
                            })
                          }
                        >
                          Baixar | {server.name}
                        </Button>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
