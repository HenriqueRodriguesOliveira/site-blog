// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// Components
import Hero from '../Home/Components/Hero';
import Banner from '../Home/Components/Banner';
import Card from '../Home/Components/Card';
import Main from '../Home/Components/Main';

// Figuras
import start from '../../svg/icon-star.svg';

// API
import api from '../../services/api';

// Hooks
import { useState, useEffect } from 'react';

// Link
import { Link } from 'react-router-dom';

const Home = () => {

    // Variáveis de estado
    const [main, setMain] = useState([]);
    const [mostseen, setMostseen] = useState([]);
    const [banner, setBanner] = useState([]);


    
    useEffect(() => {

        api.get('/posts?_limit=3')
        .then((response)=>{
          setMostseen(response.data);
          //console.log(mostseen);
        })
    
        
        api.get('/posts?star=5&_limit=3')
        .then((response)=>{
          setMain(response.data);
          //console.log(response.data);
        })
    
    
        api.get('/posts?_sort=date&_order=desc&_limit=1')
        .then((response)=>{
          setBanner(response.data);
          console.log(response.data);
        })
    
      }, []);

    return(
        <>
        <Header />
           <Hero />

           <section className="container">
              <div className="row">
                <div className="grid-5 pt-5 pb-3">
                    <img src={start} className="icon-l" alt="" />
                    <h2 className="mt-1">
                        Os melhores e mais bem votados posts do mês.
                    </h2>
                    <p className="mt-2">
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s
                    </p>
                </div>

                <div className="grid-7">

                    {

                    main.map((item) => {
                       return <Main key={item.id} content={item} />
                    })

                    }

                </div>
               </div>
            </section>


             
            <div className='bg-section'>
              <section className='container'>
                <h3 className='ml-2 mb-3'>Mais vistos</h3>
                <div className='row'>

                {
                    mostseen.map((item) => {
                        return <Card key={item.id} content={item} />
                    })
                }

                </div>
                </section>
            </div>

            
            
            {
                    banner.map((item) => {
                        return <Banner key={item.id} content={item} />
                    })
                }
            <Footer />
        </>
    );
}

export default Home;