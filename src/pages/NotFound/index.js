// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// Image
import logo from 'svg/blog-logo2.svg'; 

// Link
import { Link } from 'react-router-dom';


const NotFound = () => {
    return(
        <>
        
        <Header />
        
        <section className="container flex-center-column">
        <div className="row grid-5">
        <div className="flex-center">
            <img src={logo} alt="" className="icon-l" />
        </div>
        <div className="text-center">
            <h1 className="color-primary mt-4">404</h1>
            <h6>Página não encontrada!</h6>
            <p>A página que você tá procurando não existe ou foi removida. Clique
                para voltar para o site.
            </p>
        </div>
        <Link to="/" className="btn w-100 mt-2">Voltar p/ home</Link>
        </div>
        </section>

        <Footer />

        </>
    );
}


export default NotFound;