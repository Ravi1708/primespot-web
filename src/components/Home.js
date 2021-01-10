import React,{useState} from 'react'
import Popup from 'reactjs-popup'
import './home.css'
import logo from './img/ass-logo.png'
import banner from './img/banner1.jpg'
import {Row,Col} from 'react-bootstrap'
import {Button} from '@material-ui/core'
import mongodb from './img/mongodb.png'
import node from './img/node.png'
import express from './img/express.png'
import react from './img/react.png'
import firebase from './img/Firebase.png'

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
                    <img src={logo} />
                </div>
                <div className='navig'>
                    <div className='client-login'>
                        <p>Client login</p>
                        <p>Emergency support</p>
                    </div>
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
                    <p>Have any questions?</p>
                    <p>Free:+188 500 1070</p>
                </div>
            </nav>
            <div className='banner'>
                <h1>An complete buisness solution</h1>
                <p>lorum ipsum jkheu liqwhdo8h qwisjoi</p>
            </div>

            {/*---------------------technology we using----------------------------*/}
            <div className='technologies'>
                <h2>Technologies we using</h2>
                <div className='tech-list'>
                    <div className='technology'>
                        <img className='tech-img' src={mongodb} />
                    </div>
                    <div className='technology'>
                        <img className='tech-img' src={express} />
                    </div>
                    <div className='technology'>
                        <img className='tech-img' src={react} />
                    </div>
                    <div className='technology'>
                        <img className='tech-img' src={node} />
                    </div>
                    <div className='technology'>
                        <img className='tech-img' src={firebase} />
                    </div>
                </div>
            </div>



            {/*-------------------- services provided ----------------------------- */}

            <div className='services'>
                <h3>Our services</h3>
                <div className='services-list'>
                    <div className='service'>
                        <img className='service-img' src={banner} alt='image'/>
                        <div className='service-content'>
                            <h2>Web development</h2>
                            <p>we offer all types of web pages for affordable prize</p>
                            <Button variant='contained' color='primary'>Read more</Button>
                        </div>
                    </div>
                    <div className='service'>
                        <img className='service-img' src={banner} alt='image'/>
                        <div className='service-content'>
                            <h2>Graphic Design</h2>
                            <p>we offer all types of web pages for affordable prize</p>
                            <Button variant='contained' color='primary'>Read more</Button>
                        </div>
                    </div>
                    <div className='service'>
                        <img className='service-img' src={banner} alt='image'/>
                        <div className='service-content'>
                            <h2>Network Marketing</h2>
                            <p>we offer all types of web pages for affordable prize</p>
                            <Button variant='contained' color='primary'>Read more</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
