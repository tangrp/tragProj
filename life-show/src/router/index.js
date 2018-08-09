import Details from '../containers/details'
import Attractions from '../containers/attractions'
import Home from '../containers/home'
import LoginRegister from '../containers/login-register'
import Mine from '../containers/mine'
import Recommended from '../containers/recommended'
const routes =[
    {
        path:'/',
        exact:true,
        component:LoginRegister
    },{
        path:'/attractions',
        exact:true,
        component:Attractions
    },{
        path:'/home',
        exact:true,
        component:Home
    },{
        path:'/mine',
        exact:true,
        component:Mine
    },{
        path:'/recommended',
        exact:true,
        component:Recommended
    },{
        path:'/details',
        exact:true,
        component:Details
    },
]
export default routes