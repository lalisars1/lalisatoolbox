/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useEffect, ReactNode } from "react";

interface DownloadItem {
  id: number;
  name: string;
  url: string;
}

interface DownloadContextType {
  downloadList: DownloadItem[];
  setDownloadList: (list: DownloadItem[]) => void;
  addDownload: (download: DownloadItem) => void;
  removeDownload: (itemId: number) => void;
  isDownloadExist: (url: string) => boolean;
}

const DownloadContext = createContext<DownloadContextType | undefined>(
  undefined
);

export const DownloadManagerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [downloadList, setDownloadList] = useState<any[]>([]);

  const addDownload = (newDownload: any) => {
    setDownloadList((prevList) => [...prevList, newDownload]);
  };

  const removeDownload = (downloadToRemove: any) => {
    setDownloadList((prevList) =>
      prevList.filter((download) => download !== downloadToRemove)
    );
  };

  const isDownloadExist = (url: string): boolean => {
    return downloadList.some((download) => download.url === url);
  };

  useEffect(() => {
    console.log(downloadList);
  }, [downloadList.length]);

  return (
    <DownloadContext.Provider
      value={{
        downloadList,
        setDownloadList,
        isDownloadExist,
        addDownload,
        removeDownload,
      }}
    >
      {children}
    </DownloadContext.Provider>
  );
};

export default DownloadContext;
