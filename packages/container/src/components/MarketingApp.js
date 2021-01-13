import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'

// It was possible that MarkertingApp to be a react component and import it like it but 
// with this way, MarkertingApp could be another type of component in the future 
export default () => {
    const ref = useRef(null)

    useEffect(() => {
        mount(ref.current);
    })
    return <div ref={ref} />;
}