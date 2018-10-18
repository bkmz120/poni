/* eslint-disable */

import ProductsList from '@components/ProductsList'

describe('ProductsList',()=>{
  const products = [
    {
      'name': 'Твайлайт',
      'color': 'Фиолетовый',
      'kind': 'Единорог',
      'price': 19.99,
      'is_new': false,
    },
    {
      'name': 'Абдула',
      'color': 'Синий',
      'kind': 'Аликорн',
      'price': 29.99,
      'is_new': true,
    },
    {
      'name': 'Иосиф',
      'color': 'Красный',
      'kind': 'Пегас',
      'price': 9.99,
      'is_new': false,
    },
    {
      'name': 'Саня',
      'color': 'Черный',
      'kind': 'Единорог',
      'price': 19.99,
      'is_new': false,
    },
    {
      'name': 'Ли Кук',
      'color': 'Фиолетовый',
      'kind': 'Единорог',
      'price': 29.99,
      'is_new': true,
    },
    {
      'name': 'Портман',
      'color': 'Синий',
      'kind': 'Земная пони',
      'price': 19.99,
      'is_new': false,
    },
    {
      'name': 'Тиша',
      'color': 'Фиолетовый',
      'kind': 'Пегас',
      'price': 9.99,
      'is_new': false,
    },
    {
      'name': 'Черный лукич',
      'color': 'Черный',
      'kind': 'Земная пони',
      'price': 9.99,
      'is_new': false,
    },
  ]

  it('check snapshot', () => {
    const productsListWrapper = shallow(
        <ProductsList
          items={products}
        />
    );
    expect(productsListWrapper).toMatchSnapshot()
  })
})

