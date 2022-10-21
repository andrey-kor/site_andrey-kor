import React from 'react'
import colorOfTools from '../data/color-of-tool.json'

export const ToolsList = ({ slide }) => {
    const tools = slide.tools

    return (
        <ul className="tools-list-wrapper">
            {
                tools.map((tool, index) => {
                    return (
                        <div 
                            className="tool" 
                            style={{ backgroundColor: colorOfTools[tool]}}
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
