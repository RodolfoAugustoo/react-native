import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../estilos/Padrao';


function parOuImpar(numero) {
    /* //Maneira 2
    if (numero % 2 === 0) {
        return <Text style={Padrao.ex}>Par</Text>
    }
    else {
        return <Text style={Padrao.ex}>Ímpar</Text>
    } */

    //Maneira 3
    const resultado = numero % 2 == 0 ? 'Par' : 'Ímpar';
    return <Text style={Padrao.ex}>{resultado}</Text>
}



export default function (props) {

    return (
        <View>
            {/* //Maneira 3 */}
            {parOuImpar(props.numero)}
            
            {/* {
                //Maneira 1
                props.numero % 2 === 0
                    ?
                    <Text style={[Padrao.ex]}>Par</Text>
                    :
                    <Text style={[Padrao.ex]}>Impar</Text>
            } */}
        </View>
    )
}