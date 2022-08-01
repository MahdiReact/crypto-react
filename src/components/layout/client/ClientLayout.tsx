import { ReactElement } from "react";
import { JsxElement } from "typescript";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";

interface ClientLayout {
    children : ReactElement
}

const ClientLayout : React.FC<ClientLayout> = ({children}) => {
  return(
    <>
         <Header/>
         {children}
        <Footer/>
    </>
  );
};

export default ClientLayout;
