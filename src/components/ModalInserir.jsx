import styles from "./ModalInserir.module.css";

export default function ModalInserir(props) {
  if (props.open) {
    return (
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Cadastrar Produto</legend>
                <div>
                  <label htmlFor="idProd">Nome do Produto</label>
                  <input
                    type="text"
                    name="nome"
                    id="idProd"
                    onChange={handleChange}
                    value={produto.nome}
                  />
                </div>
                <div>
                  <label htmlFor="idDesc">Descrição</label>
                  <input
                    type="text"
                    name="desc"
                    id="idDesc"
                    onChange={handleChange}
                    value={produto.desc}
                  />
                </div>
                <div>
                  <label htmlFor="idPreco">Preço</label>
                  <input
                    type="text"
                    name="preco"
                    id="idPreco"
                    onChange={handleChange}
                    value={produto.preco}
                  />
                </div>
                <div>
                  <label htmlFor="idImg">Imagem</label>
                  <input
                    type="url"
                    name="img"
                    id="idImg"
                    onChange={handleChange}
                    value={produto.img}
                  />
                </div>
                <div>
                  <button>CADASTRAR</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      );
  }
}
