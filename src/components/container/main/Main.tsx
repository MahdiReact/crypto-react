import React from "react";
import CryptoMining from "./cryptoMining/CryptoMining";
import MainNews from "./mainNews/MainNews";

const Main = () => {
       return (
              <>
                     {/* start of main base*/}
                     <main className="main">
                            <MainNews/>
                            <CryptoMining/>
                     </main>
                     {/* end of main base*/}
              </>
       );
};

export default Main;
