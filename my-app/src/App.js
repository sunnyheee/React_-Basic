function NumList(props) {
    const numbers = props.numbers
    // 振り返しのそれぞれの要素にkeyというユニークな値を付与しなければいけない
    // Reactの内部処理においてリストのそれぞれの要素が変更・追加・削除された場合何か判別することが難しい
    // なのでユニークな値を与える
    
    const listItems = numbers.map((num)=> (

        <li key={num}>{num}</li>
        ));
    console.log("listItems",listItems)

    return(
        <ul>
            {listItems}
        </ul>
    )
}

function App(){
    const numbers = [1,2,3,4,5]
    return (
        <div>
            <NumList numbers={numbers}/ >
        </div>
    )
}

export default App;