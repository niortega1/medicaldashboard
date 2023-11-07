import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    patients: [
        { id: 1, name: 'Antonio Brown',  age: 23, condition: 'Appendicitis', email: 'abrown@email.com', phone: '(123) 456-7890', lastVisit: '2023-10-10', paymentStatus: 'Not Paid', stripeLink: 'https://invoice.stripe.com/i/acct_1O9CL3JQsxU37Meb/test_YWNjdF8xTzlDTDNKUXN4VTM3TWViLF9PeDZsdlpJVHdIZHZLejY4bDRhSkhMODc5WmpoNkZqLDg5NzU1ODcx0200xcSiAn7G?s=db'},
        { id: 2, name: 'Carrie Darby',  age: 42, condition: 'Bronchitis', email: 'cdarby@email.com', phone: '(123) 456-7890', lastVisit: '2023-10-10', paymentStatus: 'Payment Pending'},
        { id: 3, name: 'Eddie Fox',  age: 65, condition: 'Chickenpox', email: 'efox@email.com', phone: '(123) 456-7890', lastVisit: '2023-10-10', paymentStatus: 'Paid'},
        { id: 4, name: 'Gary Harrison',  age: 53, condition: 'Diabetes', email: 'gharrison@email.com', phone: '(123) 456-7890', lastVisit: '2023-05-15', paymentStatus: 'Not Paid', stripeLink: "https://invoice.stripe.com/i/acct_1O9CL3JQsxU37Meb/test_YWNjdF8xTzlDTDNKUXN4VTM3TWViLF9PeENOUnk3VldYdWE3Rm5pNUhrUk1mRnA3MjJTcVljLDg5Nzc2NzA40200if7cM1In?s=db"},
        { id: 5, name: 'Isabelle Jefferson',  age: 18, condition: 'Endometriosis', email: 'ijefferson@email.com', phone: '(123) 456-7890', lastVisit: '2022-08-05', paymentStatus: 'Payment Pending'},
        { id: 6, name: 'Kyle Langford',  age: 34, condition: 'Fibromyalgia', email: 'klangford@email.com', phone: '(123) 456-7890', lastVisit: '2021-12-14', paymentStatus: 'Paid'},
        { id: 7, name: 'Mason Nord',  age: 28, condition: 'Gum disease', email: 'mnord@email.com', phone: '(123) 456-7890', lastVisit: '2023-04-13', paymentStatus: 'Paid'},
    ],
    status: null,
};

const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        addPatient: (state, action) => {
            state.patients.push(action.payload);
        },
        removePatient: (state, action) => {
            state.patients = state.patients.filter(patient => patient.id !== action.payload.id);
        },
        updatePatient: (state, action) => {
            const index = state.patients.findIndex(patient => patient.id === action.payload.id);
            if (index !== -1) {
                state.patients[index].name = action.payload.name;
                state.patients[index].age = action.payload.age;
                state.patients[index].condition = action.payload.condition;
                state.patients[index].email = action.payload.email;
                state.patients[index].phone = action.payload.phone;
                state.patients[index].lastVisit = action.payload.lastVisit;
            }
        }
    }
});

export const { addPatient, removePatient, updatePatient } = patientsSlice.actions;
export default patientsSlice.reducer;