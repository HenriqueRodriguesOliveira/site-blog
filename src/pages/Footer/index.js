import logo from '../../svg/blog-logo2.svg';

const Footer = () => {
    return(
        <>
        <section className="bg-section bb-black">
            <div className="row bb-black pb-3">
                <div className="flex-center">
                    <img src={logo} alt="" className="icon-l mt-8" />
                </div>

                <div className="grid-3">
                <div className="flex-start-column m-4 mt-5 p-0">
                <h4 className="">Posts</h4>
                <a href="" className="color-gray mt-2">Mais vistos</a>
                <a href="" className="color-gray mt-2">Mais comentados</a>
                <a href="" className="color-gray mt-2">Mais populares</a>
                <a href="" className="color-gray mt-2">Mais recentes</a>
                </div>
            </div>
                
            <div className="grid-3">
                <div className="flex-start-column m-4 mt-5 p-0">
                    <h4 className="">Categorias</h4>
                    <a href="" className="color-gray mt-2">Tecnologia</a>
                    <a href="" className="color-gray mt-2">Games</a>
                    <a href="" className="color-gray mt-2">fotografia</a>
                    <a href="" className="color-gray mt-2">Cinema</a>
                </div>
                </div>

                <div className="grid-6 mt-6">
                    <h4 className="mb-2">Quer ser avisado dos novos posts do blog?</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the </p>
                    <form className="flex-start-row mt-2">
                        <input type="text" name="search" placeholder="Digite seu e-mail aqui" />
                        <button className="btn ml-2">Cadastrar</button>
                    </form>
                </div>
            </div>
                
                <div className="row">
                    <div className="grid-9">
                    <p>2021 | Todos os direitos reservados. Projeto de React.js do curso <span>FrontPUSH.</span></p>
                    </div>

                    <div className="grid-3">
                        <img src="svg/icon-facebook.svg" alt="" className="icon-s" />
                        <img src="svg/icon-instagram.svg" alt="" className="icon-s" />
                        <img src="svg/icon-youtube.svg" alt="" className="icon-s" />
                        <img src="svg/icon-twitter.svg" alt="" className="icon-s" />
                    </div>

                </div>
            </section>
        </>
    );
}

export default Footer;