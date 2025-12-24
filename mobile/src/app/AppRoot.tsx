// src/app/AppRoot.tsx
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from './navigation/RootNavigator'

export const AppRoot = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}
