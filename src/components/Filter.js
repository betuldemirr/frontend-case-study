import React, { useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setBrands, setModels, fetchBrandsAndModels } from '../features/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const { brands, models, status } = useSelector(state => state.filter);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBrandsAndModels());
        }
    }, [status, dispatch]);

    const onBrandsChange = (brand) => {
        dispatch(setBrands(brand));
        console.log(brand);
    };

    const onModelsChange = (model) => {
        dispatch(setModels(model));
    };

    return (
        <div className="filter my-4">
            <Card className='filter-wrapper'>
                <Form.Group className='px-2'>
                    <Form.Label className='border-bottom w-100 fw-bold'>Brands</Form.Label>
                    {status === 'loading' ? <span>Loading brands...</span> : brands.map((brand, index) => (
                        <Form.Check
                            key={index}
                            type="checkbox"
                            value={brand}
                            label={brand}
                            onChange={() => onBrandsChange(brand)}
                        />
                    ))}
                </Form.Group>
                <Form.Group className='px-2'>
                    <Form.Label className='border-bottom w-100 fw-bold'>Models</Form.Label>
                    {status === 'loading' ? <p>Loading models...</p> : models.map((model, index) => (
                        <Form.Check
                            key={index}
                            type="checkbox"
                            value={model}
                            label={model}
                            onChange={() => onModelsChange(model)}
                        />
                    ))}
                </Form.Group>
            </Card>
        </div>
    );
};

export default Filter;