import React, { useRef, useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from 'draft-js'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import draftToHtml from "draftjs-to-html"
import axios from 'axios';

const Mailpage = () => {
  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  }
  const email=useRef();
  const title=useRef()
  const clickhandler=(e)=>{
    e.preventDefault();
    const draft={
      mail:email.current.value,
      title:title.current.value,
      content:draftToHtml(convertToRaw(description.getCurrentContent()))
    }
    console.log(draft)
    axios.put("https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/mail.json",draft)
  }
  return (
    <div>
      <Container>
        <Form>
      <InputGroup size="sm" className="mb-3 mt-5">
        <InputGroup.Text id="inputGroup-sizing-sm">To</InputGroup.Text>
        <Form.Control
         ref={email}
          aria-label="To"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3 ">
        <InputGroup.Text id="inputGroup-sizing-sm">subject</InputGroup.Text>
        <Form.Control
        ref={title}
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
                <Button onClick={clickhandler}>send</Button>
          </Form>                           
      </Container>

    </div>
  )
}
 export default Mailpage