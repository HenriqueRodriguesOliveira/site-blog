// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// Images
import LogoBlog from "svg/blog.svg"


const About = () => {
    return(
        <>
        
        <Header />

        <section className="container">
        <div className="row">
            <div className="grid-6">
                <h1 className="h0 mt-80">blog <span>.</span></h1>
                <p className="mt-1">
                  O Blog é um projeto desenvolvido em React.js. Clique
                  abaixo para saber mais informações.
                </p>
                <a href="/" className="btn mt-4">Saber mais</a>
            </div>
            <div className="grid-6">
               <img src={LogoBlog} alt="" className="ilustration"/>
            </div>
        </div>
    </section>

        <Footer />
        </>
    );
}


export default About;