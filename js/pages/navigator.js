import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import ArticleDetail from './ArticleDetail';
import ArticlesScreen from './ArticlesScreen';
import ContactScreen from './ContactScreen';
import HomeScreen from './HomeScreen';

const ArticleNavigator = StackNavigator({
  ArticlesScreen: {
    screen: ArticlesScreen,

  },
  ArticleDetail: {
    screen: ArticleDetail
  }
});

const TabbarNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Contact: { screen: ContactScreen },
  Articles: { screen: ArticlesScreen }
}, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom'
});

const AppNavigator = StackNavigator({
  TabBar: {
    screen: TabbarNavigator,
    navigationOptions: {
      header: null
    }
  }
});
export default AppNavigator;
