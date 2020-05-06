import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase_counter':
            return state + 1;
        case 'decrease_counter':
            return state - 1;
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    return <View>
        <Button 
            title="Increase"
            onPress={() => dispatch({type: 'increase_counter'})}
        />
        <Button
            title="Decrease"
            onPress={() => dispatch({type: 'decrease_counter'})}
        />
        <Text>Current Count: {state}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;