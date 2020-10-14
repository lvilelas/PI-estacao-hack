import React from 'react'
import '../ContactContainer/contact.css'
import { FaPhone, FaMailBulk, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function ContactContainer() {
    return (
        <div className='contact-container bg-grey'>
            <span className="div-title">Contato</span>
            <div className='contact-form'>
                <div id='sect1'>
                    <span>Entre em contato e entraremos em contato com você em 24 horas.</span>
                    <span>

                        Organize seu evento, Entre em contato!
                  </span>
                    <span>
                        <i href="#"><FaPhone /></i>
                      11-9999 99999
                  </span>
                    <span>
                        <i href="#"><FaMailBulk /></i>
                      company@gmail.com
                  </span>
                </div>

                <div id='sect2'>
                    <span>
                        Contato
                  </span>

                    <input type="text" placeholder="email" className="input-field" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="sua mensagem"></textarea>
                    <button className="contact-btn">Enviar</button>
                </div>
            </div>
        </div>
    );

}