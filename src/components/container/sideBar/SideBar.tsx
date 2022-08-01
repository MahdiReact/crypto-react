import React from "react";
import NewsLetter from "./newsLetter/NewsLetter";
import PopluarPosts from "./popluarPosts/PopluarPosts";

const SideBar = () => {
       return (
              <>
                     {/* start of side bar*/}
                     <aside className="side-bar">
                            <PopluarPosts />

                            <NewsLetter />
                     </aside>
                     {/* end of side bar*/}
              </>
       );
};

export default SideBar;
