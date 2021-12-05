import React from 'react';
import { AuthProvider } from './app/store/context/auth';
import AppNavigation from './app/navigation/AppNavigation';
import { NativeBaseProvider } from 'native-base';

const App = () => { 
    return (
        <NativeBaseProvider>
            <AuthProvider>
                <AppNavigation />
            </AuthProvider>
        </NativeBaseProvider>
    )
}

export default App;
