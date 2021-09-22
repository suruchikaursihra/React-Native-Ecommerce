import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Icon, Input, Layout } from '@ui-kitten/components';
import TopNavigation from '../Navigations/TopNavigation/index';

const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};

const index = ({ navigation }) => {

    const [value, setValue] = React.useState('');
    const smallInputState = useInputState();

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    useEffect(() => {
        console.log(value);
    }, [value])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <TopNavigation title='' alignment='center' /> */}
            {/* <Divider /> */}
            <TopNavigation />
            <Layout style={{ flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Input
                    style={styles.input}
                    size='medium'
                    accessoryLeft={<Icon name='search' />}
                    placeholder='Search by Brands, Products and more ..'
                    onChangeText={nextValue => setValue(nextValue)}
                    {...smallInputState}
                />
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        // marginVertical: 2,
        margin: 20,
        borderRadius: 10
    },
});


export default index;