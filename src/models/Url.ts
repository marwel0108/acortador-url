import { readFileSync,writeFileSync } from "fs";
import IUrl from '../interfaces/IUrl';


export default class Url {
    
    private static urlsArea : IUrl[]  = [];
    private static file : string = "./src/data/urls.json";
    private static url : IUrl;

    
    public static get urls() : IUrl[] {
        Url.getAllUrls();
        return Url.urlsArea
    }
    
    private static readFromFile() : string {
        
        const data : string = readFileSync(Url.file, {
            encoding: 'utf-8'
        });

        return data;
    }

    private static getAllUrls() : void {

        try {

            Url.urlsArea = JSON.parse(Url.readFromFile());

        } catch (err : any) {
            
            console.log(err);
        }

    }


    public static getUrl(url: string) : IUrl {
        
        try {

            const urls : IUrl[] = JSON.parse(Url.readFromFile());
            Url.url = urls.filter((u : IUrl) => u.shortUrl === url)[0];
        } catch (err : any) {
            
            console.log(err);
        }
        return Url.url
    }

    public static createShortUrl(url : IUrl) : void {
        
        try {

            const urls : IUrl[] = JSON.parse( Url.readFromFile());
            urls.push(url);
            writeFileSync(Url.file, JSON.stringify(urls));
        } catch (err : any) {

            console.log(err);
        }
    }
    
}