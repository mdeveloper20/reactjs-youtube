import React,{Component} from 'react'
import Header from '../../components/Header/Header'
import MainSidebar from '../../components/MainSidebar/MainSidebar'
import SmallSidebar from '../../components/SmallSidebar/SmallSidebar'

export default class App extends Component {

    onMenuClick=()=>{
        console.log('menu clicked')

    }
    render(){
        return(
            <div class="wrapper">
                <Header
                   onMenuClick={this.onMenuClick} 
                />
                <MainSidebar/>
                <SmallSidebar/>
                {this.props.childern}
                
            </div>
        )
    }

}