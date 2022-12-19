import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

class ListFlightComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteFlight = this.deleteFlight.bind(this);
        this.editFlight = this.editFlight.bind(this);
        this.addFlight = this.addFlight.bind(this);
        this.reloadFlightList = this.reloadFlightList.bind(this);
    }

    componentDidMount() {
        this.reloadFlightList();
    }

    reloadFlightList() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result})
            });
    }

    deleteFlight(userId) {
        ApiService.deleteFlight(userId)
           .then(res => {
               this.setState({message : 'Flight deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })
    }

    editFlight(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addFlight() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Flight Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addFlight()}>
                    Add Flight
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Flight Code</TableCell>
                            <TableCell align="right">Departure IATA Code</TableCell>
                            <TableCell align="right">Departure ICAO Code</TableCell>
                            <TableCell align="right">Departure Time</TableCell>
                            <TableCell align="right">Arrival IATA Code</TableCell>
                            <TableCell align="right">Arrival ICAO Code</TableCell>
                            <TableCell align="right">Arrival Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.departureIATACode}</TableCell>
                                <TableCell align="right">{row.departureICAOCode}</TableCell>
                                <TableCell align="right">{row.departureTime}</TableCell>
                                <TableCell align="right">{row.ArrivalIATACode}</TableCell>
                                <TableCell align="right">{row.ArrivalICAOCode}</TableCell>
                                <TableCell align="right">{row.ArrivalTime}</TableCell>
                                <TableCell align="right" onClick={() => this.editUser(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListFlightComponent;