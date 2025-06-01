import React, { useState } from 'react';
import { Card, Text, TouchableRipple, Icon } from 'react-native-paper';
import { ImageBackground, ImageSourcePropType, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type CardProps = {
    title: String;
    imageUrl: ImageSourcePropType;
    lobistatus: any;
}



export const renderItem = ({ title, imageUrl, lobistatus }: CardProps) => (
    <SpecificCard title={title} imageUrl={imageUrl} lobistatus={lobistatus} />
);

const SpecificCard = ({ title, imageUrl, lobistatus }: CardProps) => {
    return (
        <TouchableRipple
            onPress={() => console.log(`Pressed card: ${title}`)}

        >
            <Card style={{
                height: hp('30%'), // Increased height for better visibility
                width: wp('45%'), // Adjusted width to fit multiple cards
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