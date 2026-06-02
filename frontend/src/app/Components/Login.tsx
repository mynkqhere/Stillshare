function Loginform(){
    return(<div className=" bg-black min-h-screen border flex flex-col items-center justify-center p-4 " >
        <span className="text-white font-bold ">Login</span>
        <form className="flex flex-col items-center  p-4 gap-4 ">
            <input className=" text-white p-2 border rounded-sm " type="text" name="username" placeholder="Username" />
            <input className=" text-white p-2 border rounded-sm " type="text" name="email" placeholder="Email" />
            <input className=" text-white p-2 border rounded-sm " type="text" name="password" placeholder="Password" />
            <button className=" transition hover:border-blue-600 text-white p-2 border rounded-sm" type="submit" >Login</button>
        </form>
    </div>)
}
export default Loginform;
