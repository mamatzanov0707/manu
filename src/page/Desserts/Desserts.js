import React, {useState} from 'react';
import './Desserts.scss'

const Desserts = () => {
    const [desserts, setDesserts] = useState(1)

    function TOPDesserts(id) {
        setDesserts(id)
    }

    return (
        <div id='desserts'>
            <div className="container">
                <div className='desserts'>
                    <div className='desserts--block'>
                        <div className='desserts--block__top'>
                            <h4 onClick={() => TOPDesserts(1)}>Desserts</h4>
                            <div className='desserts--block__top--lina'></div>
                        </div>

                    </div>
                    <div className={desserts === 1 ? 'block' : 'none'}>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque pariatur voluptate?
                            Ab deleniti ducimus ex id nemo nulla quis?</h3>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Desserts;