



const List=()=>{
    return (
      <ul>
        <li>APPLE</li>
        <li>MANGO</li>
        <li>GUAVA</li>
      </ul>
    );
}

export default List


export const List1=()=>{
    return (
      <ol>
        <li>RESHMA</li>
        <li>RESHMA</li>
        <li>RESHMA</li>
        <li>RESHMA</li>
        <li>RESHMA</li>
      </ol>
    );
}


export const List2=()=>{
    const names=["pushpa","reshma","nikhi"];
    return (
      <ul>
        {names.map((each) => {
          return <li>{each}</li>
        })}
      </ul>
    );
}

