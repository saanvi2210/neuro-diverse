import React, { createContext, useState, useContext } from 'react';

// Create the context
const EducatorContext = createContext();

// Default educator login credentials
const defaultEducatorCredentials = [{
    email: 'educator@example.com',
    password: 'password123',
},
    {
        email: 'saanvimanocha22@gmail.com',
        password: '123',
    }

];

const defaultStudentCredentials = [{
    email: 'saanvimanocha22@gmail.com',
    password: '123',
},
    {
        email: 'educator@example.com',
        password: 'password123',
    }
];

// Context Provider component
export const EducatorProvider = ({ children }) => {
    const [educatorCredentials, setEducatorCredentials] = useState(defaultEducatorCredentials);
    const [studentCredentials, setStudentCredentials] = useState(defaultStudentCredentials);

    const login = (email, password) => {
        // You can add authentication logic here
        let ans = false
       educatorCredentials.map((credential) =>(
           credential.email === email && credential.password === password ? ans = true : ''
       ))
        return ans
    };
    const loginStudent = (email, password) => {
        // You can add authentication logic here
        let ans = false
        studentCredentials.map((credential) =>(
            credential.email === email && credential.password === password ? ans = true : ''
        ))
        return ans
    };

    const logout = () => {
        setEducatorCredentials(null);
    };

    const signup = (email, password) =>{
        setEducatorCredentials((prev)=> [...prev, {
            email: email,
            password: password,
        }])
    }

    return (
        <EducatorContext.Provider value={{ educatorCredentials, login, logout, signup, loginStudent }}>
            {children}
        </EducatorContext.Provider>
    );
};

// Custom hook to use the Educator context
export const useEducator = () => {
    return useContext(EducatorContext);
};
