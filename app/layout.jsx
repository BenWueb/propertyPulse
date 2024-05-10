import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPUlse | Find The Perfect Rental",
  description: "Find the perfect rental property in your area.",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
