import Spinner from 'react-native-loading-spinner-overlay';
import React, { Component } from 'react';
import { ActivityIndicator, Image } from 'react-native';


const OverLayLoader = (props) => {

    return (
        <Spinner
            visible={props.isloading}
            color={'black'}
            size="normal"
            customIndicator={
                <ActivityIndicator size="large" color="#50CEFF" />
            }
        />
    );
}

export default OverLayLoader

