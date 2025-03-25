import fs from 'fs';
import { APP_NAME } from '$env/static/private';

export async function load() {
    const data = JSON.parse(fs.readFileSync('content/header-footer.json', 'utf-8'));

    //set current year
    data['year'] = new Date().getFullYear();
    data['appName'] = APP_NAME

    return data;
};