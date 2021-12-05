import React from 'react';
import { AuthProvider } from './app/store/context/auth';
import AppNavigation from './app/navigation/AppNavigation';

const App = () => { 
    return (
        <AuthProvider>
            <AppNavigation />
        </AuthProvider>
    )
}

export default App;
