import React, { useState } from "react";
import BagNav from "./BagNav/BagNav";
import BagHome from "./BagHome/BagHome";
import BagAddress from "./BagAddress/BagAddress";
import BagPayment from "./BagPayment/BagPayment";
import SmallImages from "./SmallImages";

const Bag = () => {
    const [bag, setBag] = useState(true);
    const [address, setAddress] = useState(false);
    const [payment, setPayment] = useState(false);
    const handlePlaceOrder = () => {
        setBag(false);
        setPayment(true);
    };
    const handleAddAddress = () => {
        setAddress(false);
        setPayment(true);
    }
    const COD = () => {
        setAddress(true);
        setPayment(false);
    }
    return <div>    

        <BagNav bag={bag} payment={payment} address={address} />
        <hr style={{ marginTop: "20px", marginBottom: "40px" }} />
        {
            bag && <BagHome handlePlaceOrder={handlePlaceOrder} />
        }
        {
            address && <BagAddress handleAddAddress={handleAddAddress} />
        }
        {
            payment && <BagPayment COD={COD} />
        }
        <SmallImages />


    </div>
};

export default Bag;