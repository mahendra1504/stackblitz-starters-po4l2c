import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

function Create() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  const postData = () => {
    console.log(productName);
    console.log(productPrice);
    console.log(productDescription);
    console.log(checkBox);

    // axios.post(`https://64d744b42a017531bc1316da.mockapi.io/api/reactapp`, {
    //   productName,
    //   productPrice,
    //   productDescription,
    // });

    // fetch('https://dummyjson.com/products/1')
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Product Name</label>
          <input
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Product Price</label>
          <input
            placeholder="Product Price"
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Product Description</label>
          <input
            placeholder="Product Description"
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckBox(!checkBox)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
