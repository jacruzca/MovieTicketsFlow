/**
 * Created by jhoncruz on 24/04/17.
 * @flow
 */
import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';
import Movies from './Movies';

const RouteMapper = (route, navigator) => {
    if (route.name === 'movies') {
        return <Movies navigator={navigator}/>
    }
};

export default class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: 'movies'}}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
                renderScene={RouteMapper}
            />
        );
    }
}