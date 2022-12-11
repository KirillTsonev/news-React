import AllNews from "../allNews/AllNews"
import EditorChoice from "../editorChoice/EditorChoice"

import "./grid.sass"

const Grid = () => {
    return (
        <div className="gridContainer">
            <AllNews></AllNews>
            <EditorChoice></EditorChoice>
        </div>
    )
}

export default Grid