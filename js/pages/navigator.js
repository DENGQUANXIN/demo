import React from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

import ArticleDetail from './ArticleDetail';
import ArticlesScreen from './ArticlesScreen';
import ContactScreen from './ContactScreen';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabbarNavigator = TabNavigator(
  {
    Contact: {
      screen: ContactScreen,
      navigationOptions:({navigation}) => ({
        tabBarLabel:'联系人',
        headerTitle:'联系人'
      }),
    },
    Home: {
      screen: HomeScreen,
      navigationOptions:({navigation}) => ({
        tabBarLabel:'紧急呼救',
        headerTitle:'紧急呼救'
      }),
    },
    Articles: {
      screen: ArticlesScreen,
      navigationOptions:({navigation}) => ({
        tabBarLabel:'健康学堂',
        headerTitle:'健康学堂'
      }),
    },
    User: {
      screen: UserScreen,
      navigationOptions:({navigation}) => ({
        tabBarLabel:'个人信息',
        headerTitle:'个人信息'
      }),
    }
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    showLabel: false,
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const { routeName } = navigation.state;
        let iconName;
        if(routeName === 'Home') {
          iconName = 'heart';
        } else if(routeName === 'Contact') {
          iconName = 'account-multiple';
        } else if(routeName ==='Articles') {
          iconName = 'newspaper';
        } else if(routeName === 'User') {
          iconName = 'account';
        }
        return(<Icon name={iconName} size={30} color={tintColor} />);
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style:{backgroundColor:'#ffffff',height: 60},
      labelStyle: {
        fontSize: 13
      }
    }
  }
);

const AppNavigator = StackNavigator(
  {
    TabBar: {
      screen: TabbarNavigator
    },
    ArticleDetail: {
      screen: ArticleDetail
    }
  },
  {
    navigationOptions:{
      headerBackTitle:null,
      headerTintColor:'#333333',
      showIcon:true,
      swipeEnabled:false,
      animationEnabled:false,
    },
    mode: 'card'
  }
);
export default AppNavigator;
