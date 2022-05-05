
const Banner = () => {
    return(
     <>
        <section className="container">
            <div className="text-center">
                <h1>Categorias</h1>
            </div>
            <div className="img-banner hidden mt-6">
                <img src="img/02.png" alt=""/>
            </div>
            <div className="row mt-3">
                <h6 className="color-gray text-center">01 FEV 2022</h6>
                <h6 className="uppercase color-primary text-center">tecnologia</h6>
            
                <h4 className="text-center">Air Pods Pro vs. Air Pods 3º geração</h4>
                <p className="text-center mt-1">
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the 
                </p>
                <div className="my-3 text-center">
                    <a href="" className="link-simples link color-primary">Ler mais</a>
                </div>
            </div>


            <div className="img-banner hidden mt-80">
                <img src="img/05.png" alt=""/>
            </div>
            <div className="row mt-3">
                <h6 className="color-gray text-center">25 FEV 2022</h6>
                <h6 className="uppercase color-primary text-center">gamer</h6>
            
                <h4 className="text-center">Ainda vale a pena o PS4 Pro em 2022?</h4>
                <p className="text-center mt-2">
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the 
                </p>
                <div className="my-2 text-center">
                    <a href="" className="link-simples link color-primary">Ler mais</a>
                </div>
            </div>

            <div className="img-banner hidden mt-80">
                <img src="img/03.png" alt=""/>
            </div>
            <div className="row mt-3">
                <h6 className="color-gray text-center">25 FEV 2022</h6>
                <h6 className="uppercase color-primary text-center">cinema</h6>

                <h4 className="text-center">O que esperar do cinema em 2022?</h4>
                    <p className="text-center mt-2">
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the 
                    </p>
                <div className="my-2 text-center">
                    <a href="" className="link-simples link color-primary">Ler mais</a>
                </div>
            </div>
        </section>
     </>
    );
}

export default Banner;