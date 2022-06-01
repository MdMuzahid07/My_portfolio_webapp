import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='max-w-xl  mx-auto my-5 px-5'>
            <div class="drawer rounded-xl drawer-mobile bg-parimary">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content  rounded-xl shadow-xl bg-accent text-white flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet />

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 bg-white rounded-xl overflow-y-auto w-xl text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link className='btn btn-outline mb-2' to='postblog'>Post Blogs</Link>
                        </li>
                        <li>
                            <Link className='btn btn-outline mb-2' to='postwork'>Post Works</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;