import React from 'react'


const CharacterItem = ({item,}) => {

    const favorite = (item)=>{
      // obtendo o elemento anterior e adicionando o novo item favorito
      var previousData = JSON.parse(localStorage.getItem('favorites'))
      previousData.push(item)
      localStorage.setItem('favorites',JSON.stringify(previousData))
    }

    return (
        <div className='content'>
      <div className='content-inner'>
        <div className='content-front'>
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
        </div>
        <div className='content-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Nome:</strong> {item.name}
            </li>
            <li>
              <strong>Descrição:</strong> {item.description}
            </li>
            <li>
            <button  type="button" onClick={()=>favorite(item)}>Favorito</button>
            </li>
            <li>
            <button  type="button" ><a href='https://www.google.com.br/maps/preview'>Endereço</a></button>
            </li>
            <li>
            <button  type="button" ><a href='https://chat.whatsapp.com/LsoVYcTZn4Y3KNr0o2auLm'>Compre já</a></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}


export default CharacterItem
