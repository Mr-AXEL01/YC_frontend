import {Link} from "react-router-dom";
import {UserCircleIcon, UserIcon} from "lucide-react";

export default function Users() {

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto w-16 h-16 "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgeVnTqHCBfIny-LQCUcnx9aOellsv6AxpSdht7X9mMIp0jRQIe_7uT7PbjKoAg-zdgk&usqp=CAU"
                    alt="YouCare"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="role" className="block flex gap-1 text-sm font-medium leading-6 text-gray-900">
                            <UserCircleIcon />
                            Role
                        </label>
                        <div className="mt-2 px-4 flex justify-between">
                            <div className="p-2 border rounded-lg w-fit bg-red-500 hover:bg-red-600 transition-all flex items-center justify-center">
                                <input
                                    id="organiser"
                                    name="role"
                                    type="radio"
                                    value="organizer"
                                    autoComplete="role"
                                    required
                                    className="opacity-0 absolute"
                                />
                                <label htmlFor="organiser" className="text-white cursor-pointer">
                                    Organizer
                                </label>
                            </div>
                            <div className="p-2 border rounded-lg w-fit bg-yellow-400 hover:bg-yellow-500 transition-all flex items-center justify-center">
                                <input
                                    id="volunteer"
                                    name="role"
                                    type="radio"
                                    value="volunteer"
                                    autoComplete="role"
                                    required
                                    className="opacity-0 absolute"
                                />
                                <label htmlFor="volunteer" className="text-gray-900 cursor-pointer">
                                    Volunteer
                                </label>
                            </div>
                        </div>

                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password-confirmation" className="block text-sm font-medium leading-6 text-gray-900">
                            Password confirmation
                        </label>
                        <div className="mt-2">
                            <input
                                id="password-confirmation"
                                name="password-confirmation"
                                type="password"
                                autoComplete="password-confirmation"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                <p className="mt-5 text-center text-sm text-gray-500">
                    Already a member?{' '}
                    <br />
                    <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign-in with an existing account
                    </Link>
                </p>
            </div>
        </div>
    )
  }
  