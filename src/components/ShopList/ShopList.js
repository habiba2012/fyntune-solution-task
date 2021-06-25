import React from 'react';
import { useSelector } from 'react-redux';
import ShopItem from '../ShopItem/ShopItem';

const ShopList = () => {
    const shopObj = useSelector((state) => state.shop.data)
    const shopItems = shopObj.map((shop) => {
        return <ShopItem shop={shop} key={shop.id} />
    });
    console.log("shopObj", shopObj)
    return (
        <div>
            {shopItems}
        </div>
    );
}

export default ShopList;
