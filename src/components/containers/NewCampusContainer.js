import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk, editStudentThunk } from '../../store/thunks';


class NewCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "",
          address: "",
          description: "",
          imageURL: "",
          addstudent: "",
          redirect: false,
          redirectId: null
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            imageURL: this.state.imageURL
        };

        let newCampus = await this.props.addCampus(campus);

        //// Add students ////

        // Split input list into an array of IDs to add
        this.setState({"addstudent": this.state.addstudent.split(",")});

        // For each ID in the array, change their campus ID to this one
        await this.state.addstudent.forEach((char) => {
          let studier = {id: char, campusId: newCampus.id};
          let editStudent = this.props.editStudent(studier);
        });

        this.setState({
          name: "",
          address: "",
          description: "",
          redirect: true,
          redirectId: newCampus.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }
        return (
          <NewCampusView
            handleChange = {this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
        editStudent: (student) => dispatch(editStudentThunk(student)),
    })
}

export default connect(null, mapDispatch)(NewCampusContainer);