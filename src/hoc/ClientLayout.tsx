import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ClientLayout(Component: React.FC<any>) {
  return function NewComponent<T>(props: T) {
    return (
      <>
        <Header />
        <Component {...props} />
        <Footer />
      </>
    );
  };
}
