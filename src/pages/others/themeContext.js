import React from 'react';

const ThemeContext = React.createContext({
    background:'red',
    color:'yellow',
})
ThemeContext.displayName = 'TqqContext';

export  {ThemeContext};