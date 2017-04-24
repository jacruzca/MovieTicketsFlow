/**
 * Created by jhoncruz on 24/04/17.
 * @flow
 */
import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View
} from 'react-native';
import type { Movie } from './data';
import { movies } from './data';

export default class Movies extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    {movies.map((movie: Movie, index) => <Text>{movie.title}</Text>)}
                </ScrollView>
            </View>
        );
    }
}