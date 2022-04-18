import React from 'react';
import '../Style/Style.css'
import image from '../images/profile.jpg'
const PersonalInfo = () => {
    return (
        <div className='personal-info'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1>Muhammad Moyenul Islam</h1>
                <h3>Full Stack Developer</h3>
                <p>A Full stack developer with hands-on experience in all levels of testing,including performance,funtional integration system and user acceptence.</p>
            </div>
            <div className="skills">
                <h1 className='heading'>Expart Skills</h1>
                <div>
                    <div className='level'>
                        <h3>Html5</h3>
                        <ul>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                        </ul>
                    </div>
                    <div className='level'>
                        <h3>CSS3</h3>
                        <ul>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='level'>
                        <h3>Javascript</h3>
                        <ul>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li ></li>
                        </ul>
                    </div>
                    <div className='level'>
                        <h3>React</h3>
                        <ul>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                        </ul>
                    </div>
                    <div className='level'>
                        <h3>Vue</h3>
                        <ul>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li ></li>
                            <li ></li>
                        </ul>
                    </div>
                    <div className='level'>
                        <h3>Node.js</h3>
                        <ul>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li ></li>
                        </ul>
                    </div>
                    <div className='level'>
                        <h3>Express.js</h3>
                        <ul>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='level'>
                        <h3>Mongodb</h3>
                        <ul>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                        </ul>
                    </div>
                    <div className='level'>
                        <h3>Puppeteer</h3>
                        <ul>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li className='full'></li>
                            <li ></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='contact'>
                <h1 className="heading">Contact</h1>
                <ul >
                    <li><i class="fa-solid fa-phone"></i> <span>+8801308-989743</span></li>
                    <li><i class="fa-solid fa-envelope"></i> <span>moyenislam75@gmail.com</span></li>
                    <li><i class="fas fa-solid fa-globe"></i>moyenislam.com</li>
                </ul>
            </div>
        </div>
    );
};

export default PersonalInfo;