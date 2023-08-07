
import '../App.css';
import { useState , useEffect } from 'react';

import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";

function Homeimage()
{

    const images = [
        
        "https://img.freepik.com/free-photo/young-student-looking-book-library_23-2149215403.jpg?w=996&t=st=1687715430~exp=1687716030~hmac=61182f6b3dc68b7b1c4f14196616249c541dceede212251a753112630c9802af",
        "https://img.freepik.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg?w=996&t=st=1687715814~exp=1687716414~hmac=0ebbdbddff11b803cf764f2f7cc0115e37b5e2b5b90a8ca8f9a8f094d34eea7c",
        "https://img.freepik.com/free-photo/room-interior-design_23-2148899444.jpg?w=996&t=st=1687698923~exp=1687699523~hmac=c6e5bdd1a5166e1b43739b273c872e3e949d37bee2b49dd88f6ca0ba9098640d"
    ]

    return(
        <div className='imagebox'  >
            {/* <AliceCarousel autoPlay autoPlayInterval="1500" infinite = "true" disableButtonsControls = "true" >
                <img src={images[0]} className="sliderimg"/>
                <img src={images[1]} className="sliderimg"/>
                <img src={images[2]} className="sliderimg"/>
            </AliceCarousel> */}
        </div>
    )
}

export default Homeimage;