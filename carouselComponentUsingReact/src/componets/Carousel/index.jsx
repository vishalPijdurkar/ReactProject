import './index.css'

function Carousel({imgUrl, next, previous}) {
    return (
        <>
        <div className="carousel-container">
            <img src={imgUrl} alt="img" className="carousel-img"/>
            <div className="btn-container">
                <button className="btn left-btn" onClick={()=>next()}>prev</button>
                <button className="btn right-btn" onClick={()=>previous()}>next</button>
            </div>
        </div>
        </>
    )
}

export default Carousel;