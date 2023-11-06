import React from "react";
import Analytics from "./Analytics";
import NewUsers from "./UsersPage";
import PatientsPage from "./PatientsPage";
import BillingPage from "./BillingPage";

const Dashboard = () => {
    return (
        <div>
            <main>
                <Analytics />                   
                <NewUsers />
                <PatientsPage />
                <BillingPage />
            </main>
        </div>
    );
};

export default Dashboard;