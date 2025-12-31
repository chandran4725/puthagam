import { Outlet } from "react-router-dom";
import Sidebar from "./admin/Sidebar";
import AdminNav from "./admin/AdminNav";
import ToggleProvider from "./admin/ToggleProvider";


const AdminLayout = () => {
    return (
        <ToggleProvider>
            <div className="flex min-h-screen  bg-slate-900">
                <Sidebar />
                <div className="flex-1 flex-row p-6">
                    <AdminNav />
                    <Outlet />
                </div>
            </div>
        </ToggleProvider>
    );
};

export default AdminLayout;
