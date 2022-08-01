import React from "react";

const NewsLetter = () => {
       return (
              <>
                     {/* start of newsletter side bar item*/}
                     <section className="side-bar-item">
                            <h2 className="title">NEWSLETTER</h2>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, ducimus itaque</p>

                            <form className="subscribe-form">
                                   <input type="text" placeholder="Your E-mail" className="subscribe-form-text" />
                                   <button>
                                          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                   </button>
                                   <section className="clear-fix"></section>
                            </form>
                     </section>
                     {/* end of newsletter side bar item*/}
              </>
       );
};

export default NewsLetter;
