import { createContext } from 'react'

interface ThemeContextInterface {
    name: string;
}

export const DefaultThemeContext: ThemeContextInterface = {
    name: "theme1",
}
  
export const ThemeCtx = createContext<ThemeContextInterface>({ name: "theme1"});