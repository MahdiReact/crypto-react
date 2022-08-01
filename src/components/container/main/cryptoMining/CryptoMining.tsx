import React from "react";
import CryptoMiningArticle from "./cryptoMiningArticle/CryptoMiningArticle";

const CryptoMining = () => {
       return (
              <>
                     {/* start of crypto mining news*/}
                     <section className="main-crypto-mining-news">
                            <h2 className="title">CRYPTO MINING NEWS</h2>
                            <section className="main-crypto-mining-news-container">
                                   <CryptoMiningArticle
                                          img={"./images/crypto-news-2-600x450.jpg"}
                                          title={"2017 Market Performance: Crypto vs Stock"}
                                   />
                                   <CryptoMiningArticle
                                          img={"./images/crypto-news-1-600x450.jpg"}
                                          title={"2017 Market Performance: Crypto vs Stock"}
                                   />
                            </section>
                            {/* end of mining news conntainer*/}
                     </section>
                     {/* end of a mining news*/}
              </>
       );
};

export default CryptoMining;
