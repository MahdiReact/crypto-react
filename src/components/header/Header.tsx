import { useState } from "react";
import HeaderMenu from "./headerMenu/HeaderMenu";

const Header = () => {
    const [isOpen, setIsOpen] = useState(true);
       return (
              <>
                     {/* start of header*/}
                     <header className="app">
                            <nav>
                                   {/* header logo*/}
                                   <img src="./images/logo-black.png" alt="header-logo" className="header-logo" />
                                   {/* this button is for burger menu*/}
                                   <button className="header-menu-burger" onClick={() => setIsOpen(!isOpen)}>
                                          <i className="fa fa-bars"></i>
                                   </button>
                                   {/* start of header nav*/}
                                   {isOpen ? (
                                          <HeaderMenu/>
                                   ) : null}
                                   {/* .clear-fix is for solving float problem*/}
                                   <section className="clear-fix"></section>
                            </nav>
                            {/* end of header nav*/}
                     </header>
                     {/* end of header*/}
              </>
       );
};

export default Header;
