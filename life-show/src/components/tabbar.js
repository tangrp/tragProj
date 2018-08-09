import React, { Component } from 'react';
import '../styles/tabbar.css'
import {NavLink} from 'react-router-dom'

import {Icon} from 'antd'

class TabBar extends Component{
    render(){
        let infos=[
            {
                title:'乐行于蜀',
                path:'/home',
                icon:'home'
                
            },
            {
                title:'推荐',
                path:'/recommended',
                icon:'ant-design'
                
            },
            {
                title:'景点',
                path:'/attractions',
                icon:'eye'
                
            },
            {
                title:'我的',
                path:'/mine',
                icon:'user'
                
            },
        ]
        return(
            <footer className="tabBar">
                {
                    infos.map((item,index)=>{
                        return(
                            <NavLink to={item.path} className="tabBar-item" key={index}>
                            <Icon className="icon" type={item.icon}></Icon>
                            <span className="title">{item.title}</span>
                            </NavLink>
                        )
                        
                    })
                }                
            </footer>
        )
    }
}
export default TabBar;