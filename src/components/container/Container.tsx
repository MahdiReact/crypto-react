import Main from "./main/Main";
import SideBar from "./sideBar/SideBar";


const Container = () => {
       return (
              <>
                     {/* .container contains main & sidebar of website*/}
                     <section className="container">
                            <Main/>
                            <SideBar/>
                     </section>
                     {/* end of .container*/}
              </>
       );
};

export default Container;
