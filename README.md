## Começo
instale yarn

vai aparecer o node_modules

depois yarn start
Aqui está o modelo ajustado do seu README.md para o projeto das Sprints 4 e 5, com base nas tecnologias e funcionalidades descritas no seu projeto de machine learning e API na AWS:

---

[Python]: https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white
[Flask]: https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[AWS]: https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white
[SageMaker]: https://img.shields.io/badge/SageMaker-%231527B6.svg?style=for-the-badge&logo=amazonaws&logoColor=white
[API]: https://img.shields.io/badge/API-v1-blue.svg?style=for-the-badge&logo=API

<h1 align="center">Sprint 4 e 5 - Machine Learning e API</h1>

<p align="center">Este projeto desenvolve um modelo de machine learning para classificação de reservas de hotel com base em faixas de preço, utilizando o AWS SageMaker, AWS RDS, e AWS S3. Além disso, implementa uma API que carrega o modelo treinado para realizar inferências através de um endpoint REST.</p>

<p>📌 Link da API: http://<seu-ip-publico-ou-api-gateway-url>/api/v1/inference</p>

<hr>

![Python]
![Flask]
![Docker]
![AWS]
![SageMaker]
![API]

<p align="center">
 <a href="#about">Sobre</a> • 
 <a href="#fucionalidade">Funcionalidade</a> • 
 <a href="#inicio">Começando</a> • 
 <a href="#usar">Como Usar</a> • 
 <a href="#dificudade"> Dificuldades Conhecidas </a> • 
 <a href="#colabor"> Colaboradores </a>
</p>

<h2 id="about">📝Sobre</h2>
Este projeto foi desenvolvido como parte das Sprints 4 e 5 do Programa de Bolsas Compass UOL/AWS para criar um sistema completo de machine learning na AWS. O objetivo é treinar um modelo de classificação que analise reservas de hotel e as categoriza em três faixas de preço, usando um dataset disponível no Kaggle.

O projeto inclui:
<ul>
<li>Treinamento do modelo no SageMaker com dados armazenados no RDS.</li>
<li>Armazenamento do modelo treinado no S3.</li>
<li>Criação de uma API REST com Flask para servir o modelo e realizar inferências.</li>
<li>Deploy da API em um ambiente Docker na AWS.</li>
</ul>

<h2 id="fucionalidade">📌 Funcionalidades</h2>

<ul>
  <li>Treinamento de um modelo de machine learning com o AWS SageMaker.</li>
  <li>API para realizar inferências baseadas no modelo treinado.</li>
  <li>Integração com o AWS RDS para armazenamento de dados e S3 para salvar o modelo.</li>
  <li>Ambiente Docker para rodar a API localmente ou na AWS.</li>
</ul>

<h2>⚙️Tecnologias Utilizadas</h2>

<h3>Machine Learning</h3>
<ul>
  <li>Python: Para o desenvolvimento do código do modelo.</li>
  <li>AWS SageMaker: Para treinar o modelo de machine learning.</li>
  <li>AWS RDS: Para armazenar o dataset e os dados tratados.</li>
  <li>AWS S3: Para salvar e carregar o modelo treinado.</li>
</ul>

<h3>API</h3>
<ul>
  <li>Flask: Framework para criação de API RESTful.</li>
  <li>Docker: Para containerizar e orquestrar a aplicação.</li>
  <li>Postman: Para testar a API localmente.</li>
</ul>

<hr>

<h2 id="inicio">🚀 Começando</h2>

<h3>Pré-requisitos</h3>
- Conta na AWS com permissões para usar SageMaker, RDS, e S3.
- Docker instalado no seu ambiente local.

<h3>:computer: Clonagem</h3>
<p>Como clonar o projeto:</p>

<ol type="1">
  <li>Abra o terminal.</li>
  <li>Digite o seguinte comando:</li>
</ol>

```bash
git clone --branch grupo-número --single-branch https://github.com/Compass-pb-aws-2024-JULHO-A/sprints-4-5-pb-aws-julho-a.git
```

<ol start="3" type="1">
  <li>Acesse o diretório do projeto:</li>
</ol>

```bash
cd projeto-sprint4-5
```

<ol start="4" type="1">
  <li>Use o Docker para rodar o ambiente:</li>
</ol>

```bash
docker compose up
```

<h2 id="usar">:computer: Como Usar</h2>

<p>Para usar a aplicação, siga os seguintes passos:</p>
<ol type="1">
  <li>Abra seu navegador e acesse a API em: `http://localhost:5000/api/v1/inference`.</li>
  <li>Envie uma requisição POST com o seguinte JSON no corpo:</li>
</ol>

```json
{
  "no_of_adults": 2,
  "no_of_children": 1,
  "type_of_meal_plan": "example"
}
```

<hr>

<h2 id="dificudade">:heavy_exclamation_mark: Dificuldades Conhecidas</h2>
<ul>
  <li>Desafios no armazenamento e recuperação do modelo treinado no S3.</li>
  <li>Otimizando a comunicação entre a API e o serviço de inferência na AWS.</li>
</ul>

<hr>

<h2 id="colabor">🤝Colaboradores:</h2>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/cicero-lucas">
        <img src="https://github.com/user-attachments/assets/8c85133f-67de-48ef-b450-6f8564503e99" width="120" alt="Cicero Lucas" style="border-radius: 50%;">
      </a>
      <p><strong>Cicero Lucas</strong></p>
      <a href="https://github.com/cicero-lucas">Perfil no GitHub</a>
    </td>
    <td align="center">
      <a href="https://github.com/Matheus-Dev-Souza">
        <img src="https://avatars.githubusercontent.com/u/96189442?v=4" width="120" alt="Matheus Souza" style="border-radius: 50%;">
      </a>
      <p><strong>Matheus Souza</strong></p>
      <a href="https://github.com/Matheus-Dev-Souza">Perfil no GitHub</a>
    </td>
    <td align="center">
      <a href="https://github.com/Gustavo-Figueiredo">
        <img src="https://avatars.githubusercontent.com/u/103941673?v=4" width="120" alt="Gustavo Figueiredo" style="border-radius: 50%;">
      </a>
      <p><strong>Gustavo Figueiredo</strong></p>
      <a href="https://github.com/Gustavo-Figueiredo">Perfil no GitHub</a>
    </td>
    <td align="center">
      <a href="https://github.com/KalylSemi">
        <img src="https://avatars.githubusercontent.com/u/157990287?v=4" width="120" alt="KalylSemi" style="border-radius: 50%;">
      </a>
      <p><strong>KalylSemi</strong></p>
      <a href="https://github.com/KalylSemi">Perfil no GitHub</a>
    </td>
  </tr>
</table>

---

Essa versão está adaptada para o projeto de machine learning e inferência usando AWS e Flask.
