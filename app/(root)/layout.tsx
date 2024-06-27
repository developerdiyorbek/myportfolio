import { ChildProps } from "@/types";
import Navbar from "./_components/Navbar";

const Layout = ({ children }: ChildProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto">{children}</main>
    </>
  );
};

export default Layout;
