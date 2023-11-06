import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BillingContent = () => {
    const patients = useSelector((state) => state.patients.patients);

    function getPaymentStatusClass(status) {
        switch (status) {
            case 'Paid':
                return 'paid';
            case 'Payment Pending':
                return 'payment-pending';
            case 'Not Paid':
                return 'not-paid';
            default:
                return '';
        }
    }

    // Function to handle the payment redirect
    const handlePayment = (stripeLink) => {
        // Logic to handle payment
        window.open(stripeLink, patients.stripeLink);
    }

    return (
        <div className="billing-section">
            <table className="billing-table">
                <thead>
                <tr>
                    <th className="header-name">Name</th>
                    <th className="header-email">Email</th>
                    <th className="header-phone">Phone</th>
                    <th className="header-payment-status">Status</th>
                    <th className="header-actions">Actions</th> {/* Added Actions header */}
                </tr>
                </thead>
                <tbody>
                {patients.map((patient) => (
                    <tr className="patient-row" key={patient.id}>
                        <td className="patient-name">{patient.name}</td>
                        <td className="patient-email">{patient.email}</td>
                        <td className="patient-phone">{patient.phone}</td>
                        <td>
                            <span className={`payment-status ${getPaymentStatusClass(patient.paymentStatus)}`}>
                            {patient.paymentStatus}
                            </span>
                        </td>
                        <td>
                            {/* Only show the Pay button if status is 'Not Paid' */}
                            {patient.paymentStatus === 'Not Paid' && (
                                <button 
                                    className="stripe-payment-button" 
                                    onClick={() => handlePayment(patient.stripeLink)}
                                >
                                    Pay with Stripe
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BillingContent;
