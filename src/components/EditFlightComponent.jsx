import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditFlightComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            FlightCode: '',
            DepartureIATACode: '',
            DepartureTime: '',
            ArrivalIATACode: '',
            ArrivalICAOCode: '',
            ArrivalTime: '',
        }
        this.saveFlight = this.saveFlight.bind(this);
        this.loadFlight = this.loadFlight.bind(this);
    }

    componentDidMount() {
        this.loadFlight();
    }

    loadFlight() {
        ApiService.fetchUserById(window.localStorage.getItem("flightId"))
            .then((res) => {
                let flight = res.data.result;
                this.setState({
                id: flight.id,
                FlightCode: flight.FlightCode,
                DepartureIATACode: flight.DepartureIATACode,
                DepartureICAOCode: flight.DepartureICAOCode,
                DepartureTime: flight.DepartureTime,
                ArrivalIATACode: flight.ArrivalIATACod,
                ArrivalICAOCode: flight.ArrivalICAOCode,
                ArrivalTime: flight.ArrivalTime,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveFlight = (e) => {
        e.preventDefault();
        let flight = {FlightCode: this.state.FlightCode, DepartureIATACode: this.state.DepartureIATACode, DepartureICAOCode: this.state.DepartureICAOCode, DepartureTime: this.state.DepartureTime, ArrivalIATACode: this.state.ArrivalIATACode, ArrivalICAOCode: this.state.ArrivalICAOCode, ArrivalTime: this.state.ArrivalTime};
        ApiService.editFlight(flight)
            .then(res => {
                this.setState({message : 'Flight added successfully.'});
                this.props.history.push('/users');
            });
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Edit Flight</Typography>
                <form>
                <TextField type="text" placeholder="FlightCode" fullWidth margin="normal" name="FlightCode" value={this.state.FlightCode} onChange={this.onChange}/>

                <TextField type="text" placeholder="DepartureIATACode" fullWidth margin="normal" name="DepartureIATACode" value={this.state.DepartureIATACode} onChange={this.onChange}/>

                <TextField type="text" placeholder="DepartureICAOCode" fullWidth margin="normal" name="DepartureICAOCode" value={this.state.DepartureICAOCode} onChange={this.onChange}/>
                
                <TextField placeholder="DepartureTime" fullWidth margin="normal" name="DepartureTime" value={this.state.DepartureTime} onChange={this.onChange}/>
                
                <TextField placeholder="ArrivalIATACode" fullWidth margin="normal" name="ArrivalIATACode" value={this.state.ArrivalIATACode} onChange={this.onChange}/>
                
                <TextField type="text" placeholder=" ArrivalICAOCode" fullWidth margin="normal" name=" ArrivalICAOCode" value={this.state.ArrivalICAOCode} onChange={this.onChange}/>
                
                <TextField type="text" placeholder="ArrivalTime" fullWidth margin="normal" name="ArrivalTime" value={this.state.ArrivalTime} onChange={this.onChange}/>

                <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                
                </form>
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default EditFlightComponent;