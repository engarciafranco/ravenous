import React from 'react'
import './BusinessList.css'
import Business from '../Business/Business'

class BusinessList extends React.Component {
    render() {
        return(
            <div className="BusinessList">
                {
                    this.props.businesses.map(function(business) {  //business => { ... } also works!
                        return <Business business={business}/>;
                })
                }
            </div>
        )
    }
};

export default BusinessList;
