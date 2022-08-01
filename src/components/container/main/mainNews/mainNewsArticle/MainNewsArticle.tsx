import React from "react";

interface MNA {
       img : string,
       title : string,
       children : string
}

const MainNewsArticle: React.FC<MNA>= ({img , title , children}) => {
       return (
              <>
                     {/* start of a news*/}
                     <article>
                            <img className="main-news-img" src={img} />
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
                            <p>
                                 {children}
                            </p>
                     </article>
                     {/* end of a news*/}
              </>
       );
};

export default MainNewsArticle;
