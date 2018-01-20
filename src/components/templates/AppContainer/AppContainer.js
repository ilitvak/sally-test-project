// Modules
import React, { Component } from 'react';
import Radium from 'radium';
import rentals from '../../../data/rentals';
import Image from '../../../font-awesome-4.7.0/searchIcon.png';

// Component styles
import styles from './styles';

class AppContainer extends Component {
	constructor () {
		super()
		this.state = { modalOpen : false }
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
								{rentals.map(rental => (
									<tr style={styles.spaceItems} className="clickToEdit" 
									onClick={() => this.setState({ modalOpen: true })}>
										<td>{rental.status}</td>
										<td>{rental.brand}</td>
										<td>{rental.first_name} {rental.last_name}</td>
										<td>{rental.email}</td>
										<td>{rental.start_date}</td>
										<td>-</td>
										<td>{rental.rate}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div className="modal" 
						style={ this.state.modalOpen ? styles.modalOpen : styles.modalClosed}>
						<div className="headerSection">
							<div style={styles.headerContainer}>
								<h2>Some Vehicle</h2>
								<p>Reserved</p>
								<div className='closingBoxContainer' onClick={() => this.setState({ modalOpen: false })}></div>
								<div className="closingBox1"></div>
								<div className="closingBox2"></div>
							</div>
						</div>

						<div className="formSection" style={styles.formSection}>
							<form className="form">
								<div style={styles.formContainer}>
									<div style={styles.inputWidth}>
										<label>Start Date</label>
										<input style={styles.modalInput} />
									</div>

									<div style={styles.inputWidth}>
										<label>End Date</label>
										<input style={styles.modalInput} />
									</div>

									<div style={styles.inputWidth}>
										<label>Rate</label>
										<input style={styles.modalInput} />
									</div>

									<div style={styles.inputWidth}>
										<label>Status</label>
										<select name="text" style={styles.selectBox}>
											<option value="value1" style={styles.optionBox}>reserved</option>	
											<option value="value2" style={styles.optionBox}>active</option>	
											<option value="value3" style={styles.optionBox}>returned</option>	
											<option value="value4" style={styles.optionBox}>archived</option>	
										</select>
									</div>
								</div>

								<div style={styles.formContainer}>
									<label>Vehicle</label>
									<input style={styles.modalInput} />
								</div>

								<div style={styles.formContainer}>
									<div style={styles.inputWidth}>
										<label>First Name</label>
										<input style={styles.modalInput} />
									</div>
									<div style={styles.inputWidth}>
										<label>Last Name</label>
										<input style={styles.modalInput} />
									</div>
									<div style={styles.lastInputModal}>
										<label>Email</label>
										<input style={styles.modalInput} />
									</div>
								</div>

								<div style={styles.modalFooter}>
									<div style={styles.modalFooterContent} className='clearFix'>
										<div style={styles.modalSpace} className="lft-flt">
											<a href='#' style={styles.delete}>
												<p >DELETE</p>
											</a>
										</div>
										<div style={styles.modalSpace} className='rgt-flt'>
											<a href='#' style={styles.save}>
												<p>SAVE</p>
											</a>
										</div>
									</div>
								</div>
							</form>

						</div>
					</div>
				</div>
			</div>	

		);
	} 
} 

export default Radium(AppContainer);
