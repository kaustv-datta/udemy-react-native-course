import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }

    switch(action.type) {
        case 'change_red':
            return { ...state, red: Math.max(Math.min(state.red + action.payload, 255), 0) };
        case 'change_green':
            return { ...state, green: Math.max(Math.min(state.green + action.payload, 255), 0) };
        case 'change_blue':
            return { ...state, blue: Math.max(Math.min(state.blue + action.payload, 255), 0) };
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;

    return <View>
        <ColourCounter
            colour="Red"
            onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
        />
        <ColourCounter
            colour="Green"
            onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
        />
        <ColourCounter
            colour="Blue"
            onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
        />
        <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>;
};

const styles = StyleSheet.create({});

export default SquareScreen;