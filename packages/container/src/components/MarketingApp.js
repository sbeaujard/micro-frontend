import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// It was possible that MarkertingApp to be a react component and import it like it but 
// with this way, MarkertingApp could be another type of component in the future 
export default () => {
    const ref = useRef(null)
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname)
                    history.push(nextPathname);
            }
        });
        history.listen(onParentNavigate);
    }, [])
    return <div ref={ref} />;
}