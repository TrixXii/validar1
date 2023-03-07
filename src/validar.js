import React, { useState, useEffect } from 'react';

export function Validar() {

    // NOMBRE

    const [nombre, setNombre] = useState("");
    const [nombreIcono, setNombreIcono] = useState("");

    useEffect(() => {
        function valideNom() {
            if (nombre.length < 3 || nombre.length > 5) {
                setNombreIcono("❌");

            } else {
                setNombreIcono("✔");
            }
        }

        valideNom();
    }, [nombre]);

    function valideForm(event) {
        const form = event.target;
        const checkedCheckboxes = checkboxes.filter(
            (checkbox) => checkbox.value === true
        );
        if (selectedOptions.length !== 2) {
            event.preventDefault();
            alert('Selecciona 2 opciones');
        } else if (checkedCheckboxes.length !== 2) {
            event.preventDefault();
            alert("Debe seleccionar 2 checkboxs");
        } else if (form.checkValidity()) {
            alert('Formulario enviado');
        } else {
            event.preventDefault();
            form.reportValidity();
        }

    }

    // EMAIL

    const [email, setEmail] = useState("");
    const [emailValido, setEmailValido] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
        setEmailValido(event.target.checkValidity());
    }

    // SELECT

    const [selectedOptions, setSelectedOptions] = useState([]);

    function handleSelectChange(event) {
        const selected = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedOptions(selected);
    }

    // CHECKBOX

    const [checkboxes, setCheckboxes] = useState([
        { name: "check1", value: false },
        { name: "check2", value: false },
        { name: "check3", value: false },
    ]);

    const [totalSelect, settotalSelect] = useState(0);

    function handleCheckboxChange(e) {
        const { name, checked } = e.target;
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.name === name ? {...checkbox, value: checked } : checkbox
        );
        if (checked) {
            let c = totalSelect + 1;
            settotalSelect(c)
            console.log("++" + totalSelect + '-' + c);
        } else {

            settotalSelect(totalSelect - 1)
            console.log("--" + totalSelect);
        }
        console.log(totalSelect);
        setCheckboxes(updatedCheckboxes);
    }

    return ( <
        form onSubmit = { valideForm }
        action = "pp.html" >
        <
        div class = "input-group mb-3" >
        <
        span class = "input-group-text"
        id = "basic-addon1" > Entre 3 y 5 lletras < /span>  <
        input class = "form-control"
        type = "text"
        name = "nombre"
        placeholder = "Escribe aqui"
        minLength = { 3 }
        maxLength = { 5 }
        required value = { nombre }
        onChange = {
            (event) => setNombre(event.target.value)
        }
        />  <span > { nombreIcono } </span >
        <
        /div > <
        div class = "input-group mb-3" >
        <
        span class = "input-group-text"
        id = "basic-addon1" > Email < /span>  <
        input class = "form-control"
        type = "email"
        name = "email"
        id = "email"
        placeholder = "tuemail@gmail.com"
        value = { email }
        onChange = { handleChange }
        required / >
        <
        span > { emailValido ? "✔" : "❌" } < /span>  < /
        div >
        <
        div class = "input-group mb-3" >
        <
        span class = "input-group-text"
        id = "basic-addon1" > Select < /span> <
        select class = "form-select"
        name = "select"
        id = "opciones"
        multiple value = { selectedOptions }
        onChange = { handleSelectChange } >
        <
        option value = "op1" > Option 1 < /option> <
        option value = "op2" > Option 2 < /option> <
        option value = "op3" > Option 3 < /option> <
        option value = "op4" > Option 4 < /option> < /
        select > < /div > <
        span > { selectedOptions.length === 2 ? '✔' : '❌ selecciona 2' } < /span>  <
        br / >
        <
        div class = "input-group mb-3" >
        <
        span class = "input-group-text"
        id = "basic-addon1" > Checkbox < /span> <
        span class = "px-2" >
        check1:
        <
        input class = "form-check-input"
        type = "checkbox"
        name = "check1"
        checked = { checkboxes[0].value }
        onClick = { handleCheckboxChange }
        /> < /
        span > <
        span class = "px-2" >
        check2:
        <
        input class = "form-check-input"
        type = "checkbox"
        name = "check2"
        checked = { checkboxes[1].value }
        onChange = { handleCheckboxChange }
        /> < /
        span > <
        span class = "px-2" >
        check3:
        <
        input class = "form-check-input"
        type = "checkbox"
        name = "check3"
        checked = { checkboxes[2].value }
        onChange = { handleCheckboxChange }
        /> { totalSelect === 2 ? '✔' : '❌ selecciona 2' } < /
        span >
        <
        /div > <
        input type = "submit" / >
        <
        /form>


    );
}