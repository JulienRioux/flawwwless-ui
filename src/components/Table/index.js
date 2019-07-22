import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Table.scss";
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
						  style={ this.props.style }
						  className={ `${ this.props.bordered && styles.tableWrapper } ${ styles.tableScroll } ${ this.props.className }` }>
							<table className={ styles.table }>
								<thead>
									<tr>
										{
                      // Custom columns labels, so if you get data from an external source you don't need to map.
											this.props.columns.map((column, i) => (
												<th key={ i }>{ column.label || column }</th>
											))
										}
									</tr>
								</thead>

								<tbody>
									{
										this.props.rows.map((row, i) => (
											<CustomTR key={ i }>
												{
													this.props.columns.map((column, j) => {
														const k = column.key || column;

                            // You can now pass components to the row
                            const item = row[k] instanceof Function ? row[k](row, column) : row[k];
                            
                            return <td key={ j }>{ item }</td>
                          })
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
