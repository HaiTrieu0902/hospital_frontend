import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import SpecialityPopular from './Section/SpecialityPopular';
import MedicialFacility from './Section/MedicialFacility';
import PopularDoctor from './Section/PopularDoctor';
import HandBook from './Section/HandBook';
import About from './Section/About';
import Footer from './Footer/Footer';

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <SpecialityPopular></SpecialityPopular>
                <MedicialFacility />
                <PopularDoctor />
                <HandBook />
                <About />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
