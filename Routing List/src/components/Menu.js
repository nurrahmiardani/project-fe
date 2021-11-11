import React from 'react'
import './Menu.css';

function Menu({menuItem}) {
    return (
        <div className="item">
            {
                menuItem.map((item) =>{
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <img src={item.Img} alt=""/>
                            <h2>{item.Nama}</h2>
                            <h4>{item.NamaLatin}</h4>
                            <p>Protein : {item.Protein} g</p>
                            <p>Kalori : {item.Kalori} kkal</p>
                            <p>Lemak : {item.Lemak} g</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Menu;
