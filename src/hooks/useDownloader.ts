import { useContext } from "react";
import DownloadManagerContext from "@/contexts/DownloadManagerContext"; "@/contexts/systemContext";

const useDownloader = () => useContext(DownloadManagerContext);

export default useDownloader;