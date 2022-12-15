import { Button, ButtonGroup, TextField } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { CommaStringToObject, ObjectToCommaString } from '../../lib';

const Demo = () => {
  const cdb = useRef();
  const cdbk = useRef();
  const ocdb = useRef();
  const [cdbResult, setcdbResult] = useState('');
  const [ocdbresult, setOcdbresult] = useState('');
  useEffect(() => {}, []);
  return (
    <div className='Demo'>
      <h2>CommaStringToObject:Comma-ify string convert to object[]</h2>
      <TextField
        inputRef={cdb}
        defaultValue='james,41,male,Audrey,35,female'
        label='comma-ify data'
        fullWidth
      />
      <TextField inputRef={cdbk} label='keys' fullWidth defaultValue="['name', 'age', 'gender']" />
      <pre>
        <code>{JSON.stringify(cdbResult || 'no result')}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            const keys = eval(cdbk.current.value);
            setcdbResult(CommaStringToObject(cdb.current.value, keys));
          }}
        >
          click
        </Button>
      </ButtonGroup>

      <hr style={{ margin: '30px 0' }} />

      <h2>ObjectToCommaString: object[] convert to comma-ify comma-string and keys[]</h2>
      <TextField
        inputRef={ocdb}
        defaultValue="[{ name: 'james', age: '41', gender: 'male' }, { name: 'Audrey', age: '35', gender: 'female' }]"
        label='Object array'
        fullWidth
      />

      <pre>
        <code>{JSON.stringify(ocdbresult)}</code>
      </pre>

      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            const data = eval(ocdb.current.value);
            setOcdbresult(ObjectToCommaString(data));
          }}
        >
          click
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
