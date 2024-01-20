import "./Inventory.scss"
export default function Inventory({inventoryItems}){




    return <>
        <div className="inventory">
        <h2>Inventory</h2>
        <ul>
            {inventoryItems.map((item, index) => (
                <li key={index} className="itemInventory"><img className="itemImage" src={item} alt={index}/></li>
            ))}
        </ul>

        </div>
    </>
}