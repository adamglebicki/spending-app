import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAutentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAutenticated ? (
                <WrappedComponent {...props} />
            ) : (
                    <p>Please log in to view the info</p>
                )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAutentication(Info)

ReactDOM.render(<AdminInfo isAdmin={true} info="This is the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAutenticated={false} info="This is the details" />, document.getElementById('app'))