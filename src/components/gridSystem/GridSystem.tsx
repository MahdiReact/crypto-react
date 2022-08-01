import BigGridItem from "./bigGridItem/BigGridItem";
import GridSystemItem from "./gridSystemItem/GridSystemItem";

const GridSystem = () => {
       return (
              <>
                     {/* start of grid system of header*/}
                     <section className="grid-system">
                            <BigGridItem img={"./images/slider-1-1200x900.jpg"}>
                                   Peter Thiels VC Found Invests Million info Bitcoin Market Reacts
                            </BigGridItem>
                            <GridSystemItem img="./images/slider-2-450x600.jpg">
                                   Russians Bisiops Condems Cryptocurrency
                            </GridSystemItem>
                            <GridSystemItem img="./images/slider-3-450x600.jpg">
                                   Bitcoin Adoption by Business in 2017
                            </GridSystemItem>
                            <GridSystemItem img="./images/slider-4-450x600.jpg">
                                   2017 Market Performance: Crypto vs Stock
                            </GridSystemItem>
                            <GridSystemItem img="./images/slider-5-450x600.jpg">
                                   Culture Stock: Bitcoin a part of alll Walks of life in 2017
                            </GridSystemItem>
                            <GridSystemItem img="./images/slider-6-450x600.jpg">
                                   Bitcoin Billionares Hidding in Plain Sight
                            </GridSystemItem>
                     </section>
                     {/* end of grid system of header*/}
              </>
       );
};

export default GridSystem;
