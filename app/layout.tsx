import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Container from "./components/common/container/Container";

import Header from "./components/common/header/Header";
import ProviderContainer from "./components/common/provider/ProviderContainer";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blood Bank",
  description: "Request for Blood from People",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderContainer>
          <Container>
            <Header />
          </Container>
          {children}
        </ProviderContainer>
      </body>
    </html>
  );
}
