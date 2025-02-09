import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <section className="mx-auto flex h-screen max-w-[425px] flex-col">
      <Header />
      <article className="flex-1">
        <main>{children}</main>
      </article>
      <Footer />
    </section>
  );
}

export default Layout;
