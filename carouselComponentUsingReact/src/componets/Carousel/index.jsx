
function Carousel({imgUrl}) {
    return (
        <>
        <div className="carousel-container">
            <img src={imgUrl} alt="img"/>
            <div className="btn-container">
                <button className="btn left-btn"><img src="" alt="prev" className="btn-icon"/></button>
                <button className="btn right-btn"><img src="" alt="prev" className="btn-icon"/></button>
            </div>
        </div>
        </>
    )
}

export default Carousel;