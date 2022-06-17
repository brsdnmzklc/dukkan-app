import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../ProductsDetail/ProductsDetail.style.';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const ProductsDetail = ({route}) => {
  const {id} = route.params;
  const {loading, error, responseData} = useFetch(
    `${Config.API_PRODUCT_URL}/${id}`,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: responseData.image}} style={styles.image} />
      <Text style={styles.title}>{responseData.title}</Text>
      <Text style={styles.desc}>{responseData.description}</Text>
      <Text style={styles.price}>{responseData.price} TL</Text>
    </View>
  );
};

export default ProductsDetail;
