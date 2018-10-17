import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import style from './style/index.css'

export default class FiltersBar extends React.Component {
  handleChangeColor = current => {
    const {
      changeValues,
      values
    } = this.props

    let color = ''
    if (current) {
      color = current.value
    }
    changeValues({
      ...values,
      color,
    })
  }

  handleChangeKind = current => {
    const {
      changeValues,
      values
    } = this.props

    let kind = ''
    if (current) {
      kind = current.value
    }
    changeValues({
      ...values,
      kind,
    })
  }

  render () {
    const {
      colorsOptions,
      kindsOptions,
      // minAllowedPrice,
      // maxAllowedPrice,
      values,
      apply,
    } = this.props

    let color
    if (values.color !== '') {
      color = {
        label: values.color,
        value: values.color,
      }
    }

    let kind
    if (values.kind !== '') {
      kind = {
        label: values.kind,
        value: values.kind,
      }
    }

    return <div className={style.filtersBar}>
      <div className={style.filters}>
        <div className={style.filter}>
          <Select
            isClearable={true}
            onChange={this.handleChangeColor}
            options={colorsOptions}
            placeholder="Цвет"
            value={color}
          />
        </div>
        <div className={style.filter}>
          <Select
            isClearable={true}
            onChange={this.handleChangeKind}
            options={kindsOptions}
            placeholder="Вид"
            value={kind}
          />
        </div>
      </div>
      <div
        className={style.applyBtn}
        onClick={apply}
      >
        Найти
      </div>
    </div>
  }
}

FiltersBar.propTypes = {
  colorsOptions: PropTypes.array.isRequired,
  kindsOptions: PropTypes.array.isRequired,
  minAllowedPrice: PropTypes.number.isRequired,
  maxAllowedPrice: PropTypes.number.isRequired,
  values: PropTypes.shape({
    color: PropTypes.string,
    kind: PropTypes.string,
    minPrice: PropTypes.number,
    maxPrice: PropTypes.number,
    isNew: PropTypes.bool,
  }).isRequired,
  changeValues: PropTypes.func.isRequired,
  apply: PropTypes.func.isRequired,
}
