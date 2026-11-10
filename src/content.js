import ItemList from "./ItemList"



const Content = ({items , handleDelete, handleCheck}) => {

  return (
    <>
      {items.length ? (
        <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />

      ) : (
        <p style = {{marginTop: '2rem'}}>YourList is empty</p>
      )}
    </>
  )
}

export default Content
