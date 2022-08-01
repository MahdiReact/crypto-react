interface FLI {
    title : string,
    date: string
}

const FooterLinkItem: React.FC<FLI> = ({title , date}) => {
       return (
              <>
                     <section className="footer-section-link-item">
                            <a href="#">{title}</a>

                            <p>{date}</p>
                     </section>
              </>
       );
};

export default FooterLinkItem;
