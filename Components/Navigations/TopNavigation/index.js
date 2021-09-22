import React from 'react';
import { Icon, Layout, View, MenuItem, Text, TopNavigation, TopNavigationAction, Avatar } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const EditIcon = (props) => (
    <Icon {...props} name='edit' />
);

const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical' />
);

const InfoIcon = (props) => (
    <Icon {...props} name='info' />
);

const LogoutIcon = (props) => (
    <Icon {...props} name='log-out' />
);

const drawerIcon = (props) => (
    <Icon {...props} name='menu' />
)

const notificationIcon = (props) => (
    <Icon {...props} name='bell-outline' />
)

const TopNavigationAccessoriesShowcase = (props) => {

    const renderDrawerAction = () => (
        <TopNavigationAction icon={drawerIcon} />
    );

    const renderBellAction = () => (
        <TopNavigationAction icon={notificationIcon} />
    );

    const renderTitle = () => (
        // <View style={styles.titleContainer}>
        <Avatar
            style={styles.logo}
            size='giant'
            source={require('../../../assets/logo/logo.png')}
        />
        // </View>
    );

    return (
        <Layout style={styles.container} level='1'>
            <TopNavigation
                alignment='center'
                title={renderTitle}
                // subtitle='Subtitle'
                accessoryLeft={renderDrawerAction}
                accessoryRight={renderBellAction}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 30,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 75,
        height:75,
        // marginTop: 24,
        margin: 16,
    },
});

export default TopNavigationAccessoriesShowcase;