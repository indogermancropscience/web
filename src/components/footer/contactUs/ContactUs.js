import React from 'react'
import "./ContactUs.scss"
import { Row,Col,Card,Form } from 'react-bootstrap';
export default function ContactUs() {

    return (

        <div className='contactus'>
            <Row xs={1} md={2} className="g-4">
                <Col className="contactus-contacts">
                    <Card>
                        <Card.Body>
                            <Card.Title>Contacts</Card.Title>
                            <Card.Text>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th rowSpan="4" valign="top" className="contactus-contacts-table-icon">
                                                <i className="fas fa-building"></i> 
                                            </th>
                                            <th> INDO GERMAN CROP SCIENCE</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                line1
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                line2
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Gujarat, India
                                            </td>
                                        </tr>
                                        <tr className="contactus-contacts-table-border-bottom contactus-contacts-table-empty"><span></span></tr>
                                        <tr className="contactus-contacts-table-empty"><span></span></tr>
                                        <tr>
                                            <th className="contactus-contacts-table-icon">
                                                <i className="fas fa-phone-alt"></i>
                                            </th>
                                            <td> <a href="tel:+911234567890" >+91 12 34567890</a></td>
                                        </tr>
                                        <tr className="contactus-contacts-table-border-bottom contactus-contacts-table-empty"><span></span></tr>
                                        <tr className="contactus-contacts-table-empty"><span></span></tr>
                                        <tr>
                                            <th className="contactus-contacts-table-icon">
                                                <i className="fas fa-envelope"></i>
                                            </th>
                                            <td> <a href="mailto:abc@gmail.com" >abc@gmail.com</a></td>
                                        </tr>
                                        <tr className='contactus-contacts-table-social'>
                                            <th> <a href="https://youtube.com" target={"_blank"} rel="noreferrer"><i className="fab fa-youtube"></i></a></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="contactus-touch">
                    <Card>
                        <Card.Body>
                            <Card.Title>Get In Touch</Card.Title>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.name">
                                        <Form.Control type="name" placeholder="Your name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.email">
                                        <Form.Control type="email" placeholder="Your email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.email">
                                        <Form.Control type="number" placeholder="Your Phone Number" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.comments">
                                        <Form.Control as="textarea" rows={3}  placeholder="Comments"/>
                                    </Form.Group>
                                    <button type="submit" class="btn send-message-btn">Send A Message</button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>

        
       
    )
}
