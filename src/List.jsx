function List(props) {

    const category = props.category;
    const itemList = props.items;

    /*fruits.sort((a,b) => a.name.localeCompare(b.name));
    fruits.sort((a,b) => b.name.localeCompare(a.name));
    fruits.sort((a,b) => a.cal - b.cal);

    const lowCalfruits = fruits.filter(fruit => fruit.cal < 100);
    const highCalfruits = fruits.filter(fruit => fruit.cal >= 100);
    */


    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.cal}</b>
                                            </li>);

    return( <>
                <h3>{category}</h3>
                <ol>{listItems}</ol>
            </>);
}

export default List