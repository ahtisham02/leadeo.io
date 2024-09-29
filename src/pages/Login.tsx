import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center mb-4">Sign in to continue</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter email or username" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter password" />
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <a className="flex justify-end align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Forgot Password?</a>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <button type="button" className="bg-white hover:bg-gray-100 border text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center gap-2">
                            <FcGoogle size={20} />
                            Continue with Google
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <span className="text-gray-500">Don't have an account? &nbsp;<Link to={"/auth/register"}  className="underline text-blue-500">Sign up</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login