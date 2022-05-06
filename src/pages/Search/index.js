// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// Card
import Card from "pages/Home/Components/Card";

// Parâmetros de URL
import { useParams } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";

// API

import api from "services/api";

const Search = () => {

    const {word_search} = useParams();

    // Variáveis de estado
    const [word, setWord] = useState(word_search);
    const [search, setSearch] = useState([]);
    const [form, setForm] = useState([]);

    useEffect(() => {

        if(word){
          api.get(`/posts?q=${word}`)
          .then((response) => {
             setSearch(response.data);
          })
        }

    }, [word])

    function onChange(event){
        
        const {value, name} = event.target;

        setForm({...form, [name]: value});
    }

    function handdleSearch(e){
        e.preventDefault();

        setWord(form.search);

    }

    


    return(
        <>
        
        <Header />
        

              <section className='container'>

              <h6 className="uppercase color-primary text-center">
                  {search.length} resultados
              </h6>

              <h4 className="text-center">"{word}"</h4>

              <form onSubmit={handdleSearch}>
                  <div className="row">
                      <div className="grid-2 disappear">

                      </div>
                      <div className="grid-8 disappear flex-center">
                        <input type="text" name="search" placeholder="Buscar..." onChange={onChange}/>
                        <button className="btn ml-2">Buscar</button>
                      </div>
                      <div className="grid-2 disappear">

                      </div>
                  </div>
              </form>

                <h3 className='ml-2 mb-3'>Pesquisa</h3>
                <div className='row'>

                {
                    search.map((item) => {
                        return <Card key={item.id} content={item} />
                    })
                }

                </div>
                </section>

        <Footer />

        </>
    );
}


export default Search;