import React from 'react'; // Importa o módulo React
import chaveLogo from "../../img/chave.png"; // Importa a imagem da chave
import senaiLogo from "../../img/senai.png"; // Importa a imagem do Senai
import "../Cadastro/Cadastro.css"; // Importa os estilos CSS específicos para o componente
import { Link } from "react-router-dom"; // Importa o componente Link do React Router

const Cadastro = () => {
  return (
    <div className='cadastro'> {/* Container principal */}

      <div className='inputCadastro'> {/* Container para os campos de entrada */}
        <div className='geralCadastro'> {/* Container geral para organização */}

          <h1 className='titulo'>CADASTRO</h1> {/* Título do formulário de cadastro */}

          {/* Campos de entrada para usuário, e-mail, senha e confirmação de senha */}

          <div className='cadastro-inputs'>

            <div className="quebrar-linha">
              <div >
              <label className='labelCadastro' htmlFor="usuario">Usuário:</label> <br />
              <input className="caixas" type="text" name="usuario" id="usuario" required /> </div>

              <div>
              <label className='labelCadastro' htmlFor="email">E-mail: </label> <br />
              <input className="caixas" type="email" name="email" id="email" required /></div>

              <div>
              <label className='labelCadastro' htmlFor="senha">Senha: </label> <br />
              <input className="caixas" type="password" name="senha" id="senha" required /></div>

              <div>
              <label className='labelCadastro' htmlFor="confirmarSenha">Confirmar senha:</label> <br />
              <input className="caixas" type="text" name="confirmaSenha" id="confirmaSenha" required /></div>
            </div>

            <div className="quebrar-linha2">
              <div>
              <label className='labelCadastro' htmlFor="usuario">Data de nascimento:</label> <br />
              <input className="caixas" type='date' name="usuario" id="usuario" required /></div>

              <div>
              <label className='labelCadastro' htmlFor="email">Turma: </label> <br />
              <input className="caixas" type="text" name="email" id="email" required /></div>

              <div>
              <label className='labelCadastro' htmlFor="turno">Turno:</label> <br />
              <select className="caixas" name="turno" id="turno">
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
              </select></div>

              <div>
              <label className='labelCadastro' htmlFor="confirmarSenha">CPF:</label> <br />
              <input className="caixas" type="number" name="confirmaSenha" id="confirmaSenha" required /></div>

            </div>

          </div>
          {/* Botão para continuar o cadastro, vinculado à rota '/Carometro-universal/ContinuarCadastro' */}
          <Link to={"/Carometro-universal/home"} className='button'>Cadastrar</Link>

          {/* Link para redirecionar para a página de login, vinculado à rota '/Carometro-universal' */}
          <Link to={"/Carometro-universal"}>Já tem uma conta?</Link>
        </div>
      </div>

      <div className='cardSenai'> {/* Container para a parte visual */}
        <div id='imagens'> {/* Container para as imagens */}
          {/* Imagem do logo do Senai */}
          <img src={senaiLogo} alt="Senai" className='senaiLogo' />
          {/* Imagem da chave */}
          <img src={chaveLogo} alt="Chave" className='chaveLogoCadastro' />
        </div>
      </div>
    </div>
  )
}

export default Cadastro; // Exporta o componente Cadastro
