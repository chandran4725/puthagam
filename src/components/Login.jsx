import registerImage from "../assets/RegisterImage.jpg";
import icon from "../assets/icon.png";

const Login = () => {
    return (
        <div>
            {/* Large Screen */}
            <div className="flex justify-center items-center h-screen max-lg:hidden bg-amber-500">
                <div className="flex justify-center w-full">

                    <div id="register" className="w-[40%]   bg-amber-100 rounded-bl-2xl rounded-tl-2xl">

                        <div className="flex gap-2 items-center justify-center my-4">
                            <img src={icon} alt="" width={"50px"} className="rounded-xl" />
                            <h1 className="text-3xl  font-bold">Puthagam</h1>
                        </div>

                        <h1 className="text-2xl text-green-500 font-bold text-center my-4" >Login</h1>

                        <div id="form">
                            <form action="" className="flex flex-col items-center gap-4">
                                <input id="email" type="email" placeholder="Enter Your Email" className="p-4 w-[320px] outline-none border-orange-400 border-3 rounded-xl focus:border-green-500 font-bold" required />
                                <input id="password" type="password" placeholder="Enter Your Password" className="p-4 w-[320px] outline-none border-orange-400 border-3 rounded-xl focus:border-green-500 font-bold" required />
                                <div className="flex gap-5 my-8">
                                    <button className="border-3 border-orange-400 bg-green-500 px-4 py-2 rounded-lg text-lg text-white font-bold">Submit</button>
                                    <button className="border-3 border-orange-400 bg-green-500 px-4 py-2 rounded-lg text-lg text-white font-bold">Register</button>
                                </div>

                            </form>
                        </div>

                    </div>

                    <div id="registerImage" className=" ">
                        <img src={registerImage} alt="registerImage" className="rounded-br-2xl rounded-tr-2xl" />
                    </div>
                </div>
            </div>
            {/* Large Screen End */}

            {/*Medium Screen */}
            <div className="max-md:hidden lg:hidden bg-amber-500">
                
                <div className="flex justify-center h-screen  items-center relative bg-center bg-cover bg-no-repeat " style={{backgroundImage:`url(${registerImage})`}}>

                    <div id="register" className="px-16 bg-amber-100 rounded-2xl">

                        <div className="flex gap-2 items-center justify-center my-4">
                            <img src={icon} alt="" width={"50px"} className="rounded-xl" />
                            <h1 className="text-3xl  font-bold">Puthagam</h1>
                        </div>

                        <h1 className="text-2xl text-green-500 font-bold text-center my-4" >Login</h1>

                        <div id="form">
                            <form action="" className="flex flex-col items-center gap-4">
                                <input id="email" type="email" placeholder="Enter Your Email" className="p-4 w-[320px] outline-none border-orange-400 border-3 rounded-xl focus:border-green-500 font-bold" required />
                                <input id="password" type="password" placeholder="Enter Your Password" className="p-4 w-[320px] outline-none border-orange-400 border-3 rounded-xl focus:border-green-500 font-bold" required />
                                <div className="flex gap-5 my-8">
                                    <button className="border-3 border-orange-400 bg-green-500 px-4 py-2 rounded-lg text-lg text-white font-bold">Submit</button>
                                    <button className="border-3 border-orange-400 bg-green-500 px-4 py-2 rounded-lg text-lg text-white font-bold">Register</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* Medium Screen End */}

            {/* Small Screen */}
            <div className="md:hidden max-sm:bg-amber-500">
                
                <div className="flex justify-center h-screen  items-center relative bg-center bg-cover bg-no-repeat " style={{backgroundImage:`url(${registerImage})`}}>

                    <div id="register" className="px-4 bg-amber-100 rounded-2xl">

                        <div className="flex gap-2 items-center justify-center my-4">
                            <img src={icon} alt="" width={"50px"} className="rounded-xl" />
                            <h1 className="text-2xl  font-bold">Puthagam</h1>
                        </div>

                        <h1 className="text-xl text-green-500 font-bold text-center my-4" >Login</h1>

                        <div id="form">
                            <form action="" className="flex flex-col items-center gap-4">
                                <input id="email" type="email" placeholder="Enter Your Email" className="p-4 w-70 outline-none border-orange-400 border-3 rounded-xl focus:border-green-500 font-bold" required />
                                <input id="password" type="password" placeholder="Enter Your Password" className="p-4 w-70 outline-none border-orange-400 border-3 rounded-xl focus:border-green-500 font-bold" required />
                                <div className="flex gap-5 my-8">
                                    <button className="border-3 border-orange-400 bg-green-500 px-3 py-2 rounded-lg text-md text-white font-bold">Submit</button>
                                    <button className="border-3 border-orange-400 bg-green-500 px-3 py-2 rounded-lg text-md text-white font-bold">Register</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* Small Screen End */}

        </div>
    )
}

export default Login;