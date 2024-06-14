import React from "react"
import UserLoginForm from "../components/UserAuthenticationForm/UserLoginForm/UserLoginForm"
import UserRegister from "../components/UserAuthenticationForm/UserRegisterForm/UserRegisterForm"
import UserProfileForm from "../components/UserProfileForm/UserProfileForm"

type Routes = ReadonlyArray<{ path: string, component: React.ComponentType }>

const routes: Routes = [
    {
        path: '/',
        component: () => <h1 style={{ color: 'white'}}>Home</h1>
    },
    {
        path: '/login',
        component: () => <UserLoginForm />
    },
    {
        path: '/user-profile',
        component: () => <UserProfileForm />
    },
    {
        path: '/register',
        component: () => <UserRegister />
    }
]

export default routes