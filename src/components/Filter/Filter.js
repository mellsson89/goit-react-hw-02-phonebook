import React from "react";
import style from './styles/filter.module.scss';
import PropTypes from 'prop-types';

const Filter =({value,onChange}) => (

    <label className={style.filterLabel}>
        Find contacts by name
        <input type='text' name='filter' value={value} onChange={onChange} className={style.filterInput}/>
    </label>
)

Filter.propTypes={
    value:PropTypes.string
}

export default Filter;