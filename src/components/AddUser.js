import React from "react";

const initialState = {
        fname:"",
        lname:"",
        email:"",
        eid:"",
        bdate:"",
        fnameError:"",
        lnameError:"",
        emailError:"",
        eidError:"",
        bdateError:"",
}

class AddUser extends React.Component{
    state = initialState;

    /* constructor(){
        super();
        this.state={value:''};
    }
    charallow(e){
        this.setState({inputtxt:e.target.value.replace(/[^a-zA-Z]/ig,'')})
    } */

    validate = () => {
        let fnameError="";
        let lnameError="";
        let emailError="";
        let eidError="";
        let bdateError="";
        
        if(!this.state.fname){
            fnameError = "*required";
            alert("First Name cannot be blank");
        }   

        if(!this.state.lname){
            lnameError = "*required";
            alert("Last Name cannot be blank");
        }   

        if(!this.state.bdate){
            bdateError = "*required";
            alert("Birthdate cannot be blank");
        }   

        if(!this.state.eid){
            eidError = "*required";
            alert("Enterprise ID cannot be blank");
        }   

        if(!this.state.email.includes('@')){
            emailError = 'Invalid Email';
        }

        if(emailError || fnameError || lnameError || eidError || bdateError){
            this.setState({emailError, fnameError, lnameError, eidError, bdateError});
            return false;
        }
        return true;
    };

    add = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        
        if(isValid) {
        this.props.addUserHandler(this.state);
        this.setState(initialState);
        alert("Data Successfully Saved");
        }
    }

    render(){
        return(
            <div className="ui main">
                <h2>Add Users</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>First Name: </label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="First Name" 
                        value={this.state.fname}
                        onChange={ (event)=> this.setState({fname: event.target.value})}/>
                        <div style={{color : 'red'}}>
                        {this.state.fnameError}
                        </div> 
                    </div>
                    <div className="field">
                        <label>Last Name: </label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Last Name" 
                        value={this.state.lname}
                        onChange={ (event)=> this.setState({lname: event.target.value})}/>
                        <div style={{color : 'red'}}>
                        {this.state.lnameError}
                        </div> 
                    </div>
                    <div className="field">
                        <label>Email: </label>
                        <input 
                        type="text" 
                        name="email" 
                        value= {this.state.email}
                        placeholder="Email"
                        onChange={ (event)=> this.setState({email: event.target.value})}/> 
                        <div style={{color : 'red'}}>
                        {this.state.emailError}
                        </div> 
                    </div>
                    <div className="field">
                        <label>Enterprise ID: </label>
                        <input 
                        type="number" 
                        name="name" 
                        placeholder="EID" 
                        value={this.state.eid}
                        onChange={ (event)=> this.setState({eid: event.target.value})}/>
                        <div style={{color : 'red'}}>
                        {this.state.eidError}
                        </div> 
                    </div>
                    <div className="field">
                        <label>Birthdate: </label>
                        <input 
                        type="date" 
                        name="date" 
                        placeholder="Name" 
                        value={this.state.bdate}
                        onChange={ (event)=> this.setState({bdate: event.target.value})}/>
                        <div style={{color : 'red'}}>
                        {this.state.bdateError}
                        </div> 
                    </div>
                    <button className="ui button blue">Add User</button>
                </form>
            </div>
        );
    }
}

export default AddUser;
