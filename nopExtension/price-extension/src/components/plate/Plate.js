import React from 'react'
import Product from '../product/Product';
import './Plate.css'
import { Pane, Dialog, Button } from 'evergreen-ui'

function Plate({}){

    var listProduct = [1,2,3,4];
    const [isShown, setIsShown] = React.useState(false)

    return (
        <Pane>
            <Dialog
                isShown={isShown}
                title="Dialog title"
                onCloseComplete={() => setIsShown(false)}
                confirmLabel="Custom Label"
                preventBodyScrolling
            >
                Dialog content
            </Dialog>

            <div className="row">
                                {listProduct.map((value, index) =>
                                <div className="col-12 col-md-6 col-lg-3 flex">
                                    <div className="plate plate--product plate--fx-lift">
                                        <Product key={index} handleClick={() => setIsShown(true)}></Product>
                                    </div>
                                </div>

                            )}
                    </div>
        </Pane>
        
    );
}

export default Plate