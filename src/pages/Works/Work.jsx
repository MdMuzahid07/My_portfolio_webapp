import React from 'react';

const Work = ({ image, _id, title, description }) => {
    return (
        <div className='max-w-xl  mx-auto'>
            <div class="card glass w-auto p-0 bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/face?hash=92048" alt="Works" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Lorem!
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, itaque?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-xs btn-outline">GitHub</button>
                        <button class="btn btn-xs btn-outline">Go</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;