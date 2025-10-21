import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About Us',
    link: '/about-us',
  },
  {
    id: 3,
    title: 'Digital Products',
    link: '/digital-products',
  },
  {
    id: 4,
    title: 'Our Services',
    link: '/service',
  },
  {
    id: 5,
    title: 'Portfolio',
    link: '/portfolio-standard',
  },
  {
    id: 6,
    title: 'Blog',
    link: '/blog-modern',
  },
  {
    id: 7,
    title: 'Contact',
    link: '/contact',
  }
];



export default menu_data;

// mobile menus 
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
      title: string;
      link: string;
  }[];
}[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    dropdown_menus: []
  },
  {
    id: 2,
    title: 'About Us',
    link: '/about-us',
    dropdown_menus: []
  },
  {
    id: 3,
    title: 'Digital Products',
    link: '/digital-products',
    dropdown_menus: []
  },
  {
    id: 4,
    title: 'Our Services',
    link: '/service',
    dropdown_menus: []
  },
  {
    id: 5,
    title: 'Portfolio',
    link: '/portfolio-standard',
    dropdown_menus: []
  },
  {
    id: 6,
    title: 'Blog',
    link: '/blog-modern',
    dropdown_menus: []
  },
  {
    id: 7,
    title: 'Contact',
    link: '/contact',
    dropdown_menus: []
  }
]