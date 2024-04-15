import {Outlet} from "react-router-dom";


export default function GuestLayout() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto w-16 h-16 "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgeVnTqHCBfIny-LQCUcnx9aOellsv6AxpSdht7X9mMIp0jRQIe_7uT7PbjKoAg-zdgk&usqp=CAU"
                    alt="YouCare"
                />
            </div>
            <Outlet />
        </div>

    )
}