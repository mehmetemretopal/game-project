import React from 'react';
import { Card, Text, TouchableRipple } from 'react-native-paper';
import { ImageBackground, ImageSourcePropType, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type CardProps = {
    title: String;
    imageUrl: ImageSourcePropType;
}

export const renderItem = ({ title, imageUrl }: CardProps) => (
    <SpecificCard title={title} imageUrl={imageUrl} />
);

const SpecificCard = ({ title, imageUrl }: CardProps) => {
    return (
        <TouchableRipple
            onPress={() => console.log(`Pressed card: ${title}`)}
            
        >
            <Card style={{
                height: hp('20%'), // Increased height for better visibility
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
                        </Text>
                    </Card.Content>
                </ImageBackground>
            </Card>
        </TouchableRipple>
    );
};

export default SpecificCard;