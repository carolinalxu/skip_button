import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonText } from '@gluestack-ui/themed';

function App() {
    const [buttonPressed, setButtonPressed] = useState(false);

    const handlePressIn = () => {
        setButtonPressed(true);
    };

    const handlePressOut = () => {
        setButtonPressed(false);
    };

    const buttonColor = buttonPressed ? '#629560' : 'white';
    const textColor = buttonPressed ? 'white' : '#629560';

    return (
        <View style={styles.container}>
            <Button
                size="xs"
                variant="outline"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                style={[styles.customButton, { backgroundColor: buttonColor }]}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
            >
                <ButtonText style={[styles.buttonText, { color: textColor }]}>Skip</ButtonText>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButton: {
        borderRadius: 20,
        borderColor: 'transparent',
    },
    buttonText: {
        color: '#629560',
    },
});

export default App;
