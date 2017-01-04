import { Link } from 'react-router';

<Link to="path/in/app">Go to page</Link>



import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const myRecords = [];

const tableAttributes = {
	ignoreSinglePage: true,
	pagination: true,
	search: true,
	searchPlaceholder: 'Search by myField',
	options: {
		hideSizePerPage: true,
		nextPage: 'Next',
		prePage: 'Previous',
		sizePerPage: 10,
		paginationSize: 3,
		lastPage: 'Last',
		firstPage: 'First',
		noDataText: (
			<div className="react-bs-table-empty">
				No myRecords found.
			</div>
		),
	},
};

const formatFunction = (field, record) => {
	return field;
}

<BootstrapTable data={myRecords} {...tableAttributes} tableHeaderClass="myRecords-header">
	<TableHeaderColumn
		isKey
		dataField="myIdField"
		searchable={false}
		hidden
	>My Field</TableHeaderColumn>
	<TableHeaderColumn
		dataField="myField"
		columnClassName="myField-header-cell"
		className="myField-cell"
		dataFormat={formatFunction}
		dataSort
	>My Field</TableHeaderColumn>
</BootstrapTable>