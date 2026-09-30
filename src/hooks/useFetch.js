import { useState, useEffect, useCallback } from 'react';

//Manejar estados de carga y error
export default function useFetch(fetcher) {
    const [data, setData] = useState([]); //guardar los datos
    const [loading, setLoading] = useState(true); //indica si está cargando la info
    const [error, setError] = useState(null); //mensaje de error

    //useCallback = para memorizar una función y evitar recrearla innecesariamente
    const load = useCallback(() => {
        setLoading(true); //empieza cargando
        setError(null); //se limpia cualquier error previo
        fetcher() //llama a la función que trae los datos
            .then(setData) //si funciona, se guarda la respuesta en data
            .catch(() => setError('Error al cargar datos')) //por si falla
            .finally(() => setLoading(false)); //ya cargó, por eso false
    }, [fetcher]);

    //Eejcutar la carga automáticamente al montar el componente
    useEffect(() => { 
        load(); 
    }, [load]);

    //reload = una función para volver a cargar los datos otra vez
    return { data, loading, error, reload: load };
}