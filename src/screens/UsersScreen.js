import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useFetch from '../hooks/useFetch';
import { getUsers } from '../api/jsonplaceholder';
import ReloadButton from '../components/ReloadButton';

export default function UsersScreen() {
    //users = lista de usuarios
    //loading = si está cargando
    //error = si hubo error
    //reload = función para recargar los datos otra vez
    //useFetch(getUsers) = trae los datos de los usuarios
    const { data: users, loading, error, reload } = useFetch(getUsers);

    return (
        <View style={styles.container}>
            {/*
                reload = función para volver a pedir los datos
                Si loading es true, el botón queda deshabilitado
            */}
            <ReloadButton onPress={reload} disabled={loading} />
            {error && <Text style={styles.error}>{error}</Text>}
            {loading ? (
                //Si loading = true
                <Text>Cargando datos...</Text>
            ) : (
                //Si loading = false (ya cargó)
                <>
                    <Text style={styles.counter}>
                        Mostrando {users.length} usuarios
                    </Text>
                    <FlatList
                        data={users} //los usuarios
                        //toString() = convierte el id en texto
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                {/*Datos de la misma api*/}
                                <Text style={styles.bold}>{item.name}</Text>
                                <Text>Email: {item.email}</Text>
                                <Text>Ciudad: {item.address.city}</Text>
                                <Text>Zipcode: {item.address.zipcode}</Text>
                            </View>
                        )}
                    />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1 
    },

    counter: { 
        fontStyle: 'italic', 
        marginBottom: 8, 
        color: '#555' 
    },

    error: { 
        color: 'red', 
        marginBottom: 8 
    },

    card: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },

    bold: { 
        fontWeight: 'bold', 
        marginBottom: 5 
    },
});