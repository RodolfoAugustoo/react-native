import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Inverter, MegaSena } from './componentes/Multi'
import ParImpar from './componentes/ParImpar'
import Simples from './componentes/Simples'
import 'react-native-gesture-handler'
import Contador from './componentes/Contador'
import Plataforma from './componentes/Plataformas'
import Validar from './componentes/ValidarProps'
/**
 * Não foi possível realizar essa aula seguindo o processo de instalação da aula
 * As instalaçóes necessárias são as seguintes
 * 
 * npm install @react-navigation/native

npm install react-native-gesture-handler

npm install react-native-reanimated

npm install react-native-screens

npm install react-native-safe-area-context

npm install @react-native-community/masked-view

npm install @react-navigation/drawer
 */

const Drawer = createDrawerNavigator();

export default function Menu() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Mega Sena" >
				<Drawer.Screen name="Mega Sena">
					{props => <MegaSena numeros={9} />}
				</Drawer.Screen>
				<Drawer.Screen name="Inverter">
					{props => <Inverter texto="Rodolfo Augusto" />}
				</Drawer.Screen>
				<Drawer.Screen name="Par e Ímpar">
					{props => <ParImpar numero={8} />}
				</Drawer.Screen>
				<Drawer.Screen name="Simples">
					{props => <Simples texto="Curso React Native" />}
				</Drawer.Screen>
				<Drawer.Screen name="Contador">
					{props => <Contador numeroInicial={20} />}
				</Drawer.Screen>
				<Drawer.Screen name="Plataformas">
					{props => <Plataforma />}
				</Drawer.Screen>
				<Drawer.Screen name="Validar">
					{() => <Validar label="Nova label " ano={18} />}
				</Drawer.Screen>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}