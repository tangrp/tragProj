import React,{Component} from 'react';
import TabBar from '../components/tabbar'
import NavigationBar from '../components/navigationbar'
import Model from '../models'
import '../styles/recommended.css'
class Recommended extends Component{
    constructor(props){
        super(props)
        this.state={
            datas: Model.get('recommend')
        }
    }
    handleImgClick(event){
        const index = event.target.dataset.index;
        this.props.history.push({
            pathname:'/details',
            state:{
                imgs:[this.state.datas[index].detailImage],
                text:this.state.datas[index].des
            }
        })
    }
    render(){
        const datas = Model.get('recommend')
        return(
            <div className="components">
            <NavigationBar title="推荐"/>
            <main className='content'>
                <div className='img-box'>
                {
                    datas.map((item,index)=>{
                        return  <img data-index={index}  onClick={this.handleImgClick.bind(this)} key={index} src={require('../assets/imgs/'+item.logoImage)} alt=''/>
                    })
                    
                }
                </div>
               
            </main>                
            <TabBar/>
        </div>
        )
    }
}
export default Recommended;