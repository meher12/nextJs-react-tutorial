type ListPArams = {
    description: string;
  }
  function List(props: ListPArams){
    return <p>{props.description}</p>
  }
  export default List;