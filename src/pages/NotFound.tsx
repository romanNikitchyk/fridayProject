import React, {CSSProperties} from 'react';

const styleNotFound: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0a0a0a',
}
const headingNotFound: CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    fontSize: '6rem',
    lineHeight: '200%',
    textShadow: `0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #0fa,
        0 0 82px #0fa,
        0 0 92px #0fa,
        0 0 102px #0fa`,
}

export function NotFound() {
    return (
        <div style={styleNotFound}>
            <h2 style={headingNotFound}>
                <span style={{fontSize: '8rem'}}>
                    404
                </span>
                <br/>
                PAGE NOT FOUND
            </h2>
        </div>
    );
}