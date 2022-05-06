// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// Image
import perfil from 'img/profile/perfil.jfif'
const Profile = () => {
    return(
        <>
        
        <Header />
        

        <section className="container">
            <div className="row">
                <div className="grid-6">
                    <div className="flex-start-row">
                        <div className="profile-big">
                            <img src={perfil} className="profile-img" alt=""/>
                        </div>
                        <div className="ml-3">
                            <h3>Henrique Rodrigues</h3>
                            <h6 className="color-gray">@henriquerodrigues</h6>
                        </div>
                    </div>
                    <p className="mt-3">
                    Seja bem-vindo ao blog! Compartilhe o conhecimento.
                    </p>
                </div>
                <div className="grid-6 flex-center">
                    <a href="" className="btn">Meus dados</a>
                    <a href="" className="btn ml-3">Adicionar post</a>
                </div>
            </div>
        </section>




        <section className="container">
        <h3>Adicionar um novo post</h3>
        <p className="mt-1">
            preencha os campos abaixo para adicionar um novo post ao blog.
        </p>

        <form>
        <div className="row p-0">
             <div className="grid-3 p-0">
                 <label for="date"><h6>Data</h6></label>
                 <input type="date" id="date" name="date" class="mt-1" />
             </div>
             <div className="grid-3 p-0">
                <label for="category"><h6>Categoria</h6></label>
                <select type="select" id="category" name="category" class="mt-1">
                    <option value="tecnologia">tecnologia</option>
                    <option value="games">games</option>
                    <option value="cinema">cinema</option>
                    <option value="fotografia">fotografia</option>
                </select>
             </div>
             <div className="grid-6 p-0">
                <label for="title"><h6>Título</h6></label>
                <input type="title" id="title" name="title" class="mt-1" />
             </div>
        </div>


        <div className="row">
            <div className="grid-9 p-0">
                <label for="resume"><h6>Resumo</h6></label>
                <input type="title" id="resume" name="resume" class="mt-1" />
            </div>
            <div className="grid-3 p-0">
                <label for="duration"><h6>Duração</h6></label>
                <select id="duration" name="category" class="mt-1">
                    <option value="5">5min</option>
                    <option value="7">7mi</option>
                    <option value="10">10min</option>
                    <option value="15">15min</option>
                </select>
            </div>
        </div>

        <div className="row p-0">
            <div className="grid-12 p-0">
                <h6 className="mb-1">Descrição</h6>
                <textarea nameName="description" id="" rows="8"></textarea>
            </div>
        </div>


        <div className="flex-end-row mr-2 mt-2">
            <button className="btn">Adicionar</button>
        </div>
        </form>
    </section>

        <Footer />

        </>
    );
}


export default Profile;