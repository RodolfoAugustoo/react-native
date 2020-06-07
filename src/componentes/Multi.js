import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilos/Padrao'

const Inverter = (props) => {

    const inv = props.texto.split('').reverse().join('')

    return <Text style={Padrao.ex}>{inv}</Text>
}

const MegaSena = (props) => {

    const [min, max] = [1, 60]
    //fill completa o Array
    //Recebe a quantidade de numeros que deseja ser gerado
    //Se não receber usa o 6 como default
    const numeros = Array(props.numeros || 6).fill(0)

    for (let i = 0; i < numeros.length; i++) {
        let novo = 0
        //Verificar se o numero gerado já existe
        //Caso um novo número dif dos existentes em numeros seja gerado
        //Esse valor é atribuído em numero e sai do 'while'
        while (numeros.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min - 1) + min)
        }
        numeros[i] = novo;
    }

    //Ordenando de forma crescente
    numeros.sort((a, b) => a - b)

    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}

export default Inverter
export { Inverter, MegaSena }