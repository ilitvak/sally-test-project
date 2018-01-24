import searchIcon from '../../../font-awesome-4.7.0/searchIcon.png';
import downKaret from '../../../font-awesome-4.7.0/double.png';

export default {
	
	
	/* ----------------------- */
	/* General Setup
	/* ----------------------- */
	
	body: {
		padding: 0,
		border: 0,
		margin: 0,
		boxSizing: 'border-box',
	},
	
	// Gray Color - '#95a5a6'
	// Cloud Color - '#ecf0f1'
	// Silver Color - '#bdc3c7'
	
	/* ----------------------- */
	/* Header Section
	/* ----------------------- */
	
 	container: {
    	width: '100%',
    	padding: '50px 20px',
  	},
	
  	content: {
    	width: '100%',
		maxWidth: '1200px',
		backgroundColor: '#3498db',
		boxShadow: '5px 6px 15px 0px rgba(0,0,0,0.6)',
		borderRadius: '6px',
		margin: 'auto',
  	},
	
	h1: {
		padding: '20px 30px 0',
		marginBottom: 0,
		color: '#fff'
    },
    
    totalChange: {
		paddingLeft: '30px',
		paddingBottom: '10px',
		marginTop: 0,
        fontSize: '15px',
        color: '#fff',
    },
	
	/* ----------------------- */
	/* Main / Search Box Section 
	/* ----------------------- */
	
	mainContent: {
		maxWidth: '1200px',
		height: 330,
		borderRadius: '4px',
		margin: '0 auto',
		backgroundColor: '#fff',
		boxShadow: '5px 6px 15px 0px rgba(0,0,0,0.6)'
	},
	
	searchBoxContainer: {
		paddingTop: '20px',
		paddingRight: '30px',
		textAlign: 'right',
		
		img : {
			fontSize: '10px',
			width: '100px'
		}
	},
	
	searchBox: {
		width: '200px',
		height: '25px',
		border: 'none',
		borderBottom: '1px solid #95a5a6',
		color: '#000',
		backgroundImage: `url(${searchIcon})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '25px 25px',
    	backgroundPosition: '0px 0px',
	
		':focus': {
			outline: 'none',
			backgroundImage: 'none',
			borderBottom: '1px solid #3498db'
		}, 
	},
	
	/* ----------------------- */
	/* Table Section
	/* ----------------------- */
	
	tableContainer: {
		marginTop: '20px'
	},
	
	tableMain : {
		width: '100%',
		borderCollapse: "collapse"
	},
	
	header : {
		textAlign: 'left',
		opacity: .8
	},
	
	spaceItems: {
		marginBottom: '2px',
		backgroundColor: '#ecf0f1'
	},
	
	tdSize : {
		paddingTop: '10px',
		paddingBottom: '10px',
		borderBottom: '2px solid #fff',
	},
	
	/* ----------------------- */
	/* Modal
	/* ----------------------- */
	
	modalOpen: {
		display: 'block',
		boxShadow: '0px 0px 25px 0px rgba(0,0,0,0.6)'
	},
	
	modalClosed: {
		display: 'none'
	},
	
	modal : {
		boxShadow: '0px 0px 25px 0px rgba(0,0,0,0.6)'
	},
	
	headerContainer : {
		maxWidth: '550px',
		margin: '0 auto'
	},
	
	formSection: {
		display: 'table',
		width: '100%',
		clear: 'both',
		margin: '0 auto'
	},
	
	formContainer: {
		padding: '30px 25px 35px',
		borderBottom: '1px solid #bdc3c7',
		margin: '0 auto'
	},
	
	inputWidth: {
		display: 'inline-block',
		width: '225px',
	},
	
	modalInput : {
		display: 'block',
		width: '100%',
		border: 'none',
		borderBottom: '1px solid #bdc3c7',
		fontSize: '25px',
		color: '#000'
	},	
	
	selectBox: {
		display: "block",
		width: "100%",
		paddingTop: "10px",
		borderTop: "none",
		borderRight: "none",
		borderBottom: "1px solid rgb(189, 195, 199)",
		borderLeft: "none",
		borderImage: "initial",
		fontSize: "22px",
		color: '#000',
		backgroundImage: `url(${downKaret})`,
		backgroundSize: '13px 13px',
		backgroundPosition: "210px 20px",
		backgroundRepeat: 'no-repeat',
		backgroundColor: 'transparent',
	},
	
	lastInputModal: {
		width: '100%',
		marginRight: 0
	},
	
	modalFooter: {
		width: '100%',
		height: '50px',
		backgroundColor: '#ecf0f1'
	},
	
	modalFooterContent: {
		width: '100%',
		height: '100%',
		padding: 'calc((50px - 19px) / 2) 25px'
	},
	
	modalSpace: {
		display: 'inline-block',
		marginBottom: 0
	},
	
	delete: {
		color: '#000'
	},
	
	save: {
		color: '#e74c3c'
	},
	
	returnEmpty: {
		content: '-'
	},
	
	deleteEntry: {
		display: 'none'
	}
	
}