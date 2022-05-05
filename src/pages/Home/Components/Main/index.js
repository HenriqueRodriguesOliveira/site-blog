
import perfil from '../../../../img/profile/perfil.jfif'

const Main = () => {
    return(
     <>
                <div className="py-4 bb-black">
                    <h6 className="color-gray">01 FEV 2022</h6>
                    <h6 className="uppercase color-primary">tecnologia</h6>

                    <h4>Os novos macbooks M1</h4>
                    <p className="mt-1">
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the 
                    </p>
                    <div className="flex-start-row mt-3">
                        <div className="profile">
                            <img src={perfil} className="profile-img" alt="" />
                        </div>
                        <div className="ml-1">
                            <h6 className="color-primary">Henrique Rodrigues</h6>
                            <h6 className="color-gray">@henriquerodrigues</h6>
                        </div>
                    </div>
                </div>
     </>
    );
}

export default Main;