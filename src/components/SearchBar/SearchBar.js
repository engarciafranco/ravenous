import React from 'react'
import './SearchBar.css'

const SortByOptions = {
    'Best Match': 'best_match',
    'Highest Rating': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    //Supposed to render the options above the searchbar
    renderSortByOptions() {
        return Object.keys(SortByOptions).map(SortByOptions => {
            let SortByOptionsValue = SortByOptions[SortByOptions];
            return(<li key={{SortByOptionsValue}}>{SortByOptions}</li>)
        });
    };

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div class="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;
