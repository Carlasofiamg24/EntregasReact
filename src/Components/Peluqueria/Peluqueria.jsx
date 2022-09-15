import React from "react";
import ImgPelu1 from '../../Assets/imgPelu1.jpg'
import ImgPelu2 from '../../Assets/imgPelu2.jpg'
import ImgPelu3 from '../../Assets/imgPelu3.jpg'
import ImgPelu4 from '../../Assets/imgPelu4.jpg'

const Peluqeria = () => {
    return(
        <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <div className="card">
                <img src={ImgPelu1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Mantos lacios</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={ImgPelu2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Mantos semi largos</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={ImgPelu3} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Manto Corto</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={ImgPelu4} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Mantos Largos</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Peluqeria;