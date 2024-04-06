import {Link, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header>
                <div
                    className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 mb-4 mx-auto shadow-2xl">
                    <Link to={'/'}>
                        <div className="text-2xl text-white font-semibold inline-flex items-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgeVnTqHCBfIny-LQCUcnx9aOellsv6AxpSdht7X9mMIp0jRQIe_7uT7PbjKoAg-zdgk&usqp=CAU"
                                className="w-12 mr-4 rounded-[20px]" alt="logo-img"/>
                            <span>YouCare</span>
                        </div>
                    </Link>
                    <div>
                        <ul className="flex text-white">
                            <li className="ml-5 px-3 py-1">
                                <Link to={'/'}>
                                    Home
                                </Link>
                            </li>
                            <li className="ml-5 px-3 py-1">
                                <Link to={'/login'}>
                                    Login
                                </Link>
                            </li>
                            <li className="ml-5 px-3 py-1">
                                <Link to={'/register'}>
                                    Register
                                </Link>
                            </li>
                            <li className="ml-5 px-3 py-1">
                                <Link to={'/users'}>
                                    Users
                                </Link>
                            </li>
                            <li className="ml-5 px-3 py-1 rounded font-semibold bg-gray-100 text-gray-800">
                                <Link to={'/'}>
                                    Change mode
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>Footer</footer>
        </>
    );
}
