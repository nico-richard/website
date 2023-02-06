export interface Section {
  title: string;
  content: string;
  list?: { title: string; description: string }[];
}

interface Sections {
  header: Section;
  presentation: Section;
  skill: Section;
  experience: Section;
  portfolio: Section;
}

export class DataService {
  sections: Sections = {
    header: {
      title: '',
      content: 'On my way to become a web developper',
    },
    presentation: {
      title: 'Presentation',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Dolorum, velit vitae expedita ipsam provident beatae eum ullam?
       Veniam, deserunt quia?`,
    },
    skill: {
      title: 'Skills',
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Quae officia similique nemo voluptatum dia deleniti similique veniam, 
      accusantium nobis consequatur rerum veritatis recusandae cupiditate. 
      Cum voluptas sed nulla blanditiis odit itaque.`,
      list: [
        { title: 'skill1', description: 'this is skill 1' },
        { title: 'skill2', description: 'this is skill 2' },
        { title: 'skill3', description: 'this is skill 3' },
      ],
    },
    experience: {
      title: 'Experience',
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Quae officia similique nemo voluptaiandae velit minus itaque voluptates
      assumenda. Amet asperiores earum odit sapiente mollitia deleniti
      similique veniam, accusantium nobis consequat sit amet consectetur,
      adipisicing elit. Quae officia similique nemo voluptaiandae velit 
      minus itaque voluptates assumenda. Amet asperiores earum odit sapiente
      mollitia deleniti similique veniam, accusantium nobis consequat sit 
      amet consectetur, adipisicing elit. Quae officia similique nemo voluptaiandae
      velit minus itaque voluptates assumenda. Amet asperiores earum odit
      sapiente mollitia deleniti similique veniam, accusantium nobis 
      consequat sit amet consectetur, adipisicing elit. Quae officia
      milique nemo voluptaiandae velit minus itaque voluptates assumenda.
      Amet asperiores earum odit sapiente mollitia deleniti similique veniam,
      accusantium nobis consequatur rerum veritatis recusandae cupiditate.
      Cum voluptas sed nulla blanditiis odit itaque.`,
      list: [
        { title: 'exp1', description: 'this is exp 1' },
        { title: 'exp2', description: 'this is exp 2' },
        { title: 'exp3', description: 'this is exp 3' },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Quae officia similique nemo voluptatum distinctio ratione a nulla
      voluptatibus, molestiae delectus deleniti repudiandae velit minus
      itaque voluptates assumenda. Amet asperiores earum odit sapiente
      mollitia deleniti similique veniam, accusantium nobis consequatur
      rerum veritatis recusandae cupiditate. Cum voluptas sed nulla 
      blanditiis odit itaque.`,
      list: [
        { title: 'realisation1', description: 'this is realisation 1' },
        { title: 'realisation2', description: 'this is realisation 2' },
        { title: 'realisation3', description: 'this is realisation 3' },
      ],
    },
  };
}
