import React from "react";

interface CMA {
    img : string,
    title : string
}

const CryptoMiningArticle : React.FC<CMA> = ({img , title}) => {
       return (
              <>
                     {/* start of a mining news*/}
                     <article>
                            <img className="main-news-img" src={img}/>
                            <h3 className="article-title">
                                   <a href="#">{title}</a>
                            </h3>
                            <ul className="info-bar">
                                   <li>
                                          <span className="text-muted">
                                                 by
                                                 <a href="#">
                                                        <b className="text-black">Olivia Capzallo</b>
                                                 </a>
                                                 , Jan 25,2018
                                          </span>
                                   </li>
                                   <li>
                                          <i className="fa fa-bolt text-yellow"></i>
                                          30,190
                                   </li>
                                   <li>
                                          <i className="fa fa-comment text-yellow"></i>
                                          30
                                   </li>
                            </ul>
                     </article>
                     {/* end of a mining news*/}
              </>
       );
};

export default CryptoMiningArticle;
