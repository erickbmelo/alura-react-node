import styled from 'styled-components'

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const Opcoes = styled.ul`
    display: flex;
`

export default function OpcoesHeader() {

    const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

    return (
        <Opcoes>
            { textoOpcoes.map((texto) => (
                <Opcao key={texto}><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    )
}