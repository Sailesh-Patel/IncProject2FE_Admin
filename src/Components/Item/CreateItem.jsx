import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

function CreateItem() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [image, setImage] = useState("")
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate("");


    return (
        <div className="card-group d-inline-flex padding">
            <form onSubmit={e => {
                e.preventDefault()
                axios.post("http://localhost:8088/item/create", { name, price, image, quantity })
                    .then(response => {
                        setName("");
                        setPrice();
                        setImage("");
                        setQuantity();
                        navigate("/items");
                    })
                    .catch(err => console.error(err))
            }}>
                <div className="container" id="CreateItem">
                    <div className="row">
                        <div className="col">
                            <div label htmlfor="name" className="form-label ">Name</div>
                            <input type="text" id="name" size="20" value={name} onChange={e => setName(e.target.value)} required />
                        </div>
                        <div className="col">
                            <div label htmlfor="price" className="form-label ">Price</div>
                            <input type="double" id="price" size="5" step="0.01" mins={0} value={price} onChange={e => setPrice(e.target.value)} required />
                        </div>


                        <div className="col">
                            <div label htmlfor="image" className="form-label ">Image</div>
                            <input type="src" id="image" value={image} onChange={e => setImage(e.target.value)} required />
                        </div>

                        <div className="col">
                            <div label htmlfor="quantity" className="form-label ">Quantity</div>
                            <input type="number" id="quantity" size="5"  min={0} value={quantity} onChange={e => setQuantity(e.target.value)} required />
                        </div>


                    </div>
                </div>
                <br />
                <div>
                    <button type="submit" id="SubmitCreateItem" className="btn btn-success"> Submit </button>
                </div>

            </form>
        </div>

    );
}

export default CreateItem;