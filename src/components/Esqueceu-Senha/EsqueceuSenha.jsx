import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import chaveLogo from "../../img/chave.png";
import senaiLogo from "../../img/senai.png";
import "./Esqueceu-senha.css";

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sent) {
      // Aqui você pode implementar a lógica para enviar o e-mail de recuperação de senha
      // por exemplo, enviar uma solicitação para o servidor com o e-mail inserido
      setMessage(`Um e-mail de recuperação foi enviado para ${email}, clique em recuperar senha após `);
      setEmail('');
      setSent(true);
    }
  };
  
  return (
    <div className='Esqueceu-senha'>
      <div className='inputEsqueceu-senha'>
        <div className='geralEsqueceu-senha'>
          <h2 className='titulo'>Esqueceu sua senha ?</h2>
          
          <div>
            <form onSubmit={handleSubmit}>
              <label className='label-recuperar'>
                <div className='div-recuperar'>
                  Digite seu e-mail para recuperar sua senha: 
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='input-recuperar'
                  />
                </div>
              </label>
              {!sent && <button type="submit" className='button-recuperar'>Enviar</button>}
            </form>
            <p>{message}</p>
          </div>

          {sent && (
            <Link to="/Carometro-universal/home" className='button'>Recuperar Senha</Link>
          )}
          
          <Link to="/Carometro-universal" className='voltar'>Voltar ao login</Link>
        </div>
      </div>

      <div className='cardSenai'>
        <div id='imagens'>
          <img src={senaiLogo} alt="Senai" className='senaiLogo' />
          <img src={chaveLogo} alt="Chave" className='chaveLogoEsqueceu-senha' />
        </div>
      </div>
    </div>  
  )
}

export default RecuperarSenha;
