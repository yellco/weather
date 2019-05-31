import React from "react";

const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" placeholder="Введите город" name="city"/>
        <button>Отправить</button>
    </form>
)

export default Form;