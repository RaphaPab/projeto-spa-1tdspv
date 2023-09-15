import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {AiFillEdit as EditObj} from "react-icons/ai";
import {RiDeleteBin2Fill as DelObj} from "react-icons/ri";
import styles from '../css/estilo.module.css'


export default function Produtos() {

  const estiloTabela = {
    borderCollapse: "collapse",
    border: "2px solid #ccc",
    width: "100%",
    margin: "auto",
    
  }

  const estiloCelula = {
    border: "1px solid #ccc",
    textAlign: "left",
    padding: "8px"
  }

    
  return (
      <section className={styles.inicioProduto}>
          <h1>Produtos Informáticos - FIAPO</h1>

          <table style={estiloTabela}>
              <thead>
                <tr>
                  <th style={estiloCelula}>ID</th>
                  <th style={estiloCelula}>NOME</th>
                  <th style={estiloCelula}>DESCRIÇÃO</th>
                  <th style={estiloCelula}>PREÇO</th>
                  <th style={estiloCelula}>Editar/Excluir</th>
                </tr>
              </thead>

              <tbody>
                {ListaProdutos.map((produto,indice)=>(
                    <tr key={indice}>
                      <td style={estiloCelula}>{produto.id}</td>
                      <td style={estiloCelula}>{produto.nome}</td>
                      <td style={estiloCelula}>{produto.desc}</td>
                      <td style={estiloCelula}>{produto.preco}</td>
                      <td style={{textAlign:"center",border:"1px solid #ccc"}}><Link to={`/editar/produtos/${produto.id}`}><EditObj/></Link> | <Link to={`/excluir/produtos/${produto.id}`}><DelObj/></Link></td>
                    </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan={5} style={{textAlign:"center"}}>PRODUTOS</td>
                </tr>
              </tfoot>
          </table>

      </section>
    )
  }
  