import React, { useState } from 'react';

function Mytextfield() {

    const [checkedOption1, setCheckedOption1] = useState(false);
    const [checkedOption2, setCheckedOption2] = useState(false);

    const handleCheckboxChange = (e, option) => {
        switch (option) {
            case 'image':
                setCheckedOption1(e.target.checked);     
                break;
            case 'text':
                setCheckedOption2(e.target.checked);
                break;
            default:
                console.error('Invalid option');
        }
    };

    return (
        <>
            <form align="center">
                <div className="mb-3">
                    <label htmlFor="placeholderName" className="form-label">Placeholder Name</label>
                    <input type="text" className="form-control" id="inputPlaceholder" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="placeholderDescribtion" className="form-label">Placeholder Describtion</label>
                    <input type="text" className="form-control" id="inputDescribtion" />
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="imageRadio" id="imageRadiobtn" defaultChecked />
                    <label className="form-check-label" htmlFor="imageRadiobtn">
                        Image
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="textRadio" id="textRadiobtn" checked={checkedOption1}
                        onChange={(e) => handleCheckboxChange(e, 'option1')} />
                    <label className="form-check-label" htmlFor="textRadiobtn">
                        Text
                    </label>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Upload</button>
                </div>
            </form>
        </>
    )
}

export default Mytextfield