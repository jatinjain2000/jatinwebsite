import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080') // Replace with your Spring Boot API URL
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>My Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyComponent;
