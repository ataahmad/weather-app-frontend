import { Component } from "react";
import './Styles/Components.css'

class FormBox extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Ex: 1234 Main St" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" placeholder="Ex: San Diego" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <input type="text" className="form-control" id="inputState" placeholder="Ex: CA" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" placeholder="Ex: 92109" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit!</button>
            </form>
        )
    }
}

export default FormBox;