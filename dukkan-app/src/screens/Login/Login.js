import React, {useEffect} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';
import styles from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import usePost from '../../hooks/usePost/usePost';

const Login = ({navigation}) => {
  const {data, loading, error, post, setData, setError} = usePost();
  const dispatch = useDispatch();

  const handleLogin = values => {
    if (values.password === '' || values.username === '') {
      return Alert.alert('Dükkan', 'Email veya Şifre Boş Bırakılamaz');
    }
    post(Config.API_AUTH_URL, values);
  };

  if (error) {
    Alert.alert('Dükkan', 'Kullanıcı Bulunamadı');
    setError(null);
  }
  if (data) {
    dispatch({type: 'SET_USER', payload: {user}});
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <Text>Dükkan</Text>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı Adını Giriniz..."
              value={values.username}
              onChangeText={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Şifre Giriniz..."
              value={values.password}
              onChangeText={handleChange('password')}
              iconName="key-variant"
              isSecure={true}
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};
export default Login;

const user = {
  address: {
    geolocation: {lat: '-37.3159', long: '81.1496'},
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {firstname: 'john', lastname: 'doe'},
  phone: '1-570-236-7033',
  __v: 0,
};
