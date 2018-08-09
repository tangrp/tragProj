import React,{Component} from 'react';
import {Carousel} from 'antd';
import '../styles/carous.css'

class Carous extends Component{
    render(){
        console.log(this.props.imgNames)
        return(
            <Carousel autoplay>
                {
                    this.props.imgNames.map((imgName,indx) =>{
                        return(
                            <div key={indx}>
                                <img src={require('../assets/imgs/'+imgName)} alt=''/>
                            </div>
                        )
                    })
                }
            </Carousel>
        )
    }
}
export default  Carous