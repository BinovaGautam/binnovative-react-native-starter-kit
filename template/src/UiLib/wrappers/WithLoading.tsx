// ui-library/wrappers/WithLoading.tsx
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

interface WithLoadingProps {
    isLoading: boolean;
    [key: string]: any;
}

const WithLoading = <P extends object>(Component: React.ComponentType<P>) => {
    return ({ isLoading, ...props }: WithLoadingProps & P) => {
        if (isLoading) {
            return (
                <View>
                    <ActivityIndicator size="large" />
                </View>
            );
        }

        return <Component {...(props as P)} />;
    };
};

export default WithLoading;
