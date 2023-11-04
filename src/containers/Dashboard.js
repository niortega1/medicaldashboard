import React from "react";
import { Link } from "react-router-dom";
import Analytics from "./Analytics";
import NewUsers from "./UsersPage";

const Dashboard = () => {
    return (
        <div>
            <Link to="/dashboard">
            <main>
                <Analytics />
                <NewUsers />
                <div class="recent-orders">
                    <h2>Recent Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Course Number</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    <a href="#">Show All</a>
                </div>
                {/* <!-- End of Recent Orders --> */}

            </main>
            </Link>
        </div>
    );
};

export default Dashboard;