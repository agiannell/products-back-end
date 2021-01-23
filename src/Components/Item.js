const Item = props => {
    const { item, deleteFn } = props
    return (
        <section className='products'>
            <img src={ item.image_url } alt={ item.name } />
            <p>{ item.name }</p>
            <p>{ item.descrition }</p>
            <div className='edit-buttons'>
                <button>Edit</button>
                <button onClick={() => deleteFn(item.product_id)}>Delete</button>
            </div>
        </section>
    )
}

export default Item;