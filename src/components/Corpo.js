import Sidebar from './Sidebar'
import Stories from './Stories'

function Esquerda() {
    return (
        <div class="esquerda">
            <Stories />
        </div>
        )

}
function Corpo() {
    return (
        <div class="corpo">
            <Esquerda />

        </div>
    )
}

export default Corpo