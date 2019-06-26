import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Table.scss";
import Icon from "../Icon";
import styled from "styled-components";
import { primaryColor } from "../../styles";

import ThemeContext from "../../context/themeContext";


class Table extends Component {
	static propTypes = {
		columns: PropTypes.array,
		rows: PropTypes.array,
	}

	render(){
		return (
			<ThemeContext.Consumer>
				{ context => {
					// Get the right style for the button
					let hoverColor = primaryColor;

					// Check if there is an existing context (custom theming)
					if(context){
						hoverColor = context.primaryColor;
					}

					const CustomTR = styled.tr`
						:hover {
							background-color: ${ hoverColor }0c;
						}
					`;

					return (
						<div
						  { ...this.props }
						  className={ `${ this.props.bordered && styles.tableWrapper } ${ styles.tableScroll }` }>
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
											<CustomTR key={ i }>
												{
													this.props.columns.map((column, j) => (
														<td key={ j }>{ row[column] }</td>
													))
												}
											</CustomTR>
										))
									}
								</tbody>
							</table>
						</div>
					)
				} }
			</ThemeContext.Consumer>
		)
	}
}

export default Table;
