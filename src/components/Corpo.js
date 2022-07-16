import Sidebar from './Sidebar'
import Stories from './Stories'
import Posts from './Posts'

function Esquerda() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
        )

}
function Corpo() {
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />
            
        </div>
    )
}

export default Corpo