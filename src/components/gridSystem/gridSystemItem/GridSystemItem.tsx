
interface GSI {
    img : string,
    children : string
}

const GridSystemItem: React.FC<GSI> = ({img,children}) => {
       return (
              <>
                     <section className="grid-system-item">
                            <img src={img} className="grid-system-item-img" />
                            <section className="grid-system-item-desc">
                                   <a href="#">
                                          <h1>{children}</h1>
                                   </a>
                                   <ul className="info-bar">
                                          <li>Jan 25,2018</li>
                                          <li>
                                                 <i className="fa fa-bolt text-yellow"></i>30,190
                                          </li>
                                          <li>
                                                 <i className="fa fa-comment text-yellow"></i>30
                                          </li>
                                   </ul>
                            </section>
                     </section>
              </>
       );
};

export default GridSystemItem;
