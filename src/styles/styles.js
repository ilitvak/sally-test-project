export default {
	
	/* ----------------------- */
	/* General Setup
	/* ----------------------- */
	
	// Pomegranate color: #c0392b
	
	'*': {
		'padding': 0,
		'border': 0,
		'margin': 0,
    	'-webkit-box-sizing': 'border-box',
		'-moz-box-sizing': 'border-box',
		'-ms-box-sizing': 'border-box',
		'-o-box-sizing': 'border-box',
		'box-sizing': 'border-box',
  	},


	'html, body': {
    	width: '100%',
		minHeight: '100vh',
		fontFamily: 'ProximaNova',
		fontSize: '14px',
		color: '#4c4c4c',
		fontWeight: 400,
		background: '#f9f9f9',
		lineHeight: '1.42857',
		margin: 0,
		padding: 0,
		'-webkit-font-smoothing': 'antialiased',
		'font-smoothing': 'antialiased',
  	},

  	'a, a:hover': {
    	textDecoration: 'none',
	},

  	'button, button:active, button:focus': {
    	outline: 'none !important',
  	},

  	'.clear:after': {
    	display: 'block',
    	clear: 'both',
    	content: '""',
  	},
	
	/* ----------------------- */
	/* Table Section
	/* ----------------------- */
	
	'tr th:first-child': {
		paddingLeft: '30px'
	},
	
	'tr th': {
		paddingBottom: '5px',
		fontSize: '13px',
		lineHeight: '13px',
		color: '#95a5a6'
	},
	
	'tr td:first-child': {
		paddingLeft: '30px'
	},
	
	'tr td': {
		paddingTop: '10px',
		paddingBottom: '10px',
		borderBottom: '2px solid #fff',
	},
	
	'tr.clickToEdit': {
		cursor: 'pointer'
	},
	
	/* ----------------------- */
	/* Modal
	/* ----------------------- */
	
	
	'div.modal': {
		position: "absolute",
		width: '600px',
		height: 'auto',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: '#fff',
	},
	
	'.headerSection': {
		width: '100%',
		height: '100px',
		padding: '0 25px 35px',
		backgroundColor: '#c0392b'
	},
	
	'.headerSection h2': {
		paddingTop: '20px',
		fontSize: '40px',
		lineHeight: '40px',
		color: '#fff'
	},
	
	'.headerSection p': {
		color: '#fff',
		opacity: 0.8
	},
	
	'.closingBoxContainer': {
		position: "absolute",
		width: "25px",
		height: "25px",
		top: "calc((100px - 25px) / 2)",
		right: "29px",
		zIndex: 20,
		backgroundColor: "transparent",
		cursor: 'pointer',
	},
	
	'.closingBox1': {
		position: "absolute",
		width: "2px",
		height: '25px',
		top: 'calc((100px - 25px) / 2)',
		right: "40px",
		backgroundColor: "#fff",
		transform: 'rotate(-45deg)',
		zIndex: 5
	},
	
	'.closingBox2': {
		position: "absolute",
		width: "2px",
		height: '25px',
		top: 'calc((100px - 25px) / 2)',
		right: "40px",
		backgroundColor: "#fff",
		transform: 'rotate(45deg)',
		zIndex: 5
	},
	
	'form.form': {
		width: '100%'
	},
	
	'form input:focus': {
		outline: 'none',
		borderBottom: '1px solid #3498db'
	},
	
	'label': {
		color: "#bdc3c7"
	},
	
	'form div:first-child': {
		marginRight: '100px'
	},
	
	'form div:nth-child(3)': {
		marginRight: '100px'
	},
	
	'form div:nth-child(2)': {
		marginBottom: '30px'
	},
	
	'form div select:focus': {
		outline: 'none'
	},
	
	'form div select': {
		'-webkit-appearance': 'none'
	},
	
	'.lft-flt': {
		marginBottom: 0,
		float: 'left'
	},
	
	'.rgt-flt': {
		marginBottom: 0,
		float: 'right'
    },
    
    ".reservedTextColor": {
        color: '#d63031',
        fontWeight: 'bold'
    },

    ".reservedBgColor": {
        backgroundColor:'#d63031'
    },

    ".activeTextColor": {
        color: '#00b894',
        fontWeight: 'bold'
    },

    ".activeBgColor": {
        backgroundColor:'#00b894'
    },

    ".returnedTextColor": {
        color: "#0984e3",
        fontWeight: 'bold'
    },

    ".returnedBgColor": {
        backgroundColor:'#0984e3'
    },

    ".archivedTextColor": {
        color: "#2d3436",
        fontWeight: 'bold'
    },

    ".archivedBgColor": {
        backgroundColor:'#2d3436'
    }

};
