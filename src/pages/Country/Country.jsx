import React, { useState } from "react";

import './country.css';
import {BiWorld} from 'react-icons/bi';

import dataList from './Data.js';
import { Link } from "react-router-dom";

export default function Country () {
    const [search, setSearch] = useState('');

    return (
        <>
            <div className="country">

                <div className="country__body">
                    <div className="country__1">
                        <p>list of countries in the world</p>
                        <BiWorld />
                    </div>

                    <div className="search">
                        <input 
                            type='text'
                            placeholder="Search Country..."
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>
                </div>
                
                <div className="cn__list">
                    {
                        dataList.filter((datas) => {
                            if (search == '') {
                                return datas
                            } else if (datas.country.toLowerCase().includes(search.toLowerCase())) {
                                return datas
                            }
                        })
                        .map((datas, key) => (
                            <div className="cn__card" key={key}>
                                <img src={datas.img} alt={datas.alt}/>
                                <h4>{datas.country}</h4>
                                <Link to={`/flag/${datas.id}`}>View</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}