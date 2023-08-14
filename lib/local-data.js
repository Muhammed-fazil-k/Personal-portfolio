import path from 'path';
import fsPromises from 'fs/promises';

export async function getLocalData(jsonFile){
    //get filePath
    const filePath = path.join(process.cwd(),'content',jsonFile);
    //Read json data
    const jsonData = await fsPromises.readFile(filePath);
    //convert to json 
    const objectData = JSON.parse(jsonData);

    return objectData;
}

export async function saveLocalData(file,content){
    //get filePath
    const filePath = path.join(process.cwd(),'content',file);
    await fsPromises.writeFile(filePath,JSON.stringify(content,null,2));
}