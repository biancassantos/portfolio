function ItemsList({ list }) {
  return (
    <ul className="items-list">
      {list.map((item, index) => {
        return (
        <li key={index}>
          {item}
        </li>)
      })}
    </ul>
  )
}

export default ItemsList;