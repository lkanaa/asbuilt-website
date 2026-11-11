import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import Script from 'next/script'; // <-- import Script component

export const metadata: Metadata = {
  title: "As-Built",
  description: "Servicios de Modelado 3D, BIM, Escaneo y Documentación",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
         {process.env.NODE_ENV === 'development' && process.env.PINY_VISUAL_SELECT === 'true' && (
         <Script
            src="/_piny/piny.phone.js"
            strategy="beforeInteractive" 
         />)} { /* <-- conditionally include the Piny script */ }
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}