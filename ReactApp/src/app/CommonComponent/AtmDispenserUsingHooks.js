import React, { useState } from 'react';

export const AtmDispenser = () => {

    const [homeLink, setHomeLink] = useState("ATM Money Dispenser");
    const [amount, setAmount] = useState(0);
    const [denominationSet, setDenominationSet] = useState([]);
    const defaultSet = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    
    const moneyToBeDisbursed = ()=>{
        let total = amount;
        let result = [];
    
        if (amount > 0 && denominationSet.length === 0) {
            for (let i = 0; i < defaultSet.length; i++) {
                result.push(Math.floor(total / defaultSet[i]));
                total = total % defaultSet[i];
            }
        }
        setDenominationSet(result.reverse());
    }

    const onMoneyEntered = (e)=>{
        if(e.target){
            setAmount(e.target.value),
            setDenominationSet([])
        }else{
            console.log("Some Issue"); 
        }
        this.amountEntered = false;
    }

    return(
        <div className="container">
            <main className="row form">
                <div className="col-xs-6 userentry">
                    <h2>Welcome to ATM</h2>
                    <p>Enter The Amount</p>
                    <input type="number" className="form-control" value={amount} onChange={onMoneyEntered} />
                    <button onClick={moneyToBeDisbursed} className="btn btn-primary">Get Money</button>
                </div>     
                <div className="col-xs-6 notesdisplay">
                    <h4>You will get following amount</h4>
                        <ul className="notesList">
                        {denominationSet.length > 0 ? defaultSet.reverse().map((notes, index) =>
                            <li key={index}>{`${denominationSet[index]} notes of Rs ${notes}`}</li>
                        ) : ''}
                        </ul>
                        
                    <h4 className="dispensed">Total notes dispensed: {denominationSet.reduce((a, b) => a + b, 0)}</h4>
                </div>
            </main>               
        </div>
    )
}