import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PostsScreen from './src/screens/PostsScreen';
import UsersScreen from './src/screens/UsersScreen';

//Secciones
const TABS = [
  { key: 'posts', label: 'Publicaciones' },
  { key: 'users', label: 'Usuarios' },
];

export default function App() {
  const [tab, setTab] = useState('posts'); //empieza con posts por default

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API Lab</Text>
      <View style={styles.tabs}>
        {TABS.map(t => ( //recorre el arreglo y crea un botón por cada elemento
          <TouchableOpacity
            key={t.key} //clave única de cada botón
            //styles.tab = estilo base
            //si el botón corresponde a la pestaña activa, se aplica styles.tabActive
            style={[styles.tab, tab === t.key && styles.tabActive]}
            onPress={() => setTab(t.key)}
          >
            <Text style={[styles.tabText,
            tab === t.key && styles.tabTextActive]}>
              {t.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/*Muestra la pantalla correcta*/}
      {tab === 'posts' ? <PostsScreen /> : <UsersScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    marginTop: 55,
    marginBottom: 20
  },

  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },

  tabs: {
    flexDirection: 'row',
    marginBottom: 12,
    borderRadius: 6,
    overflow: 'hidden', //para que el borde se vea bonito
    borderWidth: 1,
    borderColor: '#1e88e5',
  },

  //Cada botón ocupa la mitad del ancho
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  tabActive: { 
    backgroundColor: '#1e88e5' 
  },

  tabText: { 
    color: '#1e88e5', 
    fontWeight: '600' 
  },

  tabTextActive: { 
    color: '#fff' 
  },
});