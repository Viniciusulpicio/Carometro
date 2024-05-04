import React from 'react';
import { useParams } from 'react-router-dom';
import '../DetalhesAlunos/DetalhesAlunos.css';
import Header from '../Header/Header';
import Navbar from '../NavBar/Navbar';

// Importe a imagem do aluno
import Aluno1 from "../../img/aluno 1.png";

const DetalhesAluno = () => {
  const { id } = useParams(); // Obter o parâmetro de rota para o ID do aluno

  // Variáveis fictícias para simular os detalhes do aluno
  const aluno = {
    foto: {
      large: Aluno1 // Imagem do aluno
    },
    name: {
      nome: 'Guilherme',
      sobrenome: 'Devito'
    },
    genero: 'Minha fêmea',
    idade: {
      age: 12
    },
    email: 'devito@gmail.com',
    telefone: '14 99637-9527'
  };

  const alertOcorrencia = () => {
    alert("Sua ocorrência foi enviada!");
  };

  const alertObservacao = () => {
    alert("Sua ocorrência foi enviada!");
  };

  return (
    <div className="detalhesAluno">
      <Header />
      <div className='NavbarDetalhesAlunos'>
        <Navbar/>
        <div className="navbarAlunos">
          <h2 className="tituloAlunos">Detalhes do Aluno</h2>

          {aluno ? (
            <div className="infoAluno">
              <div>
                <img src={aluno.foto.large} alt="Estudante" className="fotoAluno" />
              </div>

              <div className="infoApi">
                <label>
                  <strong>Nome:</strong>
                  <input className="inputAlunos" type="text" disabled value={`${aluno.name.nome} ${aluno.name.sobrenome}`} />
                </label>

                <label>
                  <strong className="genero">Gênero:</strong>
                  <input className="inputAlunos" type="text" disabled value={`${aluno.genero}`} />
                </label>

                <label>
                  <strong>Idade:</strong>
                  <input className="inputAlunos" type="text" disabled value={`${aluno.idade.age}`} />
                </label>

                <label>
                  <strong>Email:</strong>
                  <input className="inputAlunos" type="text" disabled value={`${aluno.email}`} />
                </label>

                <label>
                  <strong>Telefone:</strong>
                  <input className="inputAlunos" type="text" disabled value={`${aluno.telefone}`} />
                </label>
              </div>
            <div className="areaProfessor">
        <h4 className="tituloOcorrencia">Motivos de ocorrência</h4>
        <div className="inputOcorrencia">
          <div className="quebraLinha">
            <div className="linha1">
              <div className="margin">
                <input className="radio" type="radio" name="" id="" />
                <label htmlFor="indisciplina">Indisciplina</label>
              </div>

              <div className="margin">
                <input className="radio" type="radio" name="" id="" />
                <label htmlFor="educacao">Falta de Educação</label>
              </div>

              <div className="margin">
                <input className="radio" type="radio" name="" id="" />
                <label htmlFor="depredacao">Depredação do patrimônio</label>
              </div>
            </div>

            <div className="linha2">
              <div className="margin">
                <input className="radio" type="radio" name="" id="" />
                <label htmlFor="regras">Descumprir Regras</label>
              </div>

              <div className="margin">
                <input className="radio" type="radio" name="" id="" />
                <label htmlFor="brigas">Brigas</label>
              </div>
            </div>
          </div>

          <div className="linha3">
            <div className="outros">
              <label htmlFor="outros" className="radio">
                Outros:
              </label>
              <input className="inputOutros" type="text" placeholder="" />
            </div>
          </div>

          <div className="horario">
            <label htmlFor="horario">Horário: </label>
            <select id="horario" name="horario">
              <option value="ensino_medio">Ensino Médio</option>
              <option value="ensino_tecnico">Ensino Técnico</option>
            </select>
          </div>

          <div className="professor">
            <label className="radio" htmlFor="professor">
              Professor:
            </label>
            <input className="professor" type="text" placeholder="" />
          </div>

          <button className="buttonOcorrencia" onClick={alertOcorrencia}>
        Enviar
      </button>
        </div>
      </div>
          </div>
        ) : (
          <p>Carregando...</p>
        )}
        
        <div className="anotacao"> {/*Eu não sei se isso vai existir na versão final */}
          <h3>Observações sobre o Aluno:</h3>
            <input type="text" className="inputAnotacao" />
            <button className="buttonAnotacao" onClick={alertObservacao}> Enviar </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default DetalhesAluno;
