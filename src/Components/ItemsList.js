import Item from './Item';

const ItemsList = props => {
    // console.log(props);
    const { products, deleteFn } = props;
    return (
        <section className='products-list'>
            { products.map((e, i) => (
                <Item 
                    key={ i } 
                    item={ e }
                    deleteFn={deleteFn} />
            )) }
        </section>
    )
}

export default ItemsList;