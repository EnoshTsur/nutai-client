import React from "react"
import UserLoginForm from "../components/UserLoginForm/UserLoginForm"
import UserRegister from "../components/UserLoginForm/UserRegisterForm"
import UserProfileForm from "../components/UserProfileForm/UserProfileForm"

type Routes = ReadonlyArray<{ path: string, component: React.ComponentType }>

const routes: Routes = [
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