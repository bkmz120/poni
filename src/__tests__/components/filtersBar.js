/* eslint-disable */

import FiltersBar from '@components/FiltersBar'

jest.mock('react-tippy/dist/tippy.css', () => (''))

describe('FiltersBar',()=>{
  const colorsOptions = [
    {
      label:'Красный',
      value:'Красный',
    },
    {
      label:'Синий',
      value:'Синий',
    },
    {
      label:'Фиолетовый',
      value:'Фиолетовый',
    },
    {
      label:'Черный',
      value:'Черный',
    },
  ]

  const kindsOptions = [
    {
      label:'Аликорн',
      value:'Аликорн',
    },
    {
      label:'Единорог',
      value:'Единорог',
    },
    {
      label:'Земная пони',
      value:'Земная пони',
    },
    {
      label:'Пегас',
      value:'Пегас',
    },
  ]

  it('check init snapshot', () => {
    const values = {
      color: '',
      kind: '',
      minPrice: '',
      maxPrice: '',
      isNew: false,
    }

    const changeValues = () => {}
    const apply = () => {}

    const FiltersBarWrapper = shallow(
        <FiltersBar
          colorsOptions={colorsOptions}
          kindsOptions={kindsOptions}
          values={values}
          changeValues={changeValues}
          apply={apply}
        />
    );
    expect(FiltersBarWrapper).toMatchSnapshot()
  })

  it('should fire apply on apply btn click', () => {
    const values = {
      color: '',
      kind: '',
      minPrice: '',
      maxPrice: '',
      isNew: false,
    }

    const changeValues = () => {}
    const apply = jest.fn()

    const FiltersBarWrapper = shallow(
        <FiltersBar
          colorsOptions={colorsOptions}
          kindsOptions={kindsOptions}
          values={values}
          changeValues={changeValues}
          apply={apply}
        />
    );
    FiltersBarWrapper.find('.applyBtn').simulate('click')
    expect(apply).toHaveBeenCalled()
  })
})

