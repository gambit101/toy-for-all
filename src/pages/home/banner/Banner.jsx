import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';



const Banner = () => {
    return (
        <div className="carousel w-full h-[620px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://c4.wallpaperflare.com/wallpaper/576/838/565/spiderman-4k-artwork-hd-wallpaper-preview.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-6 h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white w-2/3 font-bold space-y-7   pl-12'>
                        <h2 className='text-5xl flex'><Typewriter
                            options={{
                                strings: ['Welcome to our store!'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h2>
                        
                        <div className="avatar placeholder my-6">
                            <div className="text-neutral-content rounded-full h-28 w-28 bg-black">
                                <span className="text-3xl text-center font-extrabold text-yellow-300">50% off</span>
                            </div>
                            <p className="items-center ml-4 pt-10 text-4xl">On all products!!!</p>
                        </div>
                        <p>We are kids. The only difference is the toy we have. Start with something simple and small, then expand over time. If people call it a toy you are definitely onto something.
                        </p>
                        <div>
                            <Link to='/blog'><button className="btn btn-active btn-primary mr-5">Blog</button></Link>
                            <Link to='signUp'><button className="btn btn-primary">Register</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1568833450751-fba3c6b2d129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXJvbm1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-full rounded-xl" />
                <div className="absolute flex items-center gap-6 h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white w-2/3 font-bold space-y-7   pl-12'>

                    <h2 className='text-5xl flex'><Typewriter
                            options={{
                                strings: ['Welcome to our store!'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h2>
                        <div className="avatar placeholder my-6">
                            <div className="text-neutral-content rounded-full h-28 w-28 bg-black">
                                <span className="text-3xl text-center font-extrabold text-yellow-300">50% off</span>
                            </div>
                            <p className="items-center ml-4 pt-10 text-4xl">On all products</p>
                        </div>
                        <p>We are kids. The only difference is the toy we have. Start with something simple and small, then expand over time. If people call it a toy you are definitely onto something.
                        </p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Blog</button>
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://c4.wallpaperflare.com/wallpaper/552/372/883/iron-man-marvel-comics-wallpaper-thumb.jpg" className="w-full rounded-xl" />
                <div className="absolute flex items-center gap-6 h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white w-2/3 font-bold space-y-7  pl-12'>
                    <h2 className='text-5xl flex'><Typewriter
                            options={{
                                strings: ['Welcome to our store!'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h2>
                        <div className="avatar placeholder my-6">
                            <div className="text-neutral-content rounded-full h-28 w-28 bg-black">
                                <span className="text-3xl text-center font-extrabold text-yellow-300">50% off</span>
                            </div>
                            <p className="items-center ml-4 pt-10 text-4xl">On all products</p>
                        </div>
                        <p>We are kids. The only difference is the toy we have. Start with something simple and small, then expand over time. If people call it a toy you are definitely onto something.
                        </p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Blog</button>
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://c4.wallpaperflare.com/wallpaper/37/979/598/iron-man-hulk-marvel-cinematic-universe-marvel-comics-wallpaper-preview.jpg" className="w-full rounded-xl" />
                <div className="absolute flex items-center gap-6 h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white w-2/3 font-bold space-y-7  pl-12'>
                    <h2 className='text-5xl flex'><Typewriter
                            options={{
                                strings: ['Welcome to our store!'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h2>
                        <div className="avatar placeholder my-6">
                            <div className="text-neutral-content rounded-full h-28 w-28 bg-black">
                                <span className="text-3xl text-center font-extrabold text-yellow-300">50% off</span>
                            </div>
                            <p className="items-center ml-4 pt-10 text-4xl">On all products</p>
                        </div>
                        <p>We are kids. The only difference is the toy we have. Start with something simple and small, then expand over time. If people call it a toy you are definitely onto something.
                        </p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Blog</button>
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;