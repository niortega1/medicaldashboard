import React from "react";
import Analytics from "./Analytics";
import PatientsPage from "./PatientsPage";

const Dashboard = () => {
    return (
        <div>
            <main>
                <Analytics />                   
                <PatientsPage />
            </main>
        </div>
    );
};

export default Dashboard;