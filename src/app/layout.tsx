import {ReactNode} from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
};

// Desde que tenemos una página `not-found.tsx` en la raíz, se requiere un archivo de layout, incluso si solo pasa los hijos a través de él.
export default function RootLayout({children}: Props) {
  return children;
}
