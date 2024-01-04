
function Button( props ) {

  return (
    <button disabled={props.disabled} onClick={props.onClick} type={props.type}>{props.buttonText}</button>
  );


}
 export default Button;