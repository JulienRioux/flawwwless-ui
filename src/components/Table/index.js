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
								this.props.columns.map((column, i) => (
									<th key={ i }>{ column }</th>
								))
							}
						</tr>
					</thead>

					<tbody>
						{
							this.props.rows.map((row, i) => (
								<tr key={ i }>
									{
										this.props.columns.map((column, j) => (
											<td key={ j }>{ row[column] }</td>
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
