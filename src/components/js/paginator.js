import React, { Component } from 'react';

class PaginationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 10,
      data: [], // Store your data here
    };
  }

  // Fetch paginated data based on the current page and items per page
  fetchData = () => {
    // Implement your data fetching logic here
    // Example: Fetch data from an API using Axios or fetch()
  };

  componentDidMount() {
    this.fetchData();
  }

  handleNextPage = () => {
    this.setState(
      (prevState) => ({ currentPage: prevState.currentPage + 1 }),
      () => this.fetchData()
    );
  };

  handlePrevPage = () => {
    this.setState(
      (prevState) => ({ currentPage: prevState.currentPage - 1 }),
      () => this.fetchData()
    );
  };

  render() {
    const { data, currentPage, itemsPerPage } = this.state;

    return (
      <div>
        {/* Render your data here */}
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        {/* Pagination controls */}
        <button onClick={this.handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={this.handleNextPage}>Next</button>
      </div>
    );
  }
}

export default PaginationComponent;
