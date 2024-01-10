import React, { useState } from 'react';

const Get = () => {
    const [data, setData] = useState([]);

    const getProduct = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await response.json();
            setData(result);
    }

    return (
        <div>
            {data.map((el) => (
                <div key={el.id}>
                    <h1>{el.userId}</h1>
                    <h2>{el.id}</h2>
                    <p>{el.title}</p>
                </div>
            ))}
            <button onClick={getProduct}>Click</button>
        </div>
    );
};

export default Get;
