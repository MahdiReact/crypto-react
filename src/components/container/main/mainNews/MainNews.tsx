import MainNewsArticle from "./mainNewsArticle/MainNewsArticle";

const MainNews = () => {
       return (
              <>
                     {/* .main-news is the biggest news in main base*/}
                     <section className="main-news">
                            <h2 className="title">RECENT NEWS</h2>
                            <MainNewsArticle
                                   img={"./images/recent-news-1-600x450.jpg"}
                                   title={"2017 Market Performance: Crypto vs Stock"}
                            >
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae numquam nisi
                                   vero accusamus, delectus dicta, a facilis ducimus iste, natus et in porro quam
                                   fugiat.
                            </MainNewsArticle>
                     </section>
                     {/* .main-news ends here*/}
              </>
       );
};

export default MainNews;
