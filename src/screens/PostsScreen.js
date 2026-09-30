import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useFetch from '../hooks/useFetch';
import { getPosts } from '../api/jsonplaceholder';
import ReloadButton from '../components/ReloadButton';

export default function PostsScreen() {
    //posts = lista de publicaciones
    //loading = si está cargando
    //error = si hubo error
    //reload = función para recargar los datos otra vez
    //useFetch(getPosts) = trae los datos
    const { data: posts, loading, error, reload } = useFetch(getPosts);
    
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
                        Mostrando {posts.length} publicaciones
                    </Text>
                    <FlatList
                        data={posts} //las publicaciones
                        //toString() = convierte el id en texto
                        keyExtractor={item => item.id.toString()} //clave única
                        //Renderiza cada post
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Text style={styles.bold}>{item.title}</Text>
                                <Text>{item.body}</Text>
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