
import Header from '../Header';
import Footer from '../Footer';

import IconFacebook from '../../svg/icon-facebook.svg';
import IconInstagram from '../../svg/icon-instagram.svg';
import IconYoutube from '../../svg/icon-youtube.svg';
import IconTwitter from '../../svg/icon-twitter.svg';

const Contact = () => {

  function onSubmit(event){
    event.preventDefault();
  }

  return (
    <>
      <Header />
      <section className="container">
          <div className="row">
            <div className="grid-6">
              <h3>Entre em contato</h3>
              <p>
                Aqui você vai conseguir mais 
                informações sobre o projeto 
                Blog utilizando React.js.
              </p>
              <form>
                <input type="text" name="name" className="mt-2" placeholder="Nome" />
                <input type="email" name="email" className="mt-2"placeholder="E-mail" />
                <textarea name="content" rows="8" className="mt-2"placeholder="Mensagem"></textarea>
                <button className="btn mt-2">Enviar</button>
              </form>
            </div>
            <div className="grid-1 disappear"></div>
            <div className="grid-5">
              <h5 className="mt-4">Algumas informações</h5>

              <h6 className="color-primary mt-4">Address</h6>
              <p>Fortaleza, CE.</p>

              <h6 className="color-primary mt-4">E-mail</h6>
              <p>henrique_krf@outlook.com</p>

              <h6 className="color-primary mt-4">Redes sociais</h6>
              <div className="mt-2">
              <a href='https://www.linkedin.com/in/henrique-rodrigues-1937451a4/'>
                <img src={IconFacebook} className="icon-s" alt="" />
              </a>
              <a href='https://www.instagram.com/henrique_r74/'>
                <img src={IconInstagram} className="icon-s ml-2" alt="" />
              </a>
                <img src={IconYoutube} className="icon-s ml-2" alt="" />
                <img src={IconTwitter} className="icon-s ml-2" alt="" />
              </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  );
}
  
export default Contact;
  