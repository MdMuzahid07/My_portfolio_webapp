import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='max-w-xl  mx-auto my-5'>
            <div class="drawer drawer-mobile bg-parimary">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet />

                </div>
                <div class="drawer-side rounded-xl shadow-xl">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link className='btn btn-outline btn-wide mb-2' to='postblog'>Post Blogs</Link>
                        </li>
                        <li>
                            <Link className='btn btn-outline btn-wide mb-2' to='postwork'>Post Works</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;