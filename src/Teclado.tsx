import styles from "./Teclado.module.scss"

const TECLAS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]

type TecladoProps = {
    letrasAtivas: string[]
    letrasInativas: string[]
    disabled?: boolean
    adicionarLetraCorreta: (letra: string) => void
}

const Teclado = ({ letrasAtivas, letrasInativas, adicionarLetraCorreta, disabled = false }: TecladoProps) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
            gap: ".5rem",
            marginBottom: "1rem"
        }}>
            {TECLAS.map(tecla => {

                const ehAtivo = letrasAtivas.includes(tecla)
                const ehInativo = letrasInativas.includes(tecla)
                return (
                    <button onClick={() => adicionarLetraCorreta(tecla)}
                        className={`${styles.btn} ${ehAtivo ? styles.active : ""} ${ehInativo ? styles.inactive : ""}`}
                        disabled={ehInativo || ehAtivo || disabled}
                        key={tecla}>{tecla}
                    </button>
                )
            })}

        </div>
    )
}

export default Teclado