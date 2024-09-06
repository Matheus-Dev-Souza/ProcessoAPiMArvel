Aqui está uma versão do README ajustada para o seu projeto usando FastAPI:

---

[Python]: https://img.shields.io/badge/python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white
[FastAPI]: https://img.shields.io/badge/fastapi-%2300C7B7.svg?style=for-the-badge&logo=fastapi&logoColor=white
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[AWS]: https://img.shields.io/badge/aws-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white
[PostgreSQL]: https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white

<h1 align="center">Hotel Reservation Price Classification API</h1>

<p align="center">Este projeto faz parte das sprints 4 e 5 do Programa de Bolsas Compass UOL, onde desenvolvemos um modelo de machine learning para classificar faixas de preços de reservas de hotel e implementamos uma API para realizar inferências utilizando o modelo treinado.</p>

<p> 🌐 Link AWS: http://54.89.228.64/ </p>

<hr>

![Python]
![FastAPI]
![Docker]
![AWS]
![PostgreSQL]

<p align="center">
  <a href="#about">Sobre</a> • • 
  <a href="#functionalities">Funcionalidades</a> • • 
  <a href="#start">Começando</a> • • 
  <a href="#usage">Como Usar</a> • • 
  <a href="#difficulties">Dificuldades Conhecidas</a> • • 
  <a href="#contributors">Colaboradores</a>
</p>

<h2 id="about">📝Sobre</h2>
Este projeto tem como objetivo treinar um modelo de machine learning para classificar reservas de hotel em três faixas de preços, utilizando o dataset "Hotel Reservations". O modelo foi treinado com o AWS SageMaker e a API desenvolvida com FastAPI permite que os usuários enviem dados de reservas e recebam a faixa de preço correspondente.

A API expõe um endpoint `/api/v1/inference` para realizar inferências com o modelo salvo no S3.

<h2 id="functionalities">📌 Funcionalidades</h2>
<ul>
  <li>Treinamento do modelo de machine learning no AWS SageMaker com dados armazenados no AWS RDS.</li>
  <li>Armazenamento do modelo treinado no S3.</li>
  <li>API FastAPI para realizar inferências com o modelo.</li>
  <li>Deploy completo na AWS utilizando Docker.</li>
</ul>

<h2 id="technologies">⚙️Tecnologias Utilizadas</h2>
<h3>Back-end</h3>
<ul>
  <li>Python</li>
  <li>FastAPI</li>
  <li>Docker</li>
  <li>AWS (SageMaker, S3, RDS)</li>
  <li>PostgreSQL para armazenamento do dataset</li>
</ul>

<h2 id="start">🚀 Começando</h2>

<h3>Pré-requisitos</h3>
<p>Certifique-se de ter Docker e Git instalados localmente.</p>

<h3>:computer: Clonagem</h3>
<p>Como clonar o projeto:</p>

```bash
git clone --branch grupo-6 --single-branch https://github.com/Compass-pb-aws-2024-JULHO-A/sprints-4-5-pb-aws-julho-a.git
cd nome-do-projeto
```

<h3>Rodar o Docker</h3>
```bash
docker compose up
```

<p>Agora sua API estará rodando localmente em http://localhost:8000</p>

<h2 id="usage">💻 Como Usar</h2>

<p>Para realizar uma inferência, envie uma requisição POST para <code>/api/v1/inference</code> com um JSON contendo os dados de entrada:</p>

```json
{
    "no_of_adults": 2,
    "no_of_children": 1,
    "type_of_meal_plan": "Meal Plan 1",
    "required_car_parking_space": 0,
    "room_type_reserved": "Room_Type 1",
    "lead_time": 50
}
```

<h2 id="difficulties">❗ Dificuldades Conhecidas</h2>
<ul>
  <li>Configuração inicial do ambiente AWS para integrar todos os serviços.</li>
  <li>Garantir a escalabilidade do serviço para um volume maior de inferências.</li>
</ul>

<h2 id="contributors">🤝 Colaboradores</h2>

<table >
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
  </tr>
</table>

---

Este README cobre todos os aspectos do projeto, incluindo tecnologia, funcionalidades e colaboradores.
