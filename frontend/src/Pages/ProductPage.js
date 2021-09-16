import React from 'react'
import Rating from '../components/Rating';
import data from '../data'
import {Link} from 'react-router-dom';

export default function ProductPage(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if(!product){
        return <div> Produto não encontrado </div>
    }
    return (
        <>
        <Link to="/">Voltar para a home</Link>
        <div className="row top">
             <div className="col-2">
                <img  className="large" src={product.image} alt={product.name} ></img>
           </div>
            <div className="col-1">
                <ul>
                <li>
                    <h1>{product.name}</h1>
                </li>
                <li>
                
                <Rating rating={product.rating}
                    numReviews={product.numReviews}>
                   
                </Rating>
                
                </li>
              
                <li>
                    Price :R${product.price}
                </li>
                <li>
                    Description: 
                    <p>{product.description}</p>
                </li>


                </ul>
            </div>
           <div className="col-1">

                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Preço</div>
                                <div className="price">R$:{product.price}</div>
                            </div>
                        </li>

                        <li>
                            <div className="row">
                                <div>Estoque:  </div>
                                <div >
                                {product.countInStock>0? (
                                <span className="success">Em estoque</span>
                                ):(
                                <span className="danger">Produto Indisponivel</span>
                                )}
                                </div>
                            </div>
                        </li>

                        <li>
                            <button className="primary block">Adicionar ao Carrinho</button>
                        </li>

                    </ul>


                </div>

           </div>

        </div>
        </>
    )
}
