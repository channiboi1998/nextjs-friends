import React from 'react'
import Header from './header'
import 'semantic-ui-css/semantic.min.css'

const layout = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default layout