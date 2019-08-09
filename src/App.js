import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './routes/Routes';
import { loadUser } from './actions/auth';
import { Provider } from 'react-redux';
import store from './store/store'



export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    componentDidMount(){
        store.dispatch(loadUser());
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Header/>
                    <Menu/>
                    <Switch>
                        {this.showContentMenus(routes)}
                    </Switch>
                    <Footer/>
                </Router>
            </Provider>
        );
    }

    showContentMenus = (routes) => {
        let result = null;
        if(routes.length > 0){
            result = routes.map((route,index) => {
                return (
                    <Route key={index} 
                    path={route.path} 
                    exact={route.exact} 
                    component={route.main}
                    />
                )
            })
        }
        return result;
    }
}
