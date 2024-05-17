import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';

const Filter = () => {
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);

    return (
        <div className="filter my-4">
            <Card className='filter-wrapper'>
                <Form.Group className='px-2'>
                    <Form.Label className='border-bottom w-100 fw-bold'>Brands</Form.Label>
                    {brands.map((brand, index) => (
                        <Form.Check
                            key={index}
                            type="checkbox"
                            onChange={() => setBrands(brand)}
                        />
                    ))}
                </Form.Group>
                <Form.Group className='px-2'>
                    <Form.Label className='border-bottom w-100 fw-bold'>Models</Form.Label>
                    {models.map((model, index) => (
                        <Form.Check
                            key={index}
                            type="checkbox"
                            onChange={() => setModels(models)}
                        />
                    ))}
                </Form.Group>
            </Card>
        </div>
    );
};

export default Filter;