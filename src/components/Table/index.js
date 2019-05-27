import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Table.scss";
import Icon from "../Icon";



class Table extends Component {
	static propTypes = {
		columns: PropTypes.array,
		rows: PropTypes.array,
	}

	render(){
		return (
			<div
			  { ...this.props }
			  className={ this.props.bordered && styles.tableWrapper }>
				<table className={ styles.table }>
					<thead>
						<tr>
							{
								this.props.columns.map((column) => (
									<th>{ column }</th>
								))
							}
						</tr>
					</thead>

					<tbody>
						{
							this.props.rows.map((row) => (
								<tr>
									{
										this.props.columns.map((column) => (
											<td>{ row[column] }</td>
										))
									}
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Table;
