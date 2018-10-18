/* eslint-disable */

import { createStore } from 'redux'
import reducer from '@reducers'
import { init } from '@actions/app'
import { updateVisibleProducts } from '@actions/products'

describe('@reducers/filters',()=>{
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
  let store;

  beforeEach(()=>{
    store = createStore(reducer);
    window.products = products;
  })

  it('test init action check colorsList and kindsList', () => {
    store.dispatch(init());

    const colorsList = [
      'Красный',
      'Синий',
      'Фиолетовый',
      'Черный',
    ]

    const kindsList = [
      'Аликорн',
      'Единорог',
      'Земная пони',
      'Пегас',
    ]

    expect(store.getState().filters.colorsList).toEqual(colorsList)
    expect(store.getState().filters.kindsList).toEqual(kindsList)
  })


})
