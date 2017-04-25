/**
 * Created by jhoncruz on 24/04/17.
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { defaultStyles } from './styles';
import type { Movie } from './data';

const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols: number = 3, rows: number = 3;

type Props = {
    movie: Movie,
    onOpen: PropTypes.func.isRequired
};

export default class MoviePoster extends Component<void, Props, void> {
    render() {
        const { movie, onOpen } = this.props;
        const { title, genre, poster } = movie;
        return (
            <TouchableOpacity style={styles.container} onPress={()=> onOpen(movie)}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: poster}} style={styles.image}/>
                </View>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.genre} numberOfLines={1}>{genre}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginBottom: 10,
        height: (height - 20 - 20) / rows - 10,
        width: (width - 10) / cols - 10,
    },
    imageContainer: {
        flex: 1,                          // take up all available space
    },
    image: StyleSheet.flatten([
        StyleSheet.absoluteFillObject, // fill up all space in a container
        { borderRadius: 10 }                 // rounded corners
    ]),
    title: StyleSheet.flatten([
        defaultStyles.text,
        {
            fontSize: 14,
            marginTop: 4
        }
    ]),
    genre: StyleSheet.flatten([
        defaultStyles.text,
        {
            color: '#BBBBBB',
            fontSize: 12,
            lineHeight: 14
        }
    ])
});