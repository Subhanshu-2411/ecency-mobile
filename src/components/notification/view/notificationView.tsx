/* eslint-disable react/jsx-wrap-multilines */
import React, { PureComponent } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl, Text, SectionList } from 'react-native';
import { injectIntl } from 'react-intl';

// Constants

// Components
import { ContainerHeader } from '../../containerHeader';
import { FilterBar } from '../../filterBar';
import { NotificationLine } from '../..';
import { ListPlaceHolder } from '../../basicUIElements';
import { ThemeContainer } from '../../../containers';

// Utils
import { isToday, isYesterday, isThisWeek, isThisMonth } from '../../../utils/time';

// Styles
import styles from './notificationStyles';
import globalStyles from '../../../globalStyles';

class NotificationView extends PureComponent {
  /* Props
   * ------------------------------------------------
   *   @prop { type }    name                - Description....
   */
  constructor(props) {
    super(props);
    this.state = {
      // TODO: Remove filters from local state.
      filters: [
        { key: 'activities', value: 'ALL' },
        { key: 'replies', value: 'REPLIES' },
        { key: 'mentions', value: 'MENTIONS' },
        //{ key: 'reblogs', value: 'REBLOGS' },
      ],
      selectedFilter: 'activities',
      selectedIndex: 0,
    };
  }

  // Component Life Cycles

  // Component Functions

  _handleOnDropdownSelect = async (index) => {
    const { getActivities, changeSelectedFilter } = this.props;
    const { filters } = this.state;

    this.setState({ selectedFilter: filters[index].key, selectedIndex: index });
    await changeSelectedFilter(filters[index].key, index);
    getActivities(filters[index].key, false);
  };

  _renderList = (data) => {
    const { navigateToNotificationRoute } = this.props;

    return (
      <FlatList
        data={data}
        initialNumToRender={data && data.length}
        maxToRenderPerBatch={data && data.length}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationLine
            notification={item}
            handleOnPressNotification={navigateToNotificationRoute}
          />
        )}
      />
    );
  };

  _renderFooterLoading = () => {
    const { loading, notifications } = this.props;
    if (loading && notifications.length > 0) {
      return (
        <View style={styles.flatlistFooter}>
          <ActivityIndicator animating size="large" />
        </View>
      );
    }
    return null;
  };

  _getNotificationsArrays = () => {
    const { notifications, intl } = this.props;

    if (!notifications && notifications.length < 1) {
      return null;
    }

    const notificationArray = [
      {
        title: intl.formatMessage({
          id: 'notification.recent',
        }),
        data: [],
      },
      {
        title: intl.formatMessage({
          id: 'notification.yesterday',
        }),
        data: [],
      },
      {
        title: intl.formatMessage({
          id: 'notification.this_week',
        }),
        data: [],
      },
      {
        title: intl.formatMessage({
          id: 'notification.this_month',
        }),
        data: [],
      },
      {
        title: intl.formatMessage({
          id: 'notification.older_then',
        }),
        data: [],
      },
    ];

    let sectionIndex = -1;
    return notifications.map((item) => {
      const timeIndex = this._getTimeListIndex(item.timestamp);
      if(timeIndex !== sectionIndex && timeIndex > sectionIndex){
        if(sectionIndex === -1){
          item.firstSection = true;
        }
        item.sectionTitle = notificationArray[timeIndex].title;
        sectionIndex = timeIndex;
      }
      return item;
    });

    // return notificationArray.filter((item) => item.data.length > 0).map((item, index)=>{item.index = index; return item});
   };

  _getTimeListIndex = (timestamp) => {
    if (isToday(timestamp)) {
      return 0;
    }

    if (isYesterday(timestamp)) {
      return 1;
    }

    if (isThisWeek(timestamp)) {
      return 2;
    }

    if (isThisMonth(timestamp)) {
      return 3;
    }

    return 4;
  };

  
  _getActivityIndicator = () => (
    <View style={styles.loading}>
      <ActivityIndicator animating size="large" />
    </View>
  );


  _renderSectionHeader = ({ section: { title, index} }) => (
    <ContainerHeader hasSeperator={index !== 0} isBoldTitle title={title} key={title} />
  )


  _renderItem = ({ item }) => (
    <>
    {item.sectionTitle && <ContainerHeader hasSeperator={!item.firstSection} isBoldTitle title={item.sectionTitle}/>}
    <NotificationLine
      notification={item}
      handleOnPressNotification={this.props.navigateToNotificationRoute}
    />
  </>
  )


  render() {
    const { readAllNotification, getActivities, isNotificationRefreshing, intl } = this.props;
    const { filters, selectedFilter, selectedIndex } = this.state;
    const _notifications = this._getNotificationsArrays();

    return (
      <View style={styles.container}>
        <FilterBar
          dropdownIconName="arrow-drop-down"
          options={filters.map((item) =>
            intl.formatMessage({ id: `notification.${item.key}` }).toUpperCase(),
          )}
          defaultText="ALL"
          onDropdownSelect={this._handleOnDropdownSelect}
          rightIconName="playlist-add-check"
          rightIconType="MaterialIcons"
          selectedOptionIndex={selectedIndex}
          onRightIconPress={readAllNotification}
        />
        <ThemeContainer>
          {({ isDarkTheme }) =>
            _notifications && _notifications.length > 0 ? (
              <FlatList
                data={_notifications}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                onEndReached={() => getActivities(selectedFilter, true)}
                ListFooterComponent={this._renderFooterLoading}
                ListEmptyComponent={<ListPlaceHolder />}
                contentContainerStyle={styles.listContentContainer}
                refreshControl={
                  <RefreshControl
                    refreshing={isNotificationRefreshing}
                    onRefresh={() => getActivities()}
                    progressBackgroundColor="#357CE6"
                    tintColor={!isDarkTheme ? '#357ce6' : '#96c0ff'}
                    titleColor="#fff"
                    colors={['#fff']}
                  />
                }
                renderItem={this._renderItem}
              />
            ) : (
              <Text style={globalStyles.hintText}>
                {intl.formatMessage({ id: 'notification.noactivity' })}
              </Text>
            )
          }
        </ThemeContainer>
      </View>
    );
  }
}

export default injectIntl(NotificationView);
/* eslint-enable */
