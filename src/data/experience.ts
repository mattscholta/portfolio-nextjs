export interface Experience {
  featured?: boolean;
  date: string;
  description: string;
  link: string;
  name: string;
  role: string;
}

const data: Experience[] = [
  {
    date: 'April 2021 – Present',
    description: 'Pitched and lead a Full ClientSide rewrite.',
    featured: true,
    link: 'https://haldi.com/',
    name: 'Haldi',
    role: 'Principal Engineer'
  },
  {
    date: 'Feb 2016 – April 2021',
    description: `Pitched and lead a Full ClientSide rewrite & the CMS that powers HP & Landing pages`,
    link: 'https://www.thredup.com/',
    name: 'ThredUP',
    role: 'Staff Engineer'
  },
  {
    date: 'Nov 2011 – Apr 2015',
    description: 'Clients included: Apple, Google & Facebook',
    link: 'https://www.bynd.com/',
    name: 'Beyond',
    role: 'Technical Team Lead'
  }
  // {
  //   date: 'Jul 2010 – Nov 2011',
  //   description: `Clients included: Facebook, Snapfish, Union Bank, AOL, Gerber, Proactive, Charter`,
  //   link: 'https://www.wearelift.com/',
  //   name: 'Creative Lift',
  //   role: 'Interactive Developer'
  // }
];

export { data };
