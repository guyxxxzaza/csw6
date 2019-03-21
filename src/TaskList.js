import React,{Component} from 'react'
import {connect} from 'react-redux'
class TaskList extends Component {
   render() {
        return (
            <div>
              <ul > {this.props.todo.map((item) => (
                    <li key={item.id}>
                        task: {item.task} <br/>
                      	place  : {item.place}<br/>
                    <br/></li>
                   ))
               }
           </ul>
            </div> 
                       							
        )
   }
}
const mapStateToProps = (state) => {
    return { todo: state }
 }
 
export default connect(mapStateToProps)(TaskList);
