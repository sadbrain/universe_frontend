import './index.css';
function FormControlM({ label, name, style, ...props }) {
   return (
      <div style={{ ...style }} className="formControlM">
         <label htmlFor={name}>{label}</label>
         <input name={name} {...props} id="inputM" />
      </div>
   );
}
export default FormControlM;
