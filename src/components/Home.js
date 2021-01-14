import React,{useState} from 'react'
import Popup from 'reactjs-popup'
import './home.css'
import Steppercomp from './Steppercomp'
import logo from './img/Logo.png'
import webimg from './img/webdev.jpg'
import DM from './img/DM.jpg'
import GD from './img/GD.jpg'
import {Row,Col} from 'react-bootstrap'
import {Button} from '@material-ui/core'
import mongodb from './img/MongoDb.jpg'
import node from './img/NodeJS.jpg'
import material from './img/MaterialUi.jpg'
import react from './img/React.jpg'
//import firebase from './img/Firebase.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Home() {

    const [showmenu, setshowmenu] = useState(false)

    let menu = (event) =>{
        event.preventDefault()
        setshowmenu(true)
    }

    return (
        <div>
            <nav className='navbar'>
                <div className='nav-brand'>
                    <img src={logo} height='auto' width='250px' />
                </div>
                <div className='navig'>
                    <div className='nav-links'>
                        <Popup 
                            trigger={<button className="trigger-btn">Company </button>}
                            position="bottom center"
                        >
                            <div className='popup'>
                              <ul>
                                  <li><a href='#'>About</a></li>
                                  <li><a href='#'>Mission</a></li>
                                  <li><a href='#'>Vision</a></li>
                                  <li><a href='#'>Values</a></li>
                              </ul>
                            </div>
                        </Popup>
                        <Popup
                            trigger={<button className="trigger-btn">Projects</button>}
                            position="bottom center"
                        >
                            <div className='popup'>
                                <ul>
                                    <li><a href='#'>Web Development</a></li>
                                    <li><a href='#'>Logo & Brochers</a></li>
                                    <li><a href='#'>Digital Marketing</a></li>
                                    <li><a href='#'>Buisness softwares</a></li>
                                </ul>
                            </div>
                        </Popup>
                        <Popup
                            trigger={<button className="trigger-btn">Services </button>}
                            position="bottom center"
                        >
                            <div className='popup'>
                                <Row className='nav-services'>
                                    <Col xs={4}>
                                        <h4>Web Development</h4>
                                        <ul>
                                            <li>E-commerce sites</li>
                                            <li>Static websites</li>
                                            <li>wordpress websites</li>
                                            <li>E-learning sites</li>
                                            <li>MERN stack web Apps</li>
                                        </ul>
                                    </Col>
                                    <Col xs={4}>
                                        <h4>Internet Marketing</h4>
                                        <ul>
                                            <li>Search Engine Optimization</li>
                                            <li>Social Media Marketing</li>
                                            <li>Blogging and content writing</li>
                                        </ul>
                                    </Col>
                                    <Col xs={4}>
                                        <h4>Hosting services</h4>
                                        <ul>
                                            <li>Domain & web Hosting</li>
                                            <li>Remote infrasture management</li>
                                            <li>c panel management </li>
                                            <li>Server migration services</li>
                                        </ul>
                                    </Col>
                                    <Col xs={4}>
                                        <h4>Business Support</h4>
                                        <ul>
                                            <li>Logo and brochers Design</li>
                                            <li>Billing softwares</li>
                                            <li>Business Dashboard webApps</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </Popup>
                        <Popup
                            trigger={<button className="trigger-btn">Contact Us </button>}
                            position="bottom center"
                        >
                            <div className='popup'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolor
                            nulla animi, natus velit assumenda deserunt molestias
                            </div>
                        </Popup>
                    </div>
                </div>
                <div className='query'>
                    <p>Have any queries?</p>
                    <p>9677560676</p>
                </div>
            </nav>
            <div className='banner'>
               
            </div>

            {/*-------------------- services provided ----------------------------- */}

            <div className='services'>
                <h2 style={{textAlign:'center'}}>Our services</h2>
                <div className='services-list'>
                    <div className='service'>
                        <img className='service-img' src={webimg} alt='image'/>
                        <div className='service-content'>
                            <p>we offer all types of web pages for affordable prize</p>
                            <Button variant='contained' color='primary'>Read more</Button>
                        </div>
                    </div>
                    <div className='service'>
                        <img className='service-img' src={GD} alt='image'/>
                        <div className='service-content'>
                            <p>we offer all types of web pages for affordable prize</p>
                            <Button variant='contained' color='primary'>Read more</Button>
                        </div>
                    </div>
                    <div className='service'>
                        <img className='service-img' src={DM} alt='image'/>
                        <div className='service-content'>
                            <p>we offer all types of web pages for affordable prize</p>
                            <Button variant='contained' color='primary'>Read more</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/*---------------------technology we using----------------------------*/}
            <div className='technologies'>
                <h2 style={{textAlign:'center'}}>Technologies we using</h2>
                <div className='tech-list'>
                    <div className='technology'>
                        <img className='tech-img' src={mongodb} />
                    </div>
                    <div className='technology'>
                        <img className='tech-img' src={material} />
                    </div>
                    <div className='technology'>
                        <img className='tech-img' src={react} />
                    </div>
                    <div className='technology'>
                        <img className='tech-img' src={node} />
                    </div>
                    
                </div>
            </div>
            {/*----------------------stepper-----------------------*/}
            <div className='stepper'>
                <h1>Get your Buisness to next level just by few steps!!</h1>
                <Steppercomp />
            </div>
            


            {/*-----------------------footer-----------------------*/}
            <footer>
                <Row className='footer'>
                    <Col xs={4} >
                        <img src={logo} height='auto' width='250px' />
                        <p>Slogan comes here!</p>
                    </Col>
                    <Col xs={4} className='f2'>
                        <h3>Company</h3>
                        <ul>
                            <li>About</li>
                            <li>web development</li>
                            <li>Web Design</li>
                            <li>Hosting</li>
                            <li>Projects</li>
                        </ul>
                    </Col>
                    <Col xs={4} className='f3' >
                        <form className='newsletter'>
                            <input type='email' placeholder='Email' />
                            <Button color='primary' variant='contained'>Subscribe</Button>
                        </form>
                        <h2>Planning to develop your business?</h2>
                        <Button color='primay' variant='contained'>Contact Us</Button>
                        <div className='social-media'>
                            <FacebookIcon fontSize='large' />
                            <WhatsAppIcon fontSize='large' />
                            <TwitterIcon fontSize='large'/>
                            <InstagramIcon fontSize='large'/>
                            <EmailIcon fontSize='large' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p className='copyright'>Copyrights &#169; primespot-All rights reserved</p>
                </Row>
            </footer>
            
        </div>
    )
}

export default Home
