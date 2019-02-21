export const formatLocalTime = (momentObject) => {
    return momentObject.utc().format('LT');
}

export const formatLocalDateTime = (momentObject) => {
    return momentObject.utc().format('L LT')
}