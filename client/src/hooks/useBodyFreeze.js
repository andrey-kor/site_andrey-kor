import React from 'react'

export const useBodyFreeze = () => {
    
    const freeze = (menuState) => {
        const boduClassList = document.body.classList
               
        if (menuState) {
            boduClassList.add('_frozen')
        }
        else {
            if (boduClassList.contains('_frozen')) {
                boduClassList.remove('_frozen')
            }
        }
    }
    
    return { freeze }
}