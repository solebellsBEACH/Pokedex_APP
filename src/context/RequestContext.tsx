import React, { createContext } from "react";
import { IRequestContextProps, IRequestContextProviderProps } from "../utils/interfaces";


export const RequestContext = createContext<IRequestContextProps>(
    {} as IRequestContextProps
);


export function RequestContextProvider({
    children
}: IRequestContextProviderProps): JSX.Element {

    return (
        <RequestContext.Provider
            value={{
            }}
        >
            {children}
        </RequestContext.Provider>
    );
}