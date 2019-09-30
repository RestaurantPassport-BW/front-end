import React from "react";
import { CustomInput, Form, FormGroup, Label } from "reactstrap";
import { Icon } from "semantic-ui-react";

function Filter() {
  return (
    <>
      <Form className="filter">
        <FormGroup>
          <Icon name="food" className="filterIcon" />
          <Label className="filterLabel" for="CuisineCheckbox">
            Cuisine
          </Label>
          <div className="filterList">
            <CustomInput type="radio" id="Checkbox" label="Tex-Mex" />
            <CustomInput
              type="radio"
              id="Checkbox2"
              label="Authentic Mexican"
            />
            <CustomInput type="radio" id="Checkbox3" label="American" />
            <CustomInput type="radio" id="Checkbox4" label="Fusion" />
            <CustomInput type="radio" id="Checkbox5" label="Greek" />
            <CustomInput type="radio" id="Checkbox6" label="Chinese" />
            <CustomInput type="radio" id="Checkbox7" label="Thai" />
            <CustomInput type="radio" id="Checkbox8" label="Italian" />
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
  );
}

export default Filter;
