import "./Item.css";
function item(props){
    const name=props.name;
    return(
        <div>
            <p class="a">{name}
            </p>
            {props.children}
        </div>
        
        
    )
}
export default item;