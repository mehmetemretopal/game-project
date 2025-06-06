import React, { useState } from 'react';
import { Card, Text, TouchableRipple, Icon } from 'react-native-paper';
import { ImageBackground, ImageSourcePropType, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type CardProps = {
    title: String;
    imageUrl: ImageSourcePropType;
    lobistatus: any;
    onPress?:any;
}



export const renderItem = ({ title, imageUrl, lobistatus }: CardProps) => (
    <SpecificCard title={title} imageUrl={imageUrl} lobistatus={lobistatus} />
);

const SpecificCard = ({ title, imageUrl, lobistatus,onPress }: CardProps) => {
    return (
        <TouchableRipple
            onPress={onPress}

        >
            <Card style={{
                height: hp('30%'), 
                width: wp('45%'), 
                margin: wp('2.5%'), // Added margin for spacing

            }}>

                <ImageBackground source={imageUrl} resizeMode="cover" style={{
                    height: '100%',
                    width: '100%',
                    justifyContent: 'flex-end',
                }}>

                    <Card.Content>
                        <Text variant="bodyMedium" style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)', padding: 5 }}>
                            {title}
                            {lobistatus === 'şifreli' && (
                                <Icon
                                    source="camera"
                                    color='gray'
                                    size={20}
                                />
                            )}
                            {lobistatus === 'etkinlik' && (
                                <Icon
                                    source="group"
                                    color='gray'
                                    size={20}
                                />
                            )}
                        </Text>
                        
                    </Card.Content>
                </ImageBackground>
            </Card>
        </TouchableRipple>
    );
};

export default SpecificCard;