import { useParams,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { ListaProdutos } from "./ListaProdutos";
import classes from "./Modal.module.css";

export default function ModalExcluir() {

    //Recuperando o ID com o hook useParams().
    const {id} = useParams();
    const navigate =  useNavigate();
    
    //Filtrando o produto pelo ID recuperado.
    const produtoRecuperado = ListaProdutos.filter(produto => produto.id == id);
    
    const[produto,setProduto] = useState({
        id: produtoRecuperado[0].id,
        nome: produtoRecuperado[0].nome,
        desc: produtoRecuperado[0].desc,
        preco: produtoRecuperado[0].preco
    });

    
  return (
    <div>
        <h1>PRODUTO</h1>

        <div className={classes.modalStyle} >
            <button className={classes.btnClose} onClick={()=> navigate("/produtos")}>X</button>
            <div className={classes.formModal}>
                <h2>DESEJA EXCLUIR O PRODUTO?</h2>
                <h3>NOME: {produto.nome}</h3>
                <h3>DESCRIÇÃO: {produto.desc}</h3>
                <h3>PREÇO: {produto.preco}</h3>
                <button className={classes.botaoModal} onClick={()=> navigate("/produtos")}>EXCLUIR</button><button className={classes.botaoModal} onClick={()=> navigate("/produtos")}>CANCELAR</button>
            </div>
        </div>

    </div>
  )
}