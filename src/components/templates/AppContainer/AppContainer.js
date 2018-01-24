// Modules
import React, { Component } from 'react';
import Radium from 'radium';
import rentals from '../../../data/rentals';
import Modal from './modal';
import Image from '../../../font-awesome-4.7.0/searchIcon.png';

// Component styles
import styles from './styles';

class AppContainer extends Component {
	
	constructor() {
		super();
		
		this.state = { 
			initialModalStatus: false
		};
		
		this.currentRental = {};
    }
	
	closeModal = () => {
		this.setState({
			initialModalStatus: false
		})
	}
	
	onModalOpen() {
		this.setState({
			initialModalStatus: true
		});
	}
	
	populateModal = (rental) => {
		this.currentRental = rental;
		this.onModalOpen();
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
								{rentals.map((rental, i) => (
									<tr style={styles.spaceItems} key={i} className="clickToEdit" 
									onClick={() => this.populateModal(rental)}>
										<td>{rental.status}</td>
										<td>{rental.brand}</td>
										<td>{rental.first_name} {rental.last_name}</td>
										<td>{rental.email}</td>
										<td>{rental.start_date}</td>
										<td>{rental.end_date}</td>
										<td>{rental.rate}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<Modal 
						initModalStatus = {this.state.initialModalStatus} 
						closeModal = {() => this.closeModal}
						rental = {this.currentRental}
						/>
				</div>
			</div>	

		);
	} 
} 

export default Radium(AppContainer);
