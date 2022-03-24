import React, {createContext, useState} from 'react'


const userData = [
    {
        login: '1',
        password: '1',
        balance: 0,
        favorites: []
    }
]

export const UserContext = createContext();
export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState([
        {
            login: '1',
            password: '1',
            balance: 0,
            favorites: [
    
            ]
        }
    ])

    const addNewUser = (newUser) => {
        setUser({...user, newUser})
        const data = userData.push(newUser)
    }


  return (
    <UserContext.Provider value={{user, addNewUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContext