import React, {Component} from 'react'
import {
     SearchBar, 
     Button,
     WhiteSpace,
     WingBlank ,
     Tabs} from 'antd-mobile';

import commodityManager from '../DataManager/CommodityManager'
export default class CommodityTypeScreen extends Component{
   constructor(props) {
     super(props)
     this.state = {
        TypeName:''
     }
   }
   
    render(){
        const tabs = [
            { title: this.state.TypeName }
          ];
        return(
            <div>
                 <WhiteSpace />
                 <SearchBar
                   placeholder="搜索好东西" 
                   maxLength={8} 
                   onSubmit={value => console.log(value, 'onSubmit')}
                   />
                    <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={1} />}>
                   {this.renderContent}
                   </Tabs>
                 <WhiteSpace />
            </div>
        )
    }
}