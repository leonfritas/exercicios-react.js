import React from "react";
import produtos from "../../produtos";

console.log(produtos);

export default (props) => {
  return (
    <>
      <ul>
        {produtos.map((produto, index) => {
            return(
          <li key={index}>
            {produto.nome} - R$
            {produto.valor}
            
          </li>
            )
        })}
      </ul>
    </>
  );
};
