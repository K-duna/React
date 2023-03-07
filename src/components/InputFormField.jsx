export function InputFormField(props) {
    function handleChange(event) {
        /*console.log(event.target.value);*/
        props.onChange(event.target.value);
    }

    return (

    <div className="input-form-field"> 
        <label>{props.label}</label>
        <input type={props.type} onChange={handleChange} value={props.value}/>
    </div>
            );
};