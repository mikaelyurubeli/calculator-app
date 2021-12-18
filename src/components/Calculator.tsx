import React, { useState } from 'react';
import Calc from '../modules/calc'
import CommonEnum from '../enum/CommonEnum'

const Calculator: React.FC<{}> = () => {
    const [ data, setData ] = useState([
        {
            id: 1,
            value: "",
            checked: false
        },
        {
            id: 2,
            value: "",
            checked: false
        },
        {
            id: 3,
            value: "",
            checked: false
        },
    ]);

    const [ result, setResult ] = useState(0)
    const [ error, setError ]   = useState('')

    function handleOnChange (e: React.ChangeEvent<HTMLInputElement>, id: number){
        let newArr = [...data]
        let index = newArr.findIndex(x => x.id === id)
        const val = e.target.value;

        if (e.target.validity.valid) {
            newArr[index].value = val
        } else if (val === '' || val === '-') {
            newArr[index].value = val
        }
      
        setData(newArr);
    }

    function handleOnCheck(e: React.ChangeEvent<HTMLInputElement>, id: number) {
        let newArr = [...data]
        let index = newArr.findIndex(x => x.id === id)
        newArr[index].checked = e.target.checked
        setData(newArr);
    }

    function calculate(operator: string) {
        setError('')
        const result = Calc(data, operator)

        if (result === false) {
            setError('Pilih input field lebih dari 1.')
        }

        setResult(result ? result : 0)
    }

    function showError() {
        return error ? <div className="error-message">{error}</div> : null
    }

    return (
        <div className="container">
            <div className="calculator-app">
                <div className="calculator-title">Kalkulator</div>
                
                {showError()}

                <div className="container-result">
                    <p className="font-bold">{result}</p>
                </div>

                {
                    data.map((data) => 
                        <div className="container-input" key={data.id}>
                            <input className="input-primary" type="text" name="input" value={data.value} onChange={e => handleOnChange(e, data.id)} pattern="^-?[0-9]\d*\.?\d*$" />
                            <input className="input-checkbox" type="checkbox" name="checkbox" checked={data.checked} onChange={e => handleOnCheck(e, data.id)} />
                        </div>
                    )
                }

                <div className="container-operator">
                    <button className="btn-primary" onClick={() => calculate(CommonEnum.ADD)}>+</button>
                    <button className="btn-primary" onClick={() => calculate(CommonEnum.SUBTRACT)}>-</button>
                    <button className="btn-primary" onClick={() => calculate(CommonEnum.MULTIPLY)}>x</button>
                    <button className="btn-primary" onClick={() => calculate(CommonEnum.DIVIDE)}>/</button>
                </div>

            </div>
        </div>
    )
}

export default Calculator;