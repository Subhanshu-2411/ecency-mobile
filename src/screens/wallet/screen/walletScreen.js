import React, { Fragment, useState } from 'react';
import Swiper from 'react-native-swiper';
import { SafeAreaView, View } from 'react-native';

// Containers
import { LoggedInContainer } from '../../../containers';

// Components
import { Header, Transaction } from '../../../components';
import EstmView from './estmView';
import SteemView from './steemView';
import SpView from './spView';

// Styles
import globalStyles from '../../../globalStyles';

const WalletScreen = () => {
  const [selectedUserActivities, setSelectedUserActivities] = useState(null);
  const [isLoading, setIsLoading] = useState('points');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const _handleSwipeItemChange = (userActivities, _isLoading) => {
    setSelectedUserActivities(userActivities);
    setIsLoading(_isLoading);
  };

  return (
    <Fragment>
      <Header />
      <SafeAreaView style={globalStyles.defaultContainer}>
        <LoggedInContainer>
          {() => (
            <>
              <Swiper
                loop={false}
                showsPagination={true}
                index={0}
                onIndexChanged={index => setCurrentIndex(index)}
              >
                <EstmView
                  index={0}
                  handleOnSelected={_handleSwipeItemChange}
                  refreshing={refreshing}
                  currentIndex={currentIndex}
                />
                <SteemView
                  index={1}
                  handleOnSelected={_handleSwipeItemChange}
                  refreshing={refreshing}
                  currentIndex={currentIndex}
                />
                <SpView
                  index={2}
                  refreshing={refreshing}
                  handleOnSelected={_handleSwipeItemChange}
                  currentIndex={currentIndex}
                />
              </Swiper>
              <Transaction
                type="wallet"
                transactions={selectedUserActivities}
                refreshing={refreshing}
                setRefreshing={setRefreshing}
                isLoading={isLoading}
              />
            </>
          )}
        </LoggedInContainer>
      </SafeAreaView>
    </Fragment>
  );
};

export default WalletScreen;