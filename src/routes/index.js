import { NavigationContainer } from '@react-navigation/native'
import { MainStack } from './stack.routes.js'

export function Routes() { 
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}