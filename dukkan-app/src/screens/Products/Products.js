import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/Cards/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Products = ({navigation, route}) => {
  const {loading, error, responseData} = useFetch(Config.API_PRODUCT_URL);
  const handleProductSelect = id => navigation.navigate('ProductsDetail', {id});

  const renderProduct = ({item}) => (
    <ProductCard item={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={responseData} renderItem={renderProduct} />;
};

export default Products;
