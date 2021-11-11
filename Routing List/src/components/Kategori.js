import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Kategori () {
    return (
        <div>
        <div className='card-container'>
             <div className="image-container">
                <img src= "https://img.okezone.com/content/2016/08/11/56/1461459/alquran-jelaskan-kondisi-dasar-laut-yang-gelap-gulita-GOb4XOyvQV.jpg" alt='' />
             </div>
            <div className= "card-content">
                <div className="card-title">
                     <h3> Ikan Laut </h3>
                </div>
                <div className="card-body">
                <p> Ikan laut adalah jenis ikan yang hidup di dalam air dengan kadar salinitas tinggi. Kadar salinitasnya berkisar antara 32-35 ppt. </p>
                </div>
            </div>
            <div className="btn">
                <Link to = '/Menu'>
                    <button>
                        Lihat lebih banyak
                </button>
                </ Link>
            </div>
        </div>
    <div className='card-container'>
             <div className="image-container">
                <img src= "https://img.harianjogja.com/posts/2019/02/19/972813/tambak-udang.jpg" alt='' />
             </div>
            <div className= "card-content">
                <div className="card-title">
                     <h3> Ikan Air Tawar </h3>
                </div>
                <div className="card-body">
                <p> Ikan air tawar adalah jenis ikan yang hidup di dalam air dengan kadar salinitas rendah. Kadar salinitasnya berkisar antara 0–5 ppt. </p>
                </div>
            </div>
            <div className="btn">
             <Link to = '/Menu'>
                    <button>
                        Lihat lebih banyak
                </button>
                </ Link>
                    <br />
            </div>
            </div>
            <br />
            <br />
        </div>
    )
}
