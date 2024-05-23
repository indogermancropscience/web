import React from 'react'

import "./Footer.scss"
import { menu } from "../menu/Menu"
import { ListGroup } from "react-bootstrap"
import ContactUs from "./contactUs/ContactUs"

function Footer() {

    return (
        <div className='footer'>

            <ContactUs/>


            <div class="footer-quote col-lg-12 col-md-12">
                <p>
                Advanced and Eco-friendly Agro Chemicals Products Manufacturer
                </p>
            </div>

            <div className="footer-menu">
                <div className="footer-menu-table">
                    {menu &&
                        menu.map((m) => {
                            if (m.name !== "Home") {
                                return (
                                    <div className="footer-menu-table-menu col5">
                                        <h1>{m.name.toLocaleUpperCase()}</h1>
                                        <ListGroup>
                                            {m.options &&
                                             (m.options.length===0?<ListGroup.Item>{m.name}</ListGroup.Item>: m.options.map((option)=>{
                                                 return (<ListGroup.Item>{option.name}</ListGroup.Item>)
                                             }))
                        
                                            }
                                        </ListGroup>

                                    </div>);
                            }
                            return <></>;
                        })
                    }
                </div>
            </div>


            <div className='footer-logo'>
                <div className='footer-logo-img'>
                    <img src="./logo300x300.png" alt="Logo" />
                </div>

                <div className='footer-logo-name'>
                    <p>Indo German Crop Science</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;
