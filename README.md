# Carômetro Universal

O Carômetro Universal é um sistema de gerenciamento de alunos desenvolvido com React. Este projeto consiste em uma aplicação web para controle de turmas, alunos e ocorrências.

## Instalação

Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina. Para instalar as dependências do projeto, siga estes passos:

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/Carometro-universal.git
2. Navegue até o diretório do projeto:
   ```sh
   cd Carometro-universal
3. Instale as dependências:
   ```sh
   npm install
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
5. Acesse a aplicação em seu navegador através do endereço http://localhost:3000.

## Componentes

### Turmas

O componente Turmas exibe as turmas disponíveis e suas respectivas salas. Cada sala está vinculada a uma rota que redireciona para a página de detalhes dos alunos.

### Navbar

O componente Navbar é responsável pela barra lateral de navegação, que contém botões para retornar à página inicial e para acessar a lista de turmas.

### Home

O componente Home é a página inicial da aplicação, exibindo informações sobre o sistema.

### Header

O componente Header exibe o cabeçalho com o logo do Senai e o nome da instituição.

### Login

O componente Login é responsável pelo formulário de login, permitindo que os usuários acessem o sistema.

### RecuperarSenha

O componente RecuperarSenha permite que os usuários solicitem a recuperação de senha inserindo seu e-mail.

### DetalhesAluno

O componente DetalhesAluno exibe informações detalhadas sobre um aluno específico, incluindo suas informações pessoais e a possibilidade de registrar ocorrências e observações.

### Cadastro

O componente Cadastro exibe o formulário de cadastro para novos usuários.

### Alunos

O componente Alunos exibe uma lista de alunos disponíveis, cada um vinculado à sua própria página de detalhes.

## Tecnologias Utilizadas

- React
- Axios
- React Router
- CSS

## Colaboradores

Este projeto foi desenvolvido em parceria com [Jhuan Medeiros](https://github.com/Jhuan-Medeiros/). Agradeço pelo trabalho conjunto e colaboração!
