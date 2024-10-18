import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            {data ? (
                <p>{data.message}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;
