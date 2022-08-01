import React from "react";
import PopularPostArticle from "./popularPostArticle/PopularPostArticle";

const PopluarPosts = () => {
       return (
              <>
                     {/* start of popular news side bar item*/}

                     <section className="side-bar-item">
                            <h2 className="title">POPULAR POSTS</h2>
                            {/* every .popular-post belongs to articles in popular posts section*/}
                            <PopularPostArticle img="./images/polular-1-100x100.jpg">
                                   Bitcoin Billionars Hidding in Plain Sight
                            </PopularPostArticle>
                            <PopularPostArticle img="./images/polular-2-100x100.jpg">
                                   Bitcoin Billionars Hidding in Plain Sight
                            </PopularPostArticle>
                            <PopularPostArticle img="./images/polular-3-100x100.jpg">
                                   Bitcoin Billionars Hidding in Plain Sight
                            </PopularPostArticle>
                            <PopularPostArticle img="./images/polular-4-100x100.jpg">
                                   Bitcoin Billionars Hidding in Plain Sight
                            </PopularPostArticle>
                            
                     </section>
                     {/* end of popular news side bar item*/}
              </>
       );
};

export default PopluarPosts;
