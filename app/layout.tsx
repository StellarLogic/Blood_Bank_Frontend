import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthCheck from "./components/common/authCheck/AuthCheck";
import Container from "./components/common/container/Container";
import Header from "./components/common/header/Header";
import ProviderContainer from "./components/common/provider/ProviderContainer";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blood Bank",
  description: "Request for Blood from People",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
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
