import './home.scss'
import Search from '../../assets/search.svg'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Home(){
    const [ userName, setUserName ] = useState('')
    const navigate = useNavigate();

    function searchUser(){
        if(!userName && userName == ''){
            return
        }
        navigate(`/user/${userName}`);
    }

    return (
        <div className="wrapper-home">
            <h1>Pesquise por um usúario do GitHub</h1>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-box" 
                    placeholder="Pesquise por um usúario do GitHub"
                    onChange={(element) => setUserName(element.target.value)}
                />
                <button className="search-button" onClick={() => searchUser()}>
                    <img src={Search} alt=""/>
                </button>
            </div>
        </div>
    )
}