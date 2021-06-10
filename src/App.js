import React from 'react';
import './style.css';
import Counter from './Components/counter.jsx';
import {useFilePicker} from 'use-file-picker';

export default function App() {
  const [filesContent, errors, openFileSelector, loading] = useFilePicker({
    multiple: true,
    // accept: '.ics,.pdf',
    accept: ['.json', '.pdf']
  });

  if (errors.length > 0) return <p>Error!</p>;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <div class="container bg-primary row">
        <div class="container bg-danger center">Things and stuff</div>
        <div class="container bg-danger center">Second Things and stuff</div>
        <p> things and stuff </p>
      </div>

      <div class="container">This is the file selector</div>


      <div class="container flex-column"  >
        <div>
        <h1>Helful links </h1>
        <p>The following is a list of helpful links and what they are for.  </p>
        <ul>
          <li><b>The link below is for a file Selector </b> </li>
          <li>https://codesandbox.io/s/pedantic-joliot-8nkn7?file=/src/App.js </li>
          <li><b>The link below is a guide to containers in css </b> </li>
          <li>https://css-tricks.com/snippets/css/a-guide-to-flexbox/#background</li>
        </ul>
        </div>
      </div>
       <div class="container flex-column"  >
        <div>
        <h1> To Do </h1>
        <p>The following is a list of tasks to work on while completeing this project.  </p>
        <ul>
          <li><b>Build a custom table component </b> </li>
          <li>https://codesandbox.io/s/pedantic-joliot-8nkn7?file=/src/App.js </li>
        </ul>
        </div>
      </div>

      {/* <div>
        <button onClick={() => openFileSelector()}>Reopen file selector</button>
        <pre>{JSON.stringify(filesContent)}</pre>
      </div> */}

      {/* <div class="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight">Flex item 1</div>
        <div class="p-2 bd-highlight">Flex item 2</div>
        <div class="p-2 bd-highlight">Flex item 3</div>
      </div>
      <div class="d-flex col">
        <Button className="Button btn-primary">button1</Button>
        <Button className="Button btn-primary">button2</Button>
        <Counter /> */}
    </div>
  );
}
