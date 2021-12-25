import React from 'react'
import useSplit from "../../hooks/useSplit"



function Blog() {

    const { string, CustomTag } = useSplit()

    return (
        <div className='fullpage center-grid center'>
            <div className="main">
                <div className="big-text ">
                    {string.map((e, index) => (
                        <CustomTag key={index}>
                            {e.map((str, index) => (
                                <span id='ruberband' key={index}>{str}</span>
                            ))}
                        </CustomTag>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
