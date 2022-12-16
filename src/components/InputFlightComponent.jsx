import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddFlightComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            FlightCode: '',
            DepartureIATACode: '',
            DepartureICAOCode: '',
            DepartureTime: '',
            ArrivalIATACode: '',
            ArrivalICAOCode: '',
            ArrivalTime: '',
            message: null
        }
        this.saveFlight = this.saveFlight.bind(this);
    }

    saveFlight = (e) => {
        e.preventDefault();
        let flight = {FlightCode: this.state.FlightCode, DepartureIATACode: this.state.DepartureIATACode, DepartureICAOCode: this.state.DepartureICAOCode, DepartureTime: this.state.DepartureTime, ArrivalIATACode: this.state.ArrivalIATACode, ArrivalICAOCode: this.state.ArrivalICAOCode, ArrivalTime: this.state.ArrivalTime};
        ApiService.addFlight(flight)
            .then(res => {
                this.setState({message : 'Flight added successfully.'});
                this.props.history.push('/users');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Add Flight</Typography>
                <form style={formContainer}>

                    <TextField type="text" placeholder="FlightCode" fullWidth margin="normal" name="FlightCode" value={this.state.FlightCode} onChange={this.onChange}/>

                    <TextField type="text" placeholder="DepartureIATACode" fullWidth margin="normal" name="DepartureIATACode" value={this.state.DepartureIATACode} onChange={this.onChange}/>

                    <TextField type="text" placeholder="DepartureICAOCode" fullWidth margin="normal" name="DepartureICAOCode" value={this.state.DepartureICAOCode} onChange={this.onChange}/>

                    <TextField placeholder="DepartureTime" fullWidth margin="normal" name="DepartureTime" value={this.state.DepartureTime} onChange={this.onChange}/>

                    <TextField placeholder="ArrivalIATACode" fullWidth margin="normal" name="ArrivalIATACode" value={this.state.ArrivalIATACode} onChange={this.onChange}/>

                    <TextField type="text" placeholder=" ArrivalICAOCode" fullWidth margin="normal" name=" ArrivalICAOCode" value={this.state.ArrivalICAOCode} onChange={this.onChange}/>

                    <TextField type="text" placeholder="ArrivalTime" fullWidth margin="normal" name="ArrivalTime" value={this.state.ArrivalTime} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveFlight}>Save</Button>
            </form>
    </div>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

export default AddFlightComponent;