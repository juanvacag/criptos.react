import styled from '@emotion/styled'

const  Contenedor = styled.div`
display: flex;
align-items: center;
gap: 1rem;
margin: 15px 0;
border-radius: 5px;
text-align: center;
border: 1px solid #fff;
  color: #fff;
  font-family: 'Lato', sans-serif;
`
const Imagen = styled.img`
  display:block;
  width: 120px;
`

const Texto = styled.p`
  font-size: 18px;
  margin-top: 20px;
  
    span {
      font-weight: 700;
    }
    :last-child {
      margin-bottom: 25px;
    }
`
const Precio = styled.p`
  font-size: 24px;
  margin: 13px 0;
    span {
      font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    console.log(resultado)
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (

    <Contenedor>
        <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="imagen criptomneda"
        />
        <div>
              <Precio>El precio es de: <span>{PRICE}</span></Precio>
              <Texto>Precio más alto de el día: <span>{HIGHDAY}</span></Texto>
              <Texto>Precio más bajo de el día: <span>{LOWDAY}</span></Texto>
              <Texto>Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
              <Texto>Ultima actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado