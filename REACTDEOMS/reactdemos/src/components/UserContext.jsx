import React from 'react'

const UserContext = React.createContext("The Default Context Value")

const UserProvider = UserContext.Provider
const UserProvider1 = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer, UserProvider1}