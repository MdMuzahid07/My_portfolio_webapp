import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [posts]);

    return (
        <div className='md:max-w-lg mx-auto '>
            <h2 className='text-xl font-bold text-accent mt-7 px-5'>__Posts</h2>
            <div className='px-5 my-10 grid md:grid-cols-2 gap-2'>
                {
                    posts?.map((post, index) => <Post work={post} />)
                }
            </div>
        </div>
    );
};

export default Posts;