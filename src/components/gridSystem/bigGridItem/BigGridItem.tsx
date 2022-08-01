interface BGI {
       img: string,
       children: string
}

const BigGridItem:React.FC<BGI> = ({img,children}) => {
       return (
              <>
                     {/* .col-2-3 is the biggest one*/}
                     <section className="col-2-3 grid-system-item">
                            <img src={img} className="grid-system-item-img" />
                            <section className="grid-system-item-desc">
                                   <a href="#">
                                          <h1>{children}</h1>
                                   </a>
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
                                                 <i className="fa fa-bolt text-yellow"></i>30,190
                                          </li>
                                          <li>
                                                 <i className="fa fa-comment text-yellow"></i>30
                                          </li>
                                   </ul>
                            </section>
                     </section>
                     {/* end of .col-2-3 the biggest one*/}
              </>
       );
};

export default BigGridItem;
