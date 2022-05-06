import logo from '../../svg/blog-logo.svg';

// Link
import { Link, useNavigate } from 'react-router-dom';

// Hooks
import { useState } from 'react';

const Header = () => {

    const initialValueForm = {
        search: ''
    }

    // Redirecionar
    const navigate = useNavigate();

    // Variáveis de estado
    const [form, setForm] = useState(initialValueForm);

    function onChange(event){
       
        // Desestruturação do nome e valor da propriedade do input do campo
        const {value, name} = event.target;

        // Pegando o valor antigo e adicionando o caracter novo 
        setForm({...form, [name]: value})

        
    }

    function handleSearch(e){
       e.preventDefault();

       navigate(`/search/${form.search}`);
    }

    return(
        <>
        <header className="px-2 py-1">
        <nav>
            <div className="logo">
                <Link to="/" href=""><img src={logo} alt="" /></Link>
            </div>
            <ul className="menu">
                <li><Link to="/about" href="">Sobre</Link></li>
                <li><Link to="/contact" href="">Contato</Link></li>
            </ul>
        </nav>

        <div className="bx"></div>

        <div className="flex-start-row">
            <div className="search">
                <form className="flex" onSubmit={handleSearch}>
                    <input type="text" name="search" placeholder="Buscar..." onChange={onChange} />
                    <button className="btn-search"></button>
                </form>
            </div>

            <div className="cta-desktop ml-3">
                <Link to="/login" href="" className="btn">Login</Link>
            </div>

            <div className="cta-mobile">
                <Link to="/login" href="" className="link color-primary">Login</Link>
            </div>

        </div>
    </header>



    <div className="relative">
        <div className="menu-mobile">
            <ul className="nav-mobile">
                <li><Link to="/about" href="" className="link-menu-mobile">Sobre</Link></li>
                <li><Link to="/contact" href="" className="link-menu-mobile">Contato</Link></li>
                <li className="py-2 px-2">
                    <form className="flex">
                        <input type="text" name="search" placeholder="Buscar..." />
                        <button className="btn-search"></button>
                    </form>
                </li>
            </ul>
        </div>
    </div>
        </>
    );
}

export default Header;