/**
 * Created by jhoncruz on 24/04/17.
 * @flow
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ScrollView,
    View,
    StyleSheet,
    Navigator
} from 'react-native';
import type { Movie } from './data';
import { movies } from './data';
import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';

type Props = {
    navigator: Navigator
};
type State = { popupIsOpen: boolean, movie?: Movie, chosenDay: number, chosenTime: ?number };

export default class Movies extends Component<void, Props, State> {
    
    state = {
        popupIsOpen: false,
        chosenDay: 0,
        chosenTime: null
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
            // Reset values to default ones
            chosenDay: 0,
            chosenTime: null
        });
    };
    
    chooseDay = (day: number) => {
        this.setState({
            chosenDay: day,
        });
    };
    
    chooseTime = (time: number) => {
        this.setState({
            chosenTime: time,
        });
    };
    
    bookTicket = () => {
        // Make sure they selected time
        if (!this.state.chosenTime) {
            alert('Please select show time');
        } else {
            // Close popup
            this.closeMovie();
            // Navigate away to Confirmation route
            this.props.navigator.push({
                name: 'confirmation',
                // Generate random string
                code: Math.random().toString(36).substring(6).toUpperCase(),
            });
        }
    };
    
    render() {
        
        const { movie, popupIsOpen, chosenDay, chosenTime }:State = this.state;
        
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
                    chosenDay={chosenDay}
                    chosenTime={chosenTime}
                    onChooseDay={this.chooseDay}
                    onChooseTime={this.chooseTime}
                    onBook={this.bookTicket}
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