import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function AstroFacts() {
    const [data, setData] = useState<any>({});

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [])

    const { explanation, date, url, title, media_type } = data;
    return (
        <section className="nasa-page container">
            {data.title ? <>
                <div className="pic">
                    {media_type === 'image' ? (
                        <img src={url} alt={title.slice(0, 15) + '...'} />
                    ) : (
                        <iframe src={url} allowFullScreen title="video" />
                    )}
                    <div className="descr">
                        <h1>{title}</h1>
                        <h5>{date}</h5>
                        <p>{explanation}</p>
                    </div>
                </div>
            </> : <h1>Loading...</h1>}
        </section>
    )
}