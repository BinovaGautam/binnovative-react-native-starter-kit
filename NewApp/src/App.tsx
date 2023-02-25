import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import ApplicationNavigator from '@/Navigators/Application'
import { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ApplicationNavigator />
        </PersistGate>
       </Provider>
  </QueryClientProvider>
)

export default App
