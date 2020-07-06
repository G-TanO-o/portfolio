import { decorate, configure} from 'mobx';

configure({enforceActions: 'observed'});

class Work {
    constructor({id, title, uitleg, opdracht, workproces, images, screensM, screensD, client, team, year, tools}) {
        this.id = id;
        this.title = title;
        this.uitleg = uitleg;
        this.opdracht = opdracht;
        this.workproces = workproces;
        this.images = images; // dit is verzameling van alle soort images: preview, haeder, voorb
        this.screensM = screensM;
        this.screensD = screensD;
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