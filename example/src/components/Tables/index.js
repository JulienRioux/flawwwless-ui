import React from 'react';
import { Table, Icon } from 'flawwwless-library'

const Tables = props => {


	const tableData = {
	  columns: ['Service', 'Cost/Unit', 'Unit', 'Units Requested'],
	  rows: [{
	    'Service': 'Veterinary Assitance',
	    'Cost/Unit': 50,
	    'Unit': '1 Hour',
	    'Units Requested': 12
	  },{
	    'Service': 'Veterinary Assitance 2',
	    'Cost/Unit': 50,
	    'Unit': '1 Hour',
	    'Units Requested': 12
	  },{
	    'Service': 'Veterinary Assitance 3',
	    'Cost/Unit': 50,
	    'Unit': <span>Hello <Icon type="hand" /></span>,
	    'Units Requested': 12
	  }]
	}

	return (
		<div className="container">
			<div className="componentBlock">
				<h3 className="componentTitle">Table</h3>
				<p className="componentDescr">Display dataset inside table.</p>
		    <Table
				  bordered
				  columns={ tableData.columns }
					rows={ tableData.rows } />

				<p style={{ paddingTop: "2rem" }} className="componentDescr">Without border.</p>
		    <Table
				  columns={ tableData.columns }
					rows={ tableData.rows } />
			</div>
		</div>
	)
}

export default Tables;
