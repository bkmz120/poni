/* eslint-disable */

import ProductItem from '@components/ProductItem'

describe('ProductItem',()=>{
  const product = {
    'name': 'Абдула',
    'color': 'Синий',
    'kind': 'Аликорн',
    'price': 29.99,
    'is_new': true,
  }

  it('check snapshot', () => {
    const itemWrapper = shallow(
        <ProductItem
          product={product}
        />
    );
    expect(itemWrapper).toMatchSnapshot()
  })

  it('should contain name, color, kind, price, is_new', () => {
    const itemWrapper = shallow(
        <ProductItem
          product={product}
        />
    );

    expect(itemWrapper.text().includes(product.name)).toBe(true)
    expect(itemWrapper.text().includes(product.color)).toBe(true)
    expect(itemWrapper.text().includes(product.kind)).toBe(true)
    expect(itemWrapper.text().includes(product.price)).toBe(true)
    expect(itemWrapper.text().includes('Новинка!')).toBe(true)
  })
})

