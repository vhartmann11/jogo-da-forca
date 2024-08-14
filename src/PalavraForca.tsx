type PalavraForca = {
    palavrasCertas: string[]
    palavraAtual: string
    reveal?: boolean
}

const PalavraForca = ({ palavrasCertas, palavraAtual, reveal = false }: PalavraForca) => {

    return (
        <div style={{
            display: "flex",
            gap: ".25em",
            fontSize: "6rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace"
        }}>
            {palavraAtual.split("").map((letra, index) => (
                <span style={{
                    borderBottom: ".1em solid black"
                }} key={index}>
                    <span style={{
                        visibility: palavrasCertas.includes(letra) || reveal
                            ? "visible"
                            : "hidden",
                        color: !palavrasCertas.includes(letra) && reveal ? "red" : "black",
                    }}>
                        {letra}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default PalavraForca