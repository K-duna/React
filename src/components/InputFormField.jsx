import "../styles/InputFormField.css";
import { FormField } from "./FormField";

export function InputFormField(props) {
    function handleChange(event) {
        /*console.log(event.target.value);*/
        props.onChange(event.target.value);
    }

    return (
        <FormField>
        
        <label>{props.label}</label>
        <input type={props.type} onChange={handleChange} value={props.value}/>
        </FormField>
        );
};