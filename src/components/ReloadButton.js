import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ReloadButton({ onPress, disabled }) {
    return (
        <TouchableOpacity
        //styles.btn = estilo base del botón
        //Si disabled = true, se reduce la opacidad
            style={[styles.btn, disabled && { opacity: 0.5 }]}
            onPress={onPress} //cuando se toca el botón, ejecuta la función
            disabled={disabled} //si disabled = true, el botón no responderá
        >
            <Text style={styles.text}>Recargar datos</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#1e88e5',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginBottom: 10,
    },

    text: { 
        color: '#fff', 
        fontWeight: 'bold' 
    },
});