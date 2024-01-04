
function Button( {disabled, onClick,type, buttonText } ) {

  return (
    <button disabled={disabled} onClick={onClick} type={type}>{buttonText}</button>
  );


}
 export default Button;