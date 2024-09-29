import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <body className="bg-blue-100 min-h-screen flex items-center justify-center">
            <div className="bg-white max-w-md w-full shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="text-center font-bold text-xl mb-4">
                    {/* <!-- <img src="https://www.codesignal.com/static/media/logo.94669582.svg" alt="CodeSignal Logo" className="w-32 h-auto mb-2"> --> */}
                    Create your account
                </div>
                <div className="mb-4">
                    <label htmlFor="first_name" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                    <input type="text" id="first_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter first name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="last_name" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                    <input type="text" id="last_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter last name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter email" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter password" />
                </div>
                <div className="flex items-center justify-center gap-2">
                    <input type="checkbox" id="terms" className="w-4 h-4" />
                    <label htmlFor="terms" className="text-gray-700 text-sm">I agree to the <a href="#" className="underline text-blue-500">Privacy Policy</a> and <a href="#" className="underline text-blue-500">Terms of Use</a></label>
                </div>
                <div className="flex flex-col space-y-2 mt-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        GET STARTED
                    </button>
                </div>
                <div className="flex flex-col space-y-2 mt-4">
                    <button type="button" className="bg-white hover:bg-gray-100 border text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center gap-2">
                        <FcGoogle size={20} />
                        Continue with Google
                    </button>
                </div>
                <div className="text-center mt-4">
                    <span className="text-gray-500">Already have an account? <Link to={"/auth/login"} className="underline text-blue-500">Sign in here!</Link></span>
                </div>
            </div>
        </body>
    )
}

export default Register