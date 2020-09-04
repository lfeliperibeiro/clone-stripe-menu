import React, {useRef, useState, useContext, useEffect} from 'react';
import { motion } from 'framer-motion';
import { useDimensions } from './dimensions';
import { Context } from './Provider';

let lastOptionId = 0;

export function DropdownOption({name, content: Content, backgroundHeight}){
    const idRef = useRef(++lastOptionId);
    const id = idRef.current;

    const [optionHook, optionsDimensions] = useDimensions();
    const [registered, setRegistered] = useState(false);

    const {
        registerOption,
        updateOptionProps,
        deleteOptionsById,
        setTargetId,
        targetId,
    } = useContext(Context);

    useEffect(() => {
        if(!registered && optionsDimensions){
            const WrappedContent = () => {
                const contentRef = useRef();
                useEffect(() =>{
                    const contentDimensions = contentRef.current.getBoundingClientRect();
                    updateOptionProps(id, {contentDimensions})
                }, [])

                return (
                    <div ref={contentRef}>
                        <Content />
                    </div>
                )
            }
            registerOption({
                id,
                optionsDimensions,
                optionCenterX: optionsDimensions.x + optionsDimensions.width / 2,
                WrappedContent,
                backgroundHeight,
            })

            setRegistered(true)
        } else if(registered && optionsDimensions){
                updateOptionProps(id, {
                optionsDimensions,
                optionCenterX: optionsDimensions.x + optionsDimensions.width / 2                
            });
        }
    }, [
        registerOption,
        id,
        registered,
        optionsDimensions,
        updateOptionProps,
        deleteOptionsById,
        backgroundHeight,
    ])

    const handleOpen = () => setTargetId(id);
    const handleClose = () => setTargetId(null);
    const handleTouch = () => (window.isMobile = true);

    const handleClick = (e) => {
        e.preventDefault();
        return targetId === id ? handleClose() : handleOpen();
    };




    return (
    <motion.button 
    className="dropdown-option" 
    // ref={optionHook}
    onMouseDown={handleClick}
    onHoverStart={() => !window.isMobile && handleOpen()}
    onHoverEnd={() => !window.isMobile && handleOpen()}
    onTouchStart={handleTouch}
    onFocus={handleOpen}
    onBlur={handleClose}
    >
        {name}
    </motion.button>
    )
}