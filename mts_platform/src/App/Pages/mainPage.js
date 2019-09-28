import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Link to="/employers">Employers</Link>
                <Link to="/jobs">Jobs</Link>
            </div>
        );
    }
}

export default MainPage;