import React from 'react'
import toolsColor from '../data/toolsColor.json'

export const ToolsList = ({ tools }) => {
    return (
        <ul className="tools-list-wrapper">
            {
                tools.map((tool, index) => {
                    return (
                        <div 
                            className="tool" 
                            style={{ backgroundColor: toolsColor[tool]}}
                            key={index}
                        >
                            {tool}
                        </div>   
                    )
                })
            }
        </ul>
    )
}
