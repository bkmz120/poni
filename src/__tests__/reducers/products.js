/* eslint-disable */

import { createStore } from 'redux'
import reducer from '@reducers'
import { init } from '@actions/app'
import { updateVisibleProducts } from '@actions/products'

describe('@reducers/products',()=>{
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

  it('test init action', () => {
    store.dispatch(init());
    expect(store.getState().products.allItems).toEqual(products)
    products.forEach((product) => {
      expect(store.getState().products.visibleItems).toContainEqual(product)
    })
  })

  it('test updateVisibleProducts action empty filter', () => {
    store.dispatch(init());
    let filterColor = '';
    let filterKind = '';
    let filterMinPrice = '';
    let filterMaxPrice = '';
    let filterIsNew = false;

    store.dispatch(updateVisibleProducts(
      filterColor,
      filterKind,
      filterMinPrice,
      filterMaxPrice,
      filterIsNew
    ));

    products.forEach((product) => {
      expect(store.getState().products.visibleItems).toContainEqual(product)
    })
  })

  it('test updateVisibleProducts action color filter', () => {
    store.dispatch(init());
    let filterColor = 'Фиолетовый';
    let filterKind = '';
    let filterMinPrice = '';
    let filterMaxPrice = '';
    let filterIsNew = false;

    store.dispatch(updateVisibleProducts(
      filterColor,
      filterKind,
      filterMinPrice,
      filterMaxPrice,
      filterIsNew
    ));

    const filteredProducts = [
      {
        'name': 'Твайлайт',
        'color': 'Фиолетовый',
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
        'name': 'Тиша',
        'color': 'Фиолетовый',
        'kind': 'Пегас',
        'price': 9.99,
        'is_new': false,
      },
    ]

    expect(store.getState().products.visibleItems.length).toBe(filteredProducts.length)
    filteredProducts.forEach((product) => {
      expect(store.getState().products.visibleItems).toContainEqual(product)
    })
  })

  it('test updateVisibleProducts action kimd filter', () => {
    store.dispatch(init());
    let filterColor = '';
    let filterKind = 'Единорог';
    let filterMinPrice = '';
    let filterMaxPrice = '';
    let filterIsNew = false;

    store.dispatch(updateVisibleProducts(
      filterColor,
      filterKind,
      filterMinPrice,
      filterMaxPrice,
      filterIsNew
    ));

    const filteredProducts = [
      {
        'name': 'Твайлайт',
        'color': 'Фиолетовый',
        'kind': 'Единорог',
        'price': 19.99,
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
    ]

    expect(store.getState().products.visibleItems.length).toBe(filteredProducts.length)
    filteredProducts.forEach((product) => {
      expect(store.getState().products.visibleItems).toContainEqual(product)
    })
  })

  it('test updateVisibleProducts action minPrice maxPrice filter', () => {
    store.dispatch(init());
    let filterColor = '';
    let filterKind = '';
    let filterMinPrice = '9';
    let filterMaxPrice = '22';
    let filterIsNew = false;

    store.dispatch(updateVisibleProducts(
      filterColor,
      filterKind,
      filterMinPrice,
      filterMaxPrice,
      filterIsNew
    ));

    const filteredProducts = [
      {
        'name': 'Твайлайт',
        'color': 'Фиолетовый',
        'kind': 'Единорог',
        'price': 19.99,
        'is_new': false,
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

    expect(store.getState().products.visibleItems.length).toBe(filteredProducts.length)
    filteredProducts.forEach((product) => {
      expect(store.getState().products.visibleItems).toContainEqual(product)
    })
  })

  it('test updateVisibleProducts action isNew filter', () => {
    store.dispatch(init());
    let filterColor = '';
    let filterKind = '';
    let filterMinPrice = '';
    let filterMaxPrice = '';
    let filterIsNew = true;

    store.dispatch(updateVisibleProducts(
      filterColor,
      filterKind,
      filterMinPrice,
      filterMaxPrice,
      filterIsNew
    ));

    const filteredProducts = [
      {
        'name': 'Абдула',
        'color': 'Синий',
        'kind': 'Аликорн',
        'price': 29.99,
        'is_new': true,
      },
      {
        'name': 'Ли Кук',
        'color': 'Фиолетовый',
        'kind': 'Единорог',
        'price': 29.99,
        'is_new': true,
      },
    ]

    expect(store.getState().products.visibleItems.length).toBe(filteredProducts.length)
    filteredProducts.forEach((product) => {
      expect(store.getState().products.visibleItems).toContainEqual(product)
    })
  })

  it('test updateVisibleProducts action complex filter', () => {
    store.dispatch(init());
    let filterColor = 'Фиолетовый';
    let filterKind = 'Единорог';
    let filterMinPrice = '17';
    let filterMaxPrice = '30';
    let filterIsNew = true;

    store.dispatch(updateVisibleProducts(
      filterColor,
      filterKind,
      filterMinPrice,
      filterMaxPrice,
      filterIsNew
    ));

    const filteredProducts = [
      {
        'name': 'Ли Кук',
        'color': 'Фиолетовый',
        'kind': 'Единорог',
        'price': 29.99,
        'is_new': true,
      },
    ]

    expect(store.getState().products.visibleItems.length).toBe(filteredProducts.length)
    filteredProducts.forEach((product) => {
      expect(store.getState().products.visibleItems).toContainEqual(product)
    })
  })
})
