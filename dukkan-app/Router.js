import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppProvider from './src/context/AuthProvider/AuthProvider';
import Products from './src/screens/Products/Products';
import ProductsDetail from './src/screens/ProductsDetail/ProductsDetail';
import Login from './src/screens/Login/Login';
import {useDispatch, useSelector} from 'react-redux';
import Loading from './src/components/Loading/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const Router = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={'Login'}
            component={Login}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={Products}
            options={{
              title: 'Dükkan',
              headerStyle: {backgroundColor: '#90caf9'},
              headerTitleStyle: {color: 'white'},
              headerTitleAlign: 'center',
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color="white"
                  onPress={() => dispatch({type: 'REMOVE_USER'})}
                />
              ),
            }}
          />
          <Stack.Screen
            name="ProductsDetail"
            component={ProductsDetail}
            options={{
              title: 'Detay',
              headerStyle: {backgroundColor: '#90caf9'},
              headerTitleStyle: {color: 'white'},
              headerTitleAlign: 'center',
              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};
