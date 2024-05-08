import React from 'react'
import chaveLogo from "../../img/chave.png";
import senaiLogo from "../../img/senai.png";
import { Link } from 'react-router-dom';

const ContinuarCadastro = () => {
  return (
<div className='cadastro'>

<div className='inputCadastro'>
  <div className='geralCadastro'>

    <h1 className='titulo'>Esqueceu sua senha ?</h1>



    <Link className='button' to={'/Carometro-universal/home'}>Cadastrar</Link>
    <Link to={"/Carometro-universal"}>Já tem uma conta?</Link>

  </div>
</div>


<div className='cardSenai'>
  <div id='imagens'>
    <img src={senaiLogo} alt="Senai" className='senaiLogo' />
    <img src={chaveLogo} alt="Chave" className='chaveLogoCadastro' />
  </div>

</div>


</div>  
  )
}

export default ContinuarCadastro
