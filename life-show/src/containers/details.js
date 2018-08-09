import React,{Component} from 'react';
import NavigationBar from '../components/navigationbar'
import { Carousel,Icon } from 'antd';
import '../styles/details.css'
class Details extends Component{

    handleGoBackBtn(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div>
                <NavigationBar title='详情页'>    
                    <Icon type="left"  className='goback-btn' onClick={this.handleGoBackBtn.bind(this)}/>                
                </NavigationBar>
                <main className='details-page'>
                    <Icon tyle='left' className='goback-btn' onClick={this.handleGoBackBtn.bind(this)}>{this.props.children}</Icon>
                    <Carousel>
                        {
                            this.props.location.state.imgs.map((imgName,index)=>{
                                return <img key={index} src={require('../assets/imgs/'+imgName)} alt=''/>
                            })
                        }
                    </Carousel>
                    <p className='text'>{this.props.location.state.text}</p>
                </main>
            </div>
        )
    }
}
export default Details;