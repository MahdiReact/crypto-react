import Container from "./components/container/Container";
import GridSystem from "./components/gridSystem/GridSystem";
import ClientLayout from "./components/layout/client/ClientLayout";

function App() {
       return (
              <>
                     <ClientLayout>
                            {/* .app is container of all */}
                            <section className="app">
                                   {/* .content is container of everything except header nav & footer*/}
                                   <section className="content">
                                          <GridSystem />
                                          <Container />
                                   </section>
                                   {/* end of .content*/}
                            </section>
                            {/* end of .app section*/}
                     </ClientLayout>
              </>
       );
}

export default App;
