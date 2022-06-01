import React from 'react';

const Home = () => {
    return (
        <div className='max-w-xl  mx-auto px-10 py-10'>
            <div class="p-5 shadow-lg my-7 bg-white rounded-xl text-center">
                <div>
                    <span className='font-bold text-black'>Hello, I'm an MERN stack app developer based in Bangladesh!</span>
                </div>
            </div>
            <div className='flex items-center justify-between mb-7'>
                <div>
                    <h2 className='text-3xl font-bold text-accent'>Md Muzahid</h2>
                    <p className='font-bold text-accent'>Passionate Developer and WordPress expert</p>
                </div>
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
                    </div>
                </div>
            </div>


            <div>
                <h2 className='text-xl font-bold my-2 text-accent'>Work__</h2>
                <p className='text-accent'>__ Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, excepturi? Expedita architecto quidem ut, ipsam quisquam iusto nesciunt, totam repudiandae, sed similique amet? Delectus, quidem fugit. Dignissimos, adipisci eius tenetur earum sunt a doloremque. Rem quasi, minus perspiciatis officia amet ex quis aut inventore maiores repellat illum omnis quae, deserunt quod aliquid facilis ut accusantium voluptate laboriosam nobis! Odio ipsum expedita blanditiis quae distinctio quia maiores commodi. Non dolore voluptatum excepturi. Quia, eaque? Libero fuga perspiciatis officiis natus. Tempora nostrum earum odit cumque dolore facilis a ipsum consequuntur? Temporibus, excepturi esse accusantium vitae illo quas laboriosam corrupti necessitatibus modi nihil?
                </p>
            </div>

            <button className='btn btn-outline mt-7 text-accent'>My Portfolio</button>




            <div class="divider" />


            <div>
                <h2 className='text-xl font-bold my-2 text-accent'>Bio__</h2>
                <div className='flex'>
                    <h2 className='text-md font-bold mr-7 text-accent'>2000</h2>
                    <p className='text-accent'>Bron in <span className='font-bold'>Bangladesh</span></p>
                </div>
                <div className='flex'>
                    <h2 className='text-md font-bold mr-7 text-accent'>2019</h2>
                    <p className='text-accent'>Complete Advanced WordPress Course at SoftTech IT Uttara</p>
                </div>
                <div className='flex'>
                    <h2 className='text-md font-bold mr-7 text-accent'>2022</h2>
                    <p className='text-accent'>Complete FullStack Web Development at Programming Hero Bangladesh</p>
                </div>
                <div className='flex'>
                    <h2 className='text-md font-bold mr-7 text-accent'>2022</h2>
                    <p className='text-accent'>Work at Programming Hero</p>
                </div>
                <div className='flex'>
                    <h2 className='text-,md font-bold mr-7 text-accent'>2022</h2>
                    <p className='text-accent'>Work as Freelancer</p>
                </div>
            </div>


            <div className='my-7'>
                <h2 className='text-xl font-bold my-2 text-accent'>| ❤</h2>
                <p className='text-accent'>Coding, Machine Learning, Gaming, Learning new things</p>
            </div>
        </div>
    );
};

export default Home;