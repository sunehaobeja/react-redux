import React from 'react';
function Home() {
    return (
        <>
            <div>
                <h1 className='heading'> Home to Container</h1>
                <div className='cart-wrapper'>
                    <div className='img-wrapper item'>
                        <img src='iphone.jpg' className='img-thumbnail'/>
                    </div>
                    <div className='text-wrapper item'>
                        <span>
                        I-Phone
                        </span>
                        <span>
                            Price: $20
                        </span>
                    </div>
                    <div className='button-wrapper item'>
                    <button type= 'button' className='btn btn-warning'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;