import { Outlet } from "react-router";


export default function PrivateRoute () {

    return (
        <>
            <p>Privat page</p>
            <Outlet/>
        </>
    )
}