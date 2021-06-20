import React from 'react';

import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TouchableOpacityProps
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps  {
    title: string
}

export function Button({ title, ...rest } : ButtonProps) {
    return(
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
        <Text style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#7159c1',
        alignItems: 'center',
        borderRadius: 7,
        padding: 15,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    },
})