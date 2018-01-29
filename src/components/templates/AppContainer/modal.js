import React from "react";

// Component styles
import styles from './styles';

export default class Modal extends React.Component {
	
	constructor(props){
        super(props);
		
		this.state = {
			holdModalStatus: props.initModalStatus,
        }
    }

	render(){
        let rental = this.props.rental;
        console.log(this.props.rental);
        let bgModalColor = this.props.bgModalHead;
        console.log("The returned value is " + this.props.bgModalHead);
		return (
            
			<div className="modal" style={ this.props.initModalStatus ? styles.modalOpen : styles.modalClosed}>
				<div className={`headerSection ${bgModalColor}`}>
					<div style={styles.Container}>
						<h2>Some Vehicle</h2>
						<p>Reserved</p>
						<div className='closingBoxContainer' onClick={this.props.closeModal()}></div>
						<div className="closingBox1"></div>
						<div className="closingBox2"></div>
					</div>
				</div>

				<div className="formSection" style={styles.formSection}>
					<form className="form">

						 <div style={styles.formContainer}>
							<div style={styles.inputWidth}>
								<label>Start Date</label>
								<input type="text" name="start_date" style={styles.modalInput} value={rental.start_date} onChange={(e) => console.log(e)}/>
							</div>

							<div style={styles.inputWidth}>
								<label>End Date</label>
								<input style={styles.modalInput} value={rental.end_date} type="text" name="end_date" onChange={(e) => console.log(e)} />
							</div>

							<div style={styles.inputWidth}>
								<label>Rate</label>
								<input style={styles.modalInput} value={rental.rate} type="number" onChange={(e) => console.log(e)}/>
							</div>

							<div style={styles.inputWidth}>
								<label>Status</label>
								<select name="text" style={styles.selectBox} onChange={(e) => console.log(e)}>
									<option value="value1" style={styles.optionBox}>reserved</option>	
									<option value="value2" style={styles.optionBox}>active</option>	
									<option value="value3" style={styles.optionBox}>returned</option>	
									<option value="value4" style={styles.optionBox}>archived</option>	
								</select>
							</div>
						</div>

						<div style={styles.formContainer}>
							<label>Vehicle</label>
							<input style={styles.modalInput} onChange={(e) => console.log(e)} value={rental.brand}/>
						</div>

						<div style={styles.formContainer}>
							<div style={styles.inputWidth}>
								<label>First Name</label>
								<input style={styles.modalInput} value={rental.first_name} onChange={(e) => console.log(e)}/>
							</div>
							<div style={styles.inputWidth}>
								<label>Last Name</label>
								<input style={styles.modalInput} onChange={(e) => console.log(e)} value={rental.last_name}/>
							</div>
							<div style={styles.lastInputModal}>
								<label>Email</label>
								<input style={styles.modalInput} onChange={(e) => console.log(e)} value={rental.email}/>
							</div>
						</div>

						<div style={styles.modalFooter}>
							<div style={styles.modalFooterContent} className='clearFix'>
								<div style={styles.modalSpace} className="lft-flt">
									<a href="#" style={styles.delete}>
										<p onClick={this.props.deleteEntry()}>DELETE</p>
									</a>
								</div>
								<div style={styles.modalSpace} className='rgt-flt'>
									<a href="#" style={styles.save}>
										<p>SAVE</p>
									</a>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		
		);
	}
}