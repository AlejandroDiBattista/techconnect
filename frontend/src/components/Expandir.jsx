import React from 'react';

export function Expandir({ children, style = {}, ...props }) {
    return (
        <div style={{flexGrow: 1,...style}} {...props}>
            {children}
        </div>
    );
};

