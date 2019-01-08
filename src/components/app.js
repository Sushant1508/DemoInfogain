import React, { PropTypes } from 'react';
import {fetchData} from './action';
import {connect} from "react-redux";




class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fetchedData:[]
          };
    } 
    componentWillMount(){
        this.props.fetchData();
    }
    componentWillReceiveProps(nextProps,nextState){
        this.setState({fetchedData:nextProps.fetchedData.data})
    }

    deleteEntry=(index)=>{
        let details=this.state.fetchedData;
        details.splice(index,1)
        this.setState({fetchedData:details});
    }




    render() {
        let details=this.props.fetchedData.data;
        return (
            <div>
                
                <table>
                <tr>
                    <th>Avatar</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                { this.state.fetchedData && this.state.fetchedData.map((value,index)=>
                        <tr>
                            <td><img src={value.avatar}/></td>
                            <td>{value.first_name}</td>
                            <td>{value.last_name}</td>
                            <td onClick={()=>{this.deleteEntry(index)}}><u style={{cursor:"pointer"}}>delete</u></td>
                            
                        </tr>
                )
                }
                
                </table>
            </div>        
        );
    }
}

function mapStateToProps(state) {
    return {
        fetchedData:state.responseArray

    };
}

export default connect(mapStateToProps,{fetchData})(App);
