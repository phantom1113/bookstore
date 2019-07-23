import React from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Banner from './components/Banner'




export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <Banner/>
            </div>
        );
    }
}
