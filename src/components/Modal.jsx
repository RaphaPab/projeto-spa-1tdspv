import { useParams,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import classes from "./Modal.module.css";

export default function Modal() {

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

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setProduto({...produto, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        ListaProdutos.splice(produto.id-1,1,produto);
        navigate("/produtos");
    };

    
  return (
    <div>
        <h1>PRODUTO</h1>

        <div className={classes.modalStyle} >
            <button className={classes.btnClose} onClick={()=> navigate("/produtos")}>X</button>
            <form onSubmit={handleSubmit} className={classes.formModal}>
                <input type="hidden" value={id}/>
                <fieldset>
                    <legend>EDITAR PRODUTO</legend>
                    <div>
                        <label htmlFor="idProd">Nome do Produto:</label>
                        <input className={classes.inputModal} type="text"  name="nome" id="idProd" defaultValue={produto.nome} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição do Produto:</label>
                        <input className={classes.inputModal} type="text"  name="desc" id="idDesc" defaultValue={produto.desc} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="idPreco">Preço do Produto:</label>
                        <input className={classes.inputModal} type="number"  name="preco" id="idPreco" defaultValue={produto.preco} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <button className={classes.botaoModal}>EDITAR</button>
                    </div>
                </fieldset>
            </form>
            
        </div>

    </div>
  )
}