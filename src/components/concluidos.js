
export default function Concluido(props){
    return(
        <div data-test = "footer" className="footer-concluidos">
            {props.cont}/{props.cards.length} concluidos
        </div>
    )
}