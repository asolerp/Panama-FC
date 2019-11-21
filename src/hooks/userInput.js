import { useState } from 'react';

const userInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChangeText = text => setValue(text);

  return { value, onChangeText };
};

export default userInput;
