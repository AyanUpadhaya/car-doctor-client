import { Outlet } from "react-router-dom";
import Header from "../Components/Header";


const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Main;