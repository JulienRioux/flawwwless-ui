import React from 'react';
import { Table } from "flwww";
import { Link } from "react-router-dom";

const Tables = props => {


	const tableData = {
	  columns: ['Service', 'Cost per Unit', 'Unit', 'Unit sold'],
	  rows: [{
	    'Service': 'Web Design',
	    'Cost per Unit': 40,
	    'Unit': <Link to="/web-design">1 hour</Link>,
	    'Unit sold': 10,
	  },{
	    'Service': 'Front End Development',
	    'Cost per Unit': 50,
	    'Unit': <Link to="/front-end-dev">1 hour</Link>,
	    'Unit sold': 25,
	  },{
	    'Service': 'Back End Development',
	    'Cost per Unit': 50,
	    'Unit': <Link to="/back-end-dev">1 hour</Link>,
	    'Unit sold': 25,
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
