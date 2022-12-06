import React, { useEffect, useState } from 'react'

export default function Tempapp() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5d69cf137d02dc0aa482ccd6c7fdb71b`
            const response = await fetch(url);
            const resJson = await response.json();
            
            setCity(resJson.main);
        };
        fetchApi();
    }, [search]);

    function searchFunction(e) {
        setSearch(e.target.value);
    }


    return (
        <div className='container'>
            <div className='box'>
                <div className='inputData'>
                    <input type={"search"}
                        className="inputField" value={search}
                        onChange={searchFunction} ></input>
                </div>

                {!city ? (
                    <h1 className='noData'>No data found</h1>
                ) : (
                    <div>
                    <div className='info'>

                    <h2 className='location'>
                        <i className="fa-solid fa-street-view"></i>
                        {search}
                    </h2>
                    <h1 className='temp'>
                        {city.temp} °Cel</h1>
                    <h3 className='temp_min_max'>Min : {city.temp_min} °Cel | Max : {city.temp_max} °Cel </h3>
                </div>
                <div className='ocean'>
                <div className='wave'></div>
                <div className='wave'></div>
                <div className='wave-three'></div>
                </div>
                </div>
                )}   
            </div>
        </div>
    )
}
