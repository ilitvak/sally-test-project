// Modules
import React, { Component } from 'react';
import Radium from 'radium';
import rentals from '../../../data/rentals';
import Modal from './modal';
import Image from '../../../font-awesome-4.7.0/searchIcon.png';
import Proptypes from 'prop-types';

// Component styles from Radium StyleSheet
import styles from './styles';

// Regular Style Sheet
import styleCSS from '../../../styles/styles'

class AppContainer extends Component {
	
	constructor() {
		super();
		
		this.state = { 
            initialModalStatus: false,
            tdEndDateEmpty: null
		};
        this.currentRental = {};
        this.rentals = rentals;
        this.currentBgColor = "";
    }

    colorInStatus = (rental) => {
        if(rental) {            
            if(rental.status === 'reserved'){
                return "reservedTextColor";
            } else if(rental.status === 'active') {
                return "activeTextColor";
            } else if(rental.status === 'returned') {
                return "returnedTextColor";
            } else if(rental.status === 'archived') {
                return "archivedTextColor";
            }
        }
    }

    modalBgColor = (rental) => {
        if(rental) {
        console.log("YOOOOOO");
            
            if(rental.status === 'reserved'){
                return "reservedBgColor";
            } else if(rental.status === 'active') {
                return "activeBgColor";
            } else if(rental.status === 'returned') {
                return "returnedBgColor";
            } else if(rental.status === 'archived') {
                return "archivedBgColor";
            }
        }
    }

    emptyDate = (rental) => {
        if(rental) {
            if(rental.end_date === "") {
                this.state.tdEndDateEmpty = true;
            }
            else if(rental.end_date !== ""){
                this.state.tdEndDateEmpty = false;
            }
        }
    }

    deleteEntry = () => {	
		if(this.currentRental) {
			this.rentals.forEach( (r, index) => {
                console.log(r);
				if(this.currentRental.id === r.id){
                    console.log(`The current rental id is ${this.currentRental.id} and the r id is: ${r.id}`);
					console.log(`The current index is ${index} and ${JSON.stringify(this.rentals[index])}`);
                    this.rentals.splice(index, 1);
				}
			})
        }
        this.closeModal(); 
	}
	
	closeModal = () => {
		this.setState({
			initialModalStatus: false
		});
	}
	
	onModalOpen = () => {
		this.setState({
			initialModalStatus: true
		});
	}
	
	populateModal = (rental) => {
		this.currentRental = rental;
        this.onModalOpen();
        this.currentBgColor = this.modalBgColor(rental);
	}
	
	printTable = () => {
		return this.rentals.map( (rental, i) => {
			return <tr style={styles.spaceItems} key={i} className="clickToEdit"
				onClick={() => this.populateModal(rental)}>
					<td className= { this.colorInStatus(rental) }>{rental.status}</td>
					<td>{rental.brand}</td>
					<td>{rental.first_name} {rental.last_name}</td>
					<td>{rental.email}</td>
					<td>{rental.start_date}</td>
					<td>{rental.end_date}<span className={this.emptyDate(rental)} style={this.state.tdEndDateEmpty ? styles.emptyDataFalse : styles.emptyDataTrue }>-</span></td>
					<td>{rental.rate}</td>
                </tr>    
        })
	}
	
	render () {
		
		return (
			<div style={styles.container}>
				<div style={styles.content}>
					<h1 style={styles.h1}>Rentals</h1>
					<p style={styles.totalChange}>6 total</p>
				</div>

				<div style={styles.mainContent}>
					<div style={styles.searchBoxContainer}>
						<input style={styles.searchBox} backgroundimage={Image} type="text"/>
					</div>

					<div style={styles.tableContainer}>
						<table style={styles.tableMain}>
							<tbody>
								<tr style={styles.header}>
									<th>Status</th>
									<th>Vehicle</th>
									<th>Driver</th>
									<th>Email</th>
									<th>Start</th>
									<th>Return</th>
									<th>Rate</th>
								</tr>
								{this.printTable()}
							</tbody>
						</table>
					</div>
					<Modal 
						initModalStatus = {this.state.initialModalStatus} 
						closeModal = {() => this.closeModal}
						rental = {this.currentRental}
                        deleteEntry = {() => this.deleteEntry}
                        bgModalHead = {this.currentBgColor}
						/>
				</div>
			</div>	
		);
	} 
} 

/* ------------- */
/* PropTypes 
/* ------------- */



export default Radium(AppContainer);
