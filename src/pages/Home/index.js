import start from '../../svg/icon-star.svg';
// Components
import Hero from '../Home/Components/Hero';
import Banner from '../Home/Components/Banner';
import Card from '../Home/Components/Card';
import Main from '../Home/Components/Main';


const Home = () => {
    return(
        <>
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

                <Main />

                <Main />

                </div>
               </div>
            </section>


             
            <div className='bg-section'>
              <section className='container'>
                <h3 className='ml-2 mb-3'>Mais vistos</h3>
                <div className='row'>

                 <Card/>

                 <Card/>

                 <Card/>

                </div>
                </section>
            </div>

            <Banner/>
            
        </>
    );
}

export default Home;