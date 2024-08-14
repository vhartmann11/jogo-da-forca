import { useCallback, useEffect, useState } from "react"
import palavras from "./listaPalavras.json"
import BonecoForca from "./BonecoForca"
import PalavraForca from "./PalavraForca"
import Teclado from "./Teclado"

const gerarPalavra = () => {
  return palavras[Math.floor(Math.random() * palavras.length)]
}


function App() {

  const [palavraAtual, setPalavraAtual] = useState((gerarPalavra))
  const [palavrasCertas, setPalavrasCertas] = useState<string[]>([])

  const tentativasIncorretas = palavrasCertas.filter(
    letra => !palavraAtual.includes(letra))

  const Perdedor = tentativasIncorretas.length >= 6
  const Vencedor = palavraAtual
    .split("")
    .every(letra => palavrasCertas.includes(letra))

  useEffect(() => {
    const controlador = (e: KeyboardEvent) => {
      const tecla = e.key

      if (tecla !== "Enter") return

      e.preventDefault()
      setPalavrasCertas([])
      setPalavraAtual(gerarPalavra())
    }

    document.addEventListener("keypress", controlador)

    return () => {
      document.removeEventListener("keypress", controlador)
    }
  }, [palavrasCertas])

  const adicionarLetraCorreta = useCallback
    ((letra: string) => {
      if (palavrasCertas.includes(letra) || Perdedor || Vencedor) return

      setPalavrasCertas(palavrasAtuais => [...palavrasAtuais, letra])
    },
      [palavrasCertas, Perdedor, Vencedor])

  useEffect(() => {
    const controlador = (e: KeyboardEvent) => {
      const tecla = e.key

      if (!tecla.match(/^[a-z]$/)) return
      e.preventDefault()
      adicionarLetraCorreta(tecla)

    }
    
    document.addEventListener("keypress", controlador)

    return () => {
      document.removeEventListener("keypress", controlador)
    }
  }, [palavrasCertas])

  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
    }}>
      <div style={{
        fontSize: "2rem",
        textAlign: "center",
      }}>
        Descubra a palavra relacionada a programação! <br />
        {Vencedor && "Vencedor! - Pressione Enter para continuar jogando."}
        {Perdedor && "Boa tentativa! - Pressione Enter para continuar jogando."}
      </div>
      <BonecoForca numeroDeTentativas={tentativasIncorretas.length} />
      <PalavraForca
        reveal={Perdedor}
        palavrasCertas={palavrasCertas}
        palavraAtual={palavraAtual} />
      <div style={{ alignSelf: "stretch" }}>
        <Teclado
          disabled={Vencedor || Perdedor}
          letrasAtivas={palavrasCertas.filter(letra =>
            palavraAtual.includes(letra)
          )}
          letrasInativas={tentativasIncorretas}
          adicionarLetraCorreta={adicionarLetraCorreta} />
      </div>
    </div>
  )
}

export default App
