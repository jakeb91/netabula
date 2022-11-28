import { ChangeEvent, useState } from 'react';

const Upload = () => {
  //set file state
  const [file, setFile] = useState<string | null>(null);

  //if no file, null else handle file
  //TODO: verify if file is JSON
  const validateFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value.length > 0 ? handleFile(e) : null;
  };

  //read JSON file and set state
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader: FileReader = new FileReader();
    fileReader.readAsText(e.target.files![0]);
    fileReader.onload = () => {
      const parseData =
        typeof fileReader.result == 'string'
          ? JSON.parse(fileReader.result)
          : {};
      setFile(parseData);
    };
  };

  //test state
  console.log(file);

  return (
    <>
      <h1>Upload JSON file</h1>
      <input type="file" accept=".json" onChange={validateFile} />
    </>
  );
};

export default Upload;
