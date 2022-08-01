import React from "react";

interface PPA {
    img : string,
    children : string
}

const PopularPostArticle: React.FC<PPA> = ({img , children}) => {
       return (
              <>
                     <section className="popular-post">
                            <img src={img} />
                            <section className="popular-post-desc">
                                   <h3>
                                          <a href="#">
                                                 <b>{children}</b>
                                          </a>
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
                            </section>
                     </section>
              </>
       );
};

export default PopularPostArticle;
