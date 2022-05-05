
const Card = () => {
    return(
     <>
        <div className="grid-4 card p-0 mt-4">
            <div className="thumb hidden">
                <a href="">
                    <img src="img/01.png" alt="" />
                </a>
            </div>
            <div className="mt-2 px-2">
                <h6 className="color-gray">01 FEV 2022</h6>
                <h6 className="uppercase color-primary">tecnologia</h6>
                <h4>Os novos macbooks M1</h4>
                <p className="mt-1">
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the 
                </p>
                <div className="my-3">
                    <a href="" className="link-simples link color-primary">Ler mais</a>
                </div>
            </div>
        </div>
     </>
    );
}

export default Card;