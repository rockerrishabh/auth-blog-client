import { Fragment, useEffect } from "react";
import Header from "./header.tsx";

type Props = {
  children: React.ReactNode;
  title?: string;
};

function Layout({ children, title }: Props) {
  useEffect(() => {
    if (title) {
      document.title = `${title} - Coding Duniya`;
    } else {
      document.title = "Coding Duniya";
    }
  }, [title]);
  return (
    <Fragment>
      <Header />
      <main className="font-poppins mx-auto mt-5 max-w-7xl">{children}</main>
    </Fragment>
  );
}

export default Layout;
