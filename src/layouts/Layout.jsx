import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <div className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 mb-4 mx-auto shadow-2xl">
          <div className="text-2xl text-white font-semibold inline-flex items-center">
            <img src="#" className="w-16 mr-4" alt="logo-img" />
            <span>YouCare</span>
          </div>
          <div>
            <ul>
              <li className="ml-5 px-3 py-1">
                <Link to={'/'}>Home</Link>
              </li>
              <li className="ml-5 px-3 py-1"><a href="#">Login</a></li>
              <li className="ml-5 px-3 py-1"><a href="#">Register</a></li>
              <li className="ml-5 px-3 py-1"><a href="#">Users</a></li>
              <li className="ml-5 px-3 py-1 rounded font-semibold bg-gray-100 text-gray-800"><a href="#">change mode</a></li>
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
