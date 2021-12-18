import CommonEnum from '../enum/CommonEnum'

export type dataType = {
    id: number
    value: string
    checked: boolean
}

const Calc = (data: Array<dataType>, operator: string) => {
    let temp = 0
    let filteredData = data.filter((x) => x.checked).map((x) => parseInt(x.value) ? parseInt(x.value) : 0)

    if (filteredData.length < 2) return false

    switch(operator) {
        case CommonEnum.ADD:
            temp = filteredData.reduce((acc, curr) => acc +  curr)
            break;
        case CommonEnum.SUBTRACT:
            temp = filteredData.reduce((acc, curr) => acc -  curr)
            break;
        case CommonEnum.MULTIPLY:
            temp = filteredData.reduce((acc, curr) => acc *  curr)
            break;
        case CommonEnum.DIVIDE:
            temp = filteredData.reduce((acc, curr) => acc /  curr)
            break;
        default:
            temp = 0;
    }

    temp = Math.round(temp * 1000) / 1000
    return temp;
}


export default Calc;