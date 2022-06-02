import React, { useEffect, useState } from 'react';
import Work from './Work';

const Works = () => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(response => response.json())
            .then(data => setWorks(data))
    }, [works]);

    return (
        <div className='md:max-w-lg mx-auto '>
            <h2 className='text-xl font-bold text-accent mt-7 px-5'>__Works</h2>
            <div className='px-5 my-10 grid md:grid-cols-2 gap-2'>
                {
                    works?.map((work, index) => <Work work={work} />)
                }
            </div>
        </div>
    );
};

export default Works;