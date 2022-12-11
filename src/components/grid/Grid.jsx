import AllNews from "../allNews/AllNews"
import EditorChoice from "../editorChoice/EditorChoice"
import Regions from "../regions/Regions"

import "./grid.sass"

const Grid = () => {
    return (
        <div className="gridContainer">
            <AllNews></AllNews>
            <EditorChoice></EditorChoice>
            <Regions></Regions>
        </div>
    )
}

export default Grid