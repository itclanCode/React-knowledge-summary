import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './common/style/goodsSort.css'
import goodsSortData from './common/data/goodsSortData.js'
console.log(goodsSortData);

const comp = {

}
class App extends Component {
  // 数据
  constructor(props){
    super(props);  // 调用父类的super
    this.state = {
      selected: []
    }
  }
  
  onSelected = (elt, order)=>{

    let {selected} = this.state;

    let inThere = selected.some( (elt)=>elt.order===order );

    if(inThere){
      selected = selected.map(item=>{
        if(item.order===order){
          item.item = elt;
        }
        return item;
      })
    }else {
      selected.push({item: elt, order});
    };

    selected.sort( (a,b)=>a.order-b.order );

    this.setState({
      selected
    });

  }

  onDelete = (order)=>{
    console.log(order);
    let {selected} = this.state;

    selected = selected.filter( (elt)=>{
      return elt.order!==order;
    });

    this.setState({
      selected
    });

  }

  render(){

    let {selected} = this.state;

    let selectedComp = selected.map( (elt)=>{
      return (
        <mark
          key={elt.item.id}
        >
          {elt.item.desc}
          <a
            onClick={(ev)=>{
              ev.preventDefault();
              ev.stopPropagation();
              this.onDelete(elt.order);
            }}
          href="">x</a>
        </mark>
      )
    } );


    let comp = goodsSortData.map( (elt)=>{
      return (
        <li
          key={elt.id}
        >
          {elt.sort}
          {
            elt.data.map( (item)=>{
              return (
                <a
                  key={item.id}
                  className={ selected.some(elt=>elt.item.id === item.id) ? 'active':''}
                  onClick={()=>this.onSelected(item, elt.order)}
                  href="javascript:;"
                >{item.desc}</a>
              )
            } )
          }
        </li>
      );
    } );
            
    console.log(comp);
    return (
      <div id="wrap">
    <section id="section">
      <nav id="choose">
      你的选择:
      {selectedComp}
      </nav>
      <ul id="type">
         {comp}
      </ul>
    </section>
  </div>
    );
  }
}

export default App;
