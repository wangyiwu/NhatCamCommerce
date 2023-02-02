import React from 'react'
import Product from '../product/Product';
import './Plate.css'
import { Pane, Dialog, Button } from 'evergreen-ui'
import Popup from '../popup/Popup';

function Plate({}){

    var listProduct = [1,2,3,4];
    const [isShown, setIsShown] = React.useState(false)

    return (
        <Pane >
            <div className="row">
                                {listProduct.map((value, index) =>
                                <div className="col-12 col-md-6 col-lg-3 flex">
                                    <div className="plate plate--product plate--fx-lift">
                                        <Product key={index} handleClick={() => setIsShown(true)}></Product>
                                    </div>
                                </div>

                            )}
                    </div>

                    <Dialog
                isShown={isShown}
                title="Dialog title"
                onCloseComplete={() => setIsShown(false)}
                confirmLabel="Custom Label 1"
                hasFooter={false}
                hasHeader={false}
                overlayProps={{ className: 'popup popup--visible' }} 
                contentContainerProps={{className: 'popup__container'}}
                width={524}
            >
                <Popup></Popup>
                
            </Dialog>
            
        </Pane>

    );
}

export default Plate