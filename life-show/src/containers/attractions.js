import React,{Component} from 'react';
import TabBar from '../components/tabbar'
import NavigationBar from '../components/navigationbar'
import Model from '../models'
import '../styles/attractions.css'
class Attractions extends Component{
    handleClick(datas,event){
        let index = event.currentTarget.dataset.index;
        this.props.history.push({
            pathname:'/details',
            state:{
                imgs:datas[index].imgs,
                text:datas[index].des
            }
        })
    }
    render(){
        const datas = Model.get('attractions');
        return(
            <div className="components">
                <NavigationBar title="景点"/>
                <main className='content'>
                    <ul className='ct-list'>
                        {
                            datas.map((item,index)=>{
                                return (
                                <li key={index} data-index={index} onClick={this.handleClick.bind(this,datas)}>
                                    <div className="left-box">
                                        <img className="left-img" src={require('../assets/imgs/'+item.logo)} alt=''/>
                                    </div>
                                    
                                    <div className="right-box">
                                        <h5 className="title">{item.title}</h5>
                                        <p className="tel">{item.tel}</p>
                                        <address className="address">{item.address}</address>
                                    </div>
                                </li>
                                )
                            })
                        }
                    </ul>
                </main>                
                <TabBar/>
            </div>
        )
    }
}
export default Attractions;