import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UserInput() {
  function Foo({name, placeholder}) {
    const [hasFocus, setHasFocus] = React.useState(false);

    function handleFocus() {
        setHasFocus(true);
        console.log("clicked")
    }

    return (
      <Form.Group className="mb-3">
        <Form.Label>{name}: </Form.Label>
        <Form.Control type="text" placeholder={placeholder}/>
      </Form.Group>
    );
  }
  return (
    <Form>
      <Foo name="Name" placeholder="Full Name" />


      <Button variant="primary" type="submit" onClick={handleFocus()}>
        Submit
      </Button>
    </Form>
  );
}

export default UserInput;
