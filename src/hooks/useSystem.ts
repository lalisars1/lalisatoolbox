import { useContext } from "react";
import SystemContext from "@/contexts/systemContext";

const useSystem = () => useContext(SystemContext);

export default useSystem;