const CABECA = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px",
    }} />
)

const CORPO = (
    <div style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: "0px",
    }} />
)

const BRACO_DIREITO = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
    }} />
)

const BRACO_ESQUERDO = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
    }} />
)

const PERNA_DIREITA = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
    }} />
)

const PERNA_ESQUERDA = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "0px",
        rotate: "-60deg",
        transformOrigin: "right bottom",
    }} />
)

const PARTES_DO_CORPO = [CABECA, CORPO, BRACO_DIREITO, BRACO_ESQUERDO, PERNA_DIREITA, PERNA_ESQUERDA]


type BonecoForcaProps = {
    numeroDeTentativas: number;
}

const BonecoForca = ({ numeroDeTentativas }: BonecoForcaProps) => {
    return (
        <div style={{
            position: "relative",
        }}>
            <div style={{ height: "50px", width: "10px", background: "black", position: "absolute", top: "0", right: "0" }} />
            {PARTES_DO_CORPO.slice(0, numeroDeTentativas)}
            <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px" }} />
            <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }} />
            <div style={{ height: "10px", width: "250px", background: "black" }} />
        </div>
    )
}

export default BonecoForca