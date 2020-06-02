import { decorate, configure} from 'mobx';

configure({enforceActions: 'observed'});

class Work {
    constructor({id, title, uitleg, opdracht, workproces, images, allPics, client, team, year, tools}) {
        this.id = id;
        this.title = title;
        this.uitleg = uitleg;
        this.opdracht = opdracht;
        this.workproces = workproces;
        this.images = images; // dit is verzameling van alle soort images: preview, haeder, voorb
        this.allPics = allPics;
        this.client = client;
        this.team = team;
        this.year = year;
        this.tools = tools;
    }
}

decorate(Work, {
    // id: observable,
  });

export default Work;