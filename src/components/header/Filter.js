import React from 'react'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import { Icon } from 'semantic-ui-react';

function Filter() {
    return (
        <>
            <Form className="filter">
                <FormGroup>
                    <Icon name="food" /><Label for="CuisineCheckbox">Cuisine</Label>
                    <div>
                        <CustomInput type="checkbox" id="Checkbox" label="Tex-Mex" />
                        <CustomInput type="checkbox" id="Checkbox2" label="Authentic Mexican" />
                        <CustomInput type="checkbox" id="Checkbox3" label="American" />
                        <CustomInput type="checkbox" id="Checkbox4" label="Fusion" />
                        <CustomInput type="checkbox" id="Checkbox5" label="Greek" />
                        <CustomInput type="checkbox" id="Checkbox6" label="Chinese" />
                        <CustomInput type="checkbox" id="Checkbox7" label="Thai" />
                        <CustomInput type="checkbox" id="Checkbox8" label="Italian" />
                    </div>
                </FormGroup>
            </Form>
            {/* <Form>
                <FormGroup>
                    <Icon name="clock"/><Label for="PeriodCheckbox">Period</Label>
                    <div>
                        <CustomInput type="checkbox" id="Checkbox9" label="Breakfast" />
                        <CustomInput type="checkbox" id="Checkbox10" label="Lunch" />
                        <CustomInput type="checkbox" id="Checkbox11" label="Brunch" />
                        <CustomInput type="checkbox" id="Checkbox12" label="Dinner" />
                        <CustomInput type="checkbox" id="Checkbox13" label="Dessert" />
                    </div>
                </FormGroup>
            </Form> */}

        </>
    )
}

export default Filter
