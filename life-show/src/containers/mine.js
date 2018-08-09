import React,{Component} from 'react';
import TabBar from '../components/tabbar'
import NavigationBar from '../components/navigationbar'
import '../styles/mine.css'
class Mine extends Component{ 
    handleCancellation(){
        this.props.history.push('/')
    }
    render(){
        /* const infos = [
            [
                {title: '钱包', type: 'wallet'},
                {title: '发现', type: 'search'},
                {title: '分享', type: 'share-alt'},
                {title: '指南', type: 'compass'},
                {title: '礼物', type: 'gift'},
            ],
            [
                {title: '设置', type: 'setting'},
                {title: '收藏', type: 'star-o'}
            ],
        ] */
        return(
            <div className="components">
            <NavigationBar title="我的"/>
            <main className='content mine'>
                <div className="mimeInfo-box" >
                    <div className="mineHead">
                        <div className="head-portrait">
                            <img src={require('../assets/imgs/timg.jpg')} alt=''/>
                        </div>
                        <p className="nickName">追风少年</p>
                        <p className="psSignature">城市灯光亮整夜光</p>
                    </div>                    
                </div>
                {/* <div className="tool-box">
                    {
                        
                    }
                </div> */}
                <div className="cancellation" onClick={this.handleCancellation.bind(this)}>退出登录</div>
            </main>                
            <TabBar/>
        </div>
        )
    }
}
export default Mine;