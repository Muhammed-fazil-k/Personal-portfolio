import path from 'path';
import {promises as fs} from 'fs';
export default async function handler(req,res){
  const filePath = path.join(process.cwd(),'content');
  const fileContent = await fs.readFile(filePath+'/personal.json','utf-8')
  res.status(200).json(fileContent);
}