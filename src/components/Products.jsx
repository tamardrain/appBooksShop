import React from 'react';

const Products = ({list}) =>{
    return(
    <div className="prodDrinks">
        {list.map(p=>
            <section className="drink">
                <p>{p.name}</p>
                <p>מחיר: {p.price}ש"ח</p>
                <p>קוד מוצר: {p.code}</p>
                </section>
        )}
    </div>
    );

};
export default Products;