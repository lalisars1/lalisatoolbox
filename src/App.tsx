import "@/styles/App.css";
import "@/styles/globals.css";
import Router from "./Router";
import { ThemeProvider } from "./components/theme-provider";
import { SystemProvider } from "./contexts/systemContext";
import { DownloadManagerProvider } from "./contexts/DownloadManagerContext";
function App() {
  return (
    <>
      <SystemProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <DownloadManagerProvider>
            <Router />
          </DownloadManagerProvider>
        </ThemeProvider>
      </SystemProvider>
    </>
  );
}

export default App;
