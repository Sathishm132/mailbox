import React, { useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const Mailpage = () => {
  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  }
  return (
    <div>
      <Container>
        <Form>
      <InputGroup size="sm" className="mb-3 mt-5">
        <InputGroup.Text id="inputGroup-sizing-sm">To</InputGroup.Text>
        <Form.Control
          aria-label="To"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3 ">
        <InputGroup.Text id="inputGroup-sizing-sm">subject</InputGroup.Text>
        <Form.Control
          aria-label="To"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <Editor
                  editorState={description}
                 
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                   toolbarClassName="toolbarClassName"
                  onEditorStateChange={ onEditorStateChange}
                />
                <Button>send</Button>
          </Form>                           
      </Container>
     
    </div>
  )
}

export default Mailpage