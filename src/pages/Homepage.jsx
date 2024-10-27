import InputReactive from '../components/common/InputReactive';
import PageFormatter from '../components/common/PageFormatter';
import { useState } from 'react';

export default function Homepage() {
  const [isOpenInput, setIsOpenInput] = useState(false);

  return (
    <PageFormatter>
      <div className='flex flex-row gap-4'>
        <h1 className="text-2xl">This is a homepage</h1>
        <button onClick={() => setIsOpenInput(!isOpenInput)}>
          {isOpenInput ? 'Close' : 'Open'} Input?
        </button>
      </div>
      {isOpenInput && <InputReactive />}
    </PageFormatter>
  );
}
