import { Button, ButtonGroup, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import {
  CommaStringToList,
  ListToCommaString,
  CommaStringToArray,
  ArrayToCommaString,
} from '../../lib';

const Demo = () => {
  const cdb = useRef();
  const cdbk = useRef();
  const ocdb = useRef();
  const cta = useRef();
  const atc = useRef();

  const [cdbResult, setcdbResult] = useState();
  const [ocdbresult, setOcdbresult] = useState();
  const [ctaResult, setCtaResult] = useState();
  const [atcResult, setatcResult] = useState();

  return (
    <div className='Demo'>
      <h2>CommaStringToList: comma string convert to object[]</h2>
      <TextField
        inputRef={cdb}
        defaultValue='james,41,male,Audrey,35,female'
        label='Comma String Data'
        fullWidth
      />
      <TextField inputRef={cdbk} label='Keys' fullWidth defaultValue="['name', 'age', 'gender']" />
      <pre>
        <code>{JSON.stringify(cdbResult ?? 'no result')}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            const keys = eval(cdbk.current.value);
            setcdbResult(CommaStringToList(cdb.current.value, keys));
          }}
        >
          click
        </Button>
      </ButtonGroup>

      <hr style={{ margin: '30px 0' }} />

      <h2>ListToCommaString: object[] convert to comma-string and keys[]</h2>
      <TextField
        inputRef={ocdb}
        defaultValue="[{ name: 'james', age: '41', gender: 'male' }, { name: 'Audrey', age: '35', gender: 'female' }]"
        label='Object in Array'
        fullWidth
      />
      <pre>
        <code>{JSON.stringify(ocdbresult ?? 'no result')}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            const data = eval(ocdb.current.value);
            setOcdbresult(ListToCommaString(data));
          }}
        >
          click
        </Button>
      </ButtonGroup>

      <hr style={{ margin: '30px 0' }} />

      <h2>CommaStringToArray: comma string convert to array.</h2>
      <TextField
        inputRef={cta}
        defaultValue='1,3,6,10,25,30,50'
        label='Comma String Data'
        fullWidth
      />
      <pre>
        <code>{JSON.stringify(ctaResult || 'no result')}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            const data = cta.current.value;
            setCtaResult(CommaStringToArray(data));
          }}
        >
          click
        </Button>
      </ButtonGroup>

      <hr style={{ margin: '30px 0' }} />

      <h2>ArrayToCommaString: Array convert to Comma string.</h2>
      <TextField
        inputRef={atc}
        defaultValue='[1, 3, 5, 10, 30, 53, 98]'
        label='Comma String Data'
        fullWidth
      />
      <pre>
        <code>{JSON.stringify(atcResult || 'no result')}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            const data = eval(atc.current.value);
            setatcResult(ArrayToCommaString(data));
          }}
        >
          click
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
