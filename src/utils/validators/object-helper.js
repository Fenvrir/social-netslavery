
export const updateObjectInArray = (items, itemId, ojectPropName, newObjcProps) => {
    return items.map(u => {
        if (u[ojectPropName] === itemId) {
            return { ...u, ...newObjcProps }
        }
        return u;
    })

}


