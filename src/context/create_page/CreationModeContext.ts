import { createContext } from "react";
import CreationMode from "../../typing/types/CreationMode"

type Context = {
    action: CreationMode;
    setAction: (action: CreationMode) => void
}

const CreationModeContext = createContext<Context>({ action: "add", setAction: () => {} });

export default CreationModeContext;
