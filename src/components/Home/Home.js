import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div>
        <div className='home'>
            <div className='div1'>
                <h1>Your Product</h1>
                <li>1.0-type sensor and advanced image processor for stunning images</li>
                <li>ZEISS® Tessar T* 24mm1 lens for less distortion
                    Ultra-compact.</li>
                <li>tough body: waterproof5, dustproof, shockproof6 and crushproof7</li>
            </div>

            <div className='div2'>
                <img className='image' src="/Photo/damir-babacic-UCfTPw4nyr0-unsplash.jpg" alt="" />
            </div>
        </div>

        <button className='btn'>See All Reviews</button>
        </div>
    );
};

export default Home;