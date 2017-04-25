/**
 * Created by jhoncruz on 24/04/17.
 * @flow
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ScrollView,
    View,
    StyleSheet
} from 'react-native';
import type { Movie } from './data';
import { movies } from './data';
import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';

type State = { popupIsOpen: boolean, movie?: Movie };

export default class Movies extends Component<void, void, State> {
    
    state = {
        popupIsOpen: false
    };
    
    openMovie = (movie: Movie) => {
        this.setState({
            popupIsOpen: true,
            movie,
        });
    };
    
    closeMovie = () => {
        this.setState({
            popupIsOpen: false,
        });
    };
    
    render() {
        
        const { movie, popupIsOpen }:State = this.state;
        
        return (
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    // Hide all scroll indicators
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {movies.map((movieItem: Movie, index: number) => <MoviePoster
                        movie={movieItem}
                        onOpen={this.openMovie}
                        key={index}
                    />)}
                </ScrollView>
                <MoviePopup
                    movie={movie}
                    isOpen={popupIsOpen}
                    onClose={this.closeMovie}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,         // start below status bar
    },
    scrollContent: {
        flexDirection: 'row',   // arrange posters in rows
        flexWrap: 'wrap',       // allow multiple rows
    },
});