export function OptionButton({option , handleActivity} ) {
    return <>
    
    <input type="radio" name="option" value={option} onClick={handleActivity}/> {option}
    
    </>    
}