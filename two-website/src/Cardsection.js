import React from 'react'
import Card from './Card';
const CardSection = () => {
    return (
        <section className="contact bg-success">
            <div className="container">
                <h2 className="text-white">We love new friends!</h2>
                <div className="row">
                    <div className="col-4">
                        <Card title='Footbal' text='Azerbaijan-Kazakhstan' button='3-0' />
                    </div>
                    <div className="col-4">
                        <Card title='Footbal' text='Spain-Switzerland' button='1-2' />
                    </div>
                    <div className="col-4">
                        <Card title='Footbal' text='France-Finland' button='0-2' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CardSection