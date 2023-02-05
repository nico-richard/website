export interface Section {
  title: string;
  content: string;
  class?: string;
  list?: { title: string; description: string }[];
}

export class DataService {
  sections: Section[] = [
    {
      title: '',
      content: 'On my way to become a web developper',
      class: 'slogan',
    },
    {
      title: 'Presentation',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Dolorum, velit vitae expedita ipsam provident beatae eum ullam?
       Veniam, deserunt quia?`,
    },
    {
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
    {
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
             similique nemo voluptaiandae velit minus itaque voluptates assumenda.
              Amet asperiores earum odit sapiente mollitia deleniti similique veniam,
               accusantium nobis consequatur rerum veritatis recusandae cupiditate.
                Cum voluptas sed nulla blanditiis odit itaque.`,
    },
    {
      title: 'Portfolio',
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
       Quae officia similique nemo voluptatum distinctio ratione a nulla
        voluptatibus, molestiae delectus deleniti repudiandae velit minus
         itaque voluptates assumenda. Amet asperiores earum odit sapiente
          mollitia deleniti similique veniam, accusantium nobis consequatur
           rerum veritatis recusandae cupiditate. Cum voluptas sed nulla 
           blanditiis odit itaque.

      `,
    },
  ];
}
