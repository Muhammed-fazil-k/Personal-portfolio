import path from 'path';
import fsPromises from 'fs/promises';

export async function getLocalData(){
    //get filePath
    const filePath = path.join(process.cwd(),'content','personal.json');
    //Read json data
    const jsonData = await fsPromises.readFile(filePath);
    //convert to json 
    const objectData = JSON.parse(jsonData);

    return objectData;
}