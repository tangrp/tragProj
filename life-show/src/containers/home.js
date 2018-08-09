import React,{Component} from 'react';
import TabBar from '../components/tabbar'
import NavigationBar from '../components/navigationbar'
import Carour from '../components/carous'
import Model from '../models'
import '../styles/home.css'

class Home extends Component{
    render(){
        const datas = Model.get('home');
        return(
            <div className="components">
                <NavigationBar title="乐行于蜀"/>
                <main className='content'>
                    {/* 轮播图 */}
                    <Carour imgNames ={datas.imgNames}/>
                    {/* 文字 */}
                    <div className="hmContent">
                        <p className='text '>{datas.texts[0]}</p>
                        <img className="txtImg" src={require('../assets/imgs/'+datas.imgNames[0])} alt=''/>
                        <p className='text'>{datas.texts[1]}</p>
                        <img className="txtImg" src={require('../assets/imgs/'+datas.imgNames[1])} alt=''/>
                        <p className='text'>{datas.texts[2]}</p>
                        <img className="txtImg" src={require('../assets/imgs/'+datas.imgNames[2])} alt=''/>
                    </div>
                    
                </main>                
                <TabBar/>
            </div>
        )
    }
}
export default Home;