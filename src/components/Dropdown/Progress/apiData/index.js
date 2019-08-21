import React, { Component } from "react";
import { Table } from "flwww";

const columns = [
	"Property",
	"Description",
	"Type",
	"Default"
];

const rows = [
	{
		Property: "prcnt",
		Description: "Value between 0 and 100.",
		Type: "Number",
		Default: "undefined",
	},
	{
		Property: "strokeColor",
		Description: `Define the color of the progress stroke. The default color is the primaryColor.`,
		Type: "String",
		Default: "#006eff",
	},
	{
		Property: "square",
		Description: "Makes the edge of the Progress component squared.",
		Type: "Boolean",
		Default: "false",
	},
];

const apiData = {
	columns,
	rows,
}

export default apiData;
