import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { LoginContainer, StartupContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import { useSelector } from 'react-redux'
import { FullScreenLoader } from '@/Components'

const SomeComp = () => 
  <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center'}}>
    <Text>Are Bhai Bhai </Text>
  </View>


const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { imagesObj, alertObj, isLoading, loadingText } = useSelector((state: any) => state.general)
  const { isLoggedIn, user } = useSelector((state: any) => state.auth)
  const { colors } = NavigationTheme


  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: colors.card}]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Group>
            <Stack.Screen name="Startup" component={StartupContainer} />
            <Stack.Screen
              name="Main"
              component={isLoggedIn ? MainNavigator : LoginContainer}
              options={{
                animationEnabled: false,
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      {isLoading && <FullScreenLoader loadingTxt={loadingText} />}
    </SafeAreaView>
  );
}

export default ApplicationNavigator
