
import React, {Component} from 'react';
import { connect } from 'react-redux'


class InputTask extends Component {
 
    handleChange = (e) => {
        e.preventDefault();
        const task = this.getTask.value;
        const place = this.getPlace.value;
        const data = {
            id: new Date(),
            task,
            place
        }
        this.props.dispatch({
            type:'ADD',
            data
        });
        this.getTask.value="";
        this.getPlace.value="";
        console.log(data);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleChange}>
                <input type="text"   name="task"  ref={(input)=>this.getTask=input} /><br/>
                <input type="place"   name="place"  ref={(input)=>this.getPlace=input} /><br/>
                <button >Add</button>
                </form>    
            </div>
        );
    }
 }

const mapStateToProps = (state) => {
   return { todo: state.todo }
}



export default connect(mapStateToProps)(InputTask);
