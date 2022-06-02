import React from 'react';
import { Link } from 'react-router-dom';

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

            <Link to='/works' className='btn btn-outline mt-7 text-accent'>My Portfolio</Link>




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


            <div className='my-7'>
                <h2 className='text-xl font-bold my-2 text-accent'>On the web__</h2>

                <div className='flex'>
                    <svg className='bg-neutral rounded-full' width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
                        </g>
                    </svg>
                    <a href="https://github.com/MdMuzahid07" target="__blank" className='text-accent ml-7 font-bold'>MdMuzahid07</a>
                </div>

                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <a href="https://github.com/MdMuzahid07" target="__blank" className='text-accent ml-7 font-bold'>MdMuzahid7396@gmail.com</a>
                </div>

                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24px" height="24px"><radialGradient id="xW1rhakWxHfCsuNDi~7SWa" cx="32" cy="33" r="29.606" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#c5f1ff" /><stop offset=".35" stop-color="#cdf3ff" /><stop offset=".907" stop-color="#e4faff" /><stop offset="1" stop-color="#e9fbff" /></radialGradient><path fill="url(#xW1rhakWxHfCsuNDi~7SWa)" d="M10.5,60h41c2.485,0,4.5-2.015,4.5-4.5v0c0-2.485-2.015-4.5-4.5-4.5h-0.393 c-0.996,0-1.92-0.681-2.08-1.664C48.824,48.083,49.785,47,51,47l5.288,0c2.347,0,4.453-1.704,4.689-4.039 C61.247,40.282,59.127,38,56.5,38l-3.393,0c-0.996,0-1.92-0.681-2.08-1.664C50.824,35.083,51.785,34,53,34l5.241,0 c2.868,0,5.442-2.082,5.731-4.936C64.303,25.789,61.711,23,58.5,23l-12.33,0c-1.624,0-3.081-1.216-3.166-2.839 C42.914,18.431,44.29,17,46,17l2.241,0c2.868,0,5.442-2.082,5.731-4.936C54.303,8.789,51.711,6,48.5,6l-38,0C7.462,6,5,8.462,5,11.5 v0c0,3.038,2.462,5.5,5.5,5.5H14c1.105,0,2,0.895,2,2v0c0,1.105-0.895,2-2,2l-9.288,0c-2.347,0-4.453,1.704-4.689,4.038 C-0.248,27.718,1.873,30,4.5,30l8.33,0c1.624,0,3.081,1.216,3.166,2.839C16.086,34.569,14.71,36,13,36H7.712 c-2.347,0-4.453,1.704-4.689,4.038C2.753,42.718,4.873,45,7.5,45h6.393c0.996,0,1.92,0.681,2.08,1.664 C16.176,47.917,15.215,49,14,49l-3.5,0C7.462,49,5,51.462,5,54.5v0C5,57.538,7.462,60,10.5,60z" /><linearGradient id="xW1rhakWxHfCsuNDi~7SWb" x1="32.5" x2="32.5" y1="64.102" y2="22.102" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#155cde" /><stop offset=".278" stop-color="#1f7fe5" /><stop offset=".569" stop-color="#279ceb" /><stop offset=".82" stop-color="#2cafef" /><stop offset="1" stop-color="#2eb5f0" /></linearGradient><path fill="url(#xW1rhakWxHfCsuNDi~7SWb)" d="M57.667,19.058c-1.44,0.493-2.997,0.771-4.636,0.956c1.617-0.805,2.735-1.99,3.78-3.441 c0.598-0.83-0.329-1.915-1.25-1.469c-1.638,0.793-3.22,1.382-5.213,1.721C48.399,15.073,45.829,14,43,14 c-4.11,0-7.69,2.25-9.57,5.58C32.52,21.18,32,23.03,32,25c0,0.677,0.082,1.332,0.199,1.975c-8.839-0.263-16.248-4.827-20.463-10.568 C11.268,15.77,10.29,15.906,10,16.641C9.553,17.772,9,19,9,21c0,0.12,0,0.23,0.01,0.34c0.04,1.3,0.33,2.54,0.83,3.66 c0.94,2.17,2.64,3.94,4.77,4.98C14.41,29.99,14.21,30,14,30c-2,0-2.658-0.685-3.743-0.967c-0.683-0.178-1.35,0.392-1.247,1.09 c0.328,2.221,1.484,4.559,3.029,6.047c1.66,1.62,3.88,2.66,6.35,2.81C17.07,39.63,15.58,40,14,40h-1c-0.756,0-1.227,0.8-0.886,1.474 c1.677,3.317,5.561,5.53,9.722,5.516C17.826,49.518,13.091,51,8,51H7c-0.552,0-1,0.448-1,1c0,0.458,0.314,0.828,0.734,0.946 l-0.002,0.017c0,0,7.53,3.037,16.268,3.037c16.93,0,30.69-13.57,30.99-30.43C54,25.38,54,25.19,54,25s0-0.38-0.01-0.57 c-0.014-0.275-0.048-0.545-0.082-0.815c1.851-0.589,3.499-1.558,4.811-2.926C59.442,19.936,58.655,18.72,57.667,19.058z" /></svg>
                    <a href="https://twitter.com/MdMuzah67864493" target="__blank" className='text-accent ml-7 font-bold'>Twitter</a>
                </div>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5" /><stop offset=".328" stop-color="#ff543f" /><stop offset=".348" stop-color="#fc5245" /><stop offset=".504" stop-color="#e64771" /><stop offset=".643" stop-color="#d53e91" /><stop offset=".761" stop-color="#cc39a4" /><stop offset=".841" stop-color="#c837ab" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9" /><stop offset=".999" stop-color="#4168c9" stop-opacity="0" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" /><circle cx="31.5" cy="16.5" r="1.5" fill="#fff" /><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" /></svg>
                    <a href="https://twitter.com/MdMuzah67864493" target="__blank" className='text-accent ml-7 font-bold'>Instagram</a>
                </div>
                <p>Here will be see 2 letest posts from posts page</p>
                <Link to='/posts' className='btn btn-outline mt-7 text-accent'>Letest posts</Link>
            </div>
        </div>
    );
};
export default Home;




