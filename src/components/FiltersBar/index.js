import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

import style from './style/index.css'

export default class FiltersBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      minMaxError: false,
    }
  }

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

  handleChangeMinPrice = e => {
    const value = e.target.value
    const {
      changeValues,
      values,
    } = this.props
    this.setState({
      minMaxError: false,
    })
    if (/^\d*\.*\d*$/.test(value)) {
      changeValues({
        ...values,
        minPrice: value,
      })
    }
  }

  handleChangeMaxPrice = e => {
    const value = e.target.value
    const {
      changeValues,
      values,
    } = this.props
    this.setState({
      minMaxError: false,
    })
    if (/^\d*\.*\d*$/.test(value)) {
      changeValues({
        ...values,
        maxPrice: value,
      })
    }
  }

  handleChangeIsNew = (e) => {
    const value = e.target.checked
    const {
      changeValues,
      values,
    } = this.props
    changeValues({
      ...values,
      isNew: value,
    })
  }

  handleClickApply = () => {
    const {
      values,
      apply
    } = this.props
    if (values.minPrice !== '' &&
        values.maxPrice !== '' &&
        parseFloat(values.minPrice) >= parseFloat(values.maxPrice)
    ) {
      this.setState({
        minMaxError: true,
      })
    } else {
      apply()
    }
  }

  render () {
    const {
      colorsOptions,
      kindsOptions,
      values
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

    const {
      minPrice,
      maxPrice,
      isNew,
    } = values

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
        <div className={style.filter}>
          <span className={style.priceLabel}>Цена от</span>
          <Tooltip
            title="Минимальное значение должно быть меньше максимального"
            position="bottom"
            open={this.state.minMaxError}
            arrow={true}
            trigger="manual"
          >
            <input
              className={style.priceValue}
              type='text'
              value={minPrice}
              onChange={this.handleChangeMinPrice}
            />
          </Tooltip>
          <span className={style.priceLabel}>до</span>
          <input
            className={style.priceValue}
            type='text'
            value={maxPrice}
            onChange={this.handleChangeMaxPrice}
          />
        </div>
      </div>
      <div className={style.filter}>
        <label className={style.checkbox}>
          <input
            className={style.checkboxValue}
            type="checkbox"
            checked={isNew}
            onChange={this.handleChangeIsNew}
          />
          только новинки
        </label>
      </div>
      <div
        className={style.applyBtn}
        onClick={this.handleClickApply}
      >
        Найти
      </div>
    </div>
  }
}

FiltersBar.propTypes = {
  colorsOptions: PropTypes.array.isRequired,
  kindsOptions: PropTypes.array.isRequired,
  values: PropTypes.shape({
    color: PropTypes.string,
    kind: PropTypes.string,
    minPrice: PropTypes.string,
    maxPrice: PropTypes.string,
    isNew: PropTypes.bool,
  }).isRequired,
  changeValues: PropTypes.func.isRequired,
  apply: PropTypes.func.isRequired,
}
