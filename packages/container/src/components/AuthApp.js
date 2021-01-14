import { mount } from 'auth/AuthApp'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// It was possible that MarkertingApp to be a react component and import it like it but 
// with this way, MarkertingApp could be another type of component in the future 
export default ({ onSignIn }) => {
    const ref = useRef(null)
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname)
                    history.push(nextPathname);
            },
            onSignIn
        });
        history.listen(onParentNavigate);
    }, [])
    return <div ref={ref} />;
}