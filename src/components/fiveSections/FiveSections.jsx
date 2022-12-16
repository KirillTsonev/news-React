import Column from "./Column"
import Politics from "./Politics"
import Economics from "./Economics"
import Lifestyle from "./Lifestyle"

import "./fiveSections.sass"

const FiveSections = () => {
    return (
        <div className="fiveSectionsContainer">
            <Column></Column>
            <div>
                <Politics></Politics>
                <Economics></Economics>
                <Lifestyle></Lifestyle>
            </div>
        </div>
    )
}

export default FiveSections