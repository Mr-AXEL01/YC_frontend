import {Link} from "react-router-dom";
import {UserCircleIcon} from "lucide-react";
import {useState} from "react";
import axiosClient from "@/axios.js";
import {useStateContext} from "@/contexts/ContextProvider.jsx";

export default function Register() {
    const { setCurrentUser, setUserToken} = useStateContext();
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState({__html: ''});

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({__html: ''});

        axiosClient
            .post('/register', {
                role: role,
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
        })
            .then(({data}) => {
                setCurrentUser(data.user)
                setUserToken(data.authorisation.token)
            })
            .catch((error) => {
                if(error.response) {
                    const finalErrors = Object.values(error.response.data.errors).reduce((accum,
                    next) => [...accum, ...next], [])
                    console.log(finalErrors)
                    setError({__html: finalErrors.join('<br>')})
                }
                console.error(error)
            })
    }


    return (
        <>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign-up and get your account
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {
                    error
                        .__html &&
                    (
                        <div className="bg-red-500 rounded py-2 px-3 text-white"
                             dangerouslySetInnerHTML={error}>
                        </div>
                    )
                }
                <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">

                    <div>
                        <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                            <UserCircleIcon />
                            Role
                        </label>
                        <div className="mt-2">
                            <select
                                id="role"
                                name="role"
                                value={role}
                                onChange={ev => setRole(ev.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option value="">Select Role</option>
                                <option value="organizer">Organizer</option>
                                <option value="volunteer">Volunteer</option>
                            </select>
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
                                value={name}
                                onChange={ev => setName(ev.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="washinton Danzel"
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
                                value={email}
                                onChange={ev => setEmail(ev.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="example@example"
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
                                value={password}
                                onChange={ev => setPassword(ev.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password-confirmation"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            Password confirmation
                        </label>
                        <div className="mt-2">
                            <input
                                id="password-confirmation"
                                name="password-confirmation"
                                type="password"
                                value={passwordConfirmation}
                                onChange={ev => setPasswordConfirmation(ev.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Password Confirmation"
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
                    <br/>
                    <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign-in with an existing account
                    </Link>
                </p>
            </div>
        </>
    )
}
  