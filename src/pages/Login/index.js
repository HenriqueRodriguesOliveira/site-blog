// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// Images
import Logo from '../../svg/blog-logo2.svg'

const Login = () => {
    return(
        <>
        
        <Header />
        
        <section className="container">
            <div className="row flex-center">
                <div className="grid-4 ">
                    <div className="flex-center">
                        <img src={Logo} className="icon-l" alt="" />
                    </div>

                    <h6 className="text-center">Olá, faça o login para continuar.</h6>

                    <form>
                        <input className="mt-3" type="text" name="user" placeholder="Digite seu usuário" />
                        <input className="mt-2" type="password" name="password" placeholder="Digite sua senha" />
                        
                        <div className="my-1 p-2 card-danger">
                            <h6 className="h7 color-red">Olá, isso é uma mensagem de erro</h6>
                        </div>
                        <div className="my-1 p-2 card-success">
                            <h6 className="h7 color-green">Olá, isso é uma mensagem de erro</h6>
                        </div>
                        <div className="my-1 p-2 card-warning" >
                            <h6 className="h7 color-yellow">Olá, isso é uma mensagem de erro</h6>
                        </div>
                        <div className="my-1 p-2 card-info" >
                            <h6 className="h7 color-primary">Olá, isso é uma mensagem de erro</h6>
                        </div>

                        <button className="btn w-100 mt-3">Entrar</button>
                        
                    </form>
        
                </div> 
            </div>
        </section>

        <Footer />

        </>
    );
}


export default Login;