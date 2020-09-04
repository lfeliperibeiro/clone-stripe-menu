import React , {useState, useCallback, useEffect, createContext} from 'react';

export const Context = createContext();

export function DropdownProvider({ children }){
    const [options, setOptions] = React.useState([]);
    const [targetId, setTargetId] = useState(null);
    const [cachedId, setCachedId] = useState(null);
    
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
                if(item.id === optionId){
                    item = {...item,...props}
                }                
                return item;
            })
        )
    }, [setOptions]);

    const getOptionsById = useCallback(
        (id) => options.find((item) => item.id === id), 
        [options]);
    
    const deleteOptionById = useCallback((id)=> {
        setOptions(items => items.filter(item => item.id !== id))
    }, [setOptions]);

    useEffect(() => {
        if(targetId !== null) setCachedId(targetId);
    }, [targetId]);

    return (
        <Context.Provider
        value={{
            registerOption,
            updateOptionsProps,
            getOptionsById,
            deleteOptionById,
            options,
            targetId,
            setTargetId,
            cachedId,
            setCachedId
        }}
        >
            {children}
        </Context.Provider>
    )
}