import React , {useState, useCallback} from 'react';

const Context = React.createContext();

export function DropdownProvider({ children }){
    const [options, setOptions] = React.useState([]);
    const [targetId, setTargetId] = useState(null);
    const [cachedId, setCachedID] = useState(null);
    
    const registerOption = useCallback(({
        id,
        optionDimensions,
        optionCenterX,
        WrappedContent,
        BackgroundHeight
    }) => {
        setOptions(items => [
            ...items,
            {
                id,
                optionDimensions,
                optionCenterX,
                WrappedContent,
                BackgroundHeight
            }

        ])
    }, [setOptions]);

    const updateOptionsProps = useCallback((optionId, props) => {
        setOptions(items =>
            items.map(item =>{
                
                
                return item;
            })
        )
    }, [setOptions])

    return (
        <Context.Provider
        value={{

        }}
        >
            {children}
        </Context.Provider>
    )
}