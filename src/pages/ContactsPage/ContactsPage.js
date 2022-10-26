import './ContactsPage.scss';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';

export default function ContactsPage(){

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2neuvah', 'template_fprfui9', form.current, 'HX7L_usdLrEkrEW9b')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()         
      };

    
    return(
        <section>
            <div className='contacts__page'>
                <div className='container'>
                    <h1 className='contacts__title'>Contattaci per altre informazioni</h1> 
                    <div className='contacts__page__content'>
                        <div className='contacts__page__content__form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='form__mail'>
                                <p>Nome:</p>
                                <input type='text' className='form__mail__username' placeholder='Scrivi il tuo nome' name='user_name' required/>
                                <p>Email:</p>
                                <input type='email' className='form__mail__useremail' placeholder='Scrivi la tua Email' name='user_email' required/>
                                <p>Oggetto:</p>
                                <input type='text' className='subject' placeholder='Scrivi la causa di refirimento' name='subject' required/>
                                <p>Messaggio:</p>
                                <textarea name='message' cols='30' rows="10" placeholder='Descrivi il tuo problema'></textarea>
                            </div>
                            <button type='submit' className='btn-contacts-sumit'>Invia</button>
                        </form>
                        </div>
                        <div className='possition__leotech'>
                            <div className='possition__leotech__info'>
                                <h2>E-mail:</h2>
                                <p>info@leotech.cloud</p>
                                <h2>Telefono:</h2>
                                <p>+39 388 351 7713</p>
                                <h2>Indirizzo:</h2>
                                <p>Tarquinia, via Aldo Moro, Centro commerciale TOP16, 2 piano.</p>
                            </div>
                            <div className='possition__leotech__map'>
                                <iframe src="https://maps.google.com/maps?q=Top%2016%20Tarquinia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe>
                            </div>
                        </div> 
                    </div>
                </div>  
            </div>       
        </section>
    );

}