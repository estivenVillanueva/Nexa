export const trends = [
  { tag: '#DesignSystem', active: true },
  { tag: '#WebDev', active: false },
  { tag: '#Nexa', active: false },
  { tag: '#UXUI', active: false },
  { tag: '#Minimalism', active: false },
]

export type SuggestedPerson = {
  id: string
  name: string
  role: string
  avatar?: string
  more?: boolean
}

export const suggestedPeople: SuggestedPerson[] = [
  {
    id: '1',
    name: 'Elena R.',
    role: 'UI/UX Designer',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1gKRnhulANHRiwOFpqdaUXMStF8sBVipC6Rqf53uWIemcyuoBm5b5orxpVzVcJjY5TRxYUSKn4FQpNSIirLzYrkuEDiy09-lQ6YbxWunC9AF9JRHSQRzic9VN86isngF8SHjK1d5IXMi2HWCB8LNSdy0fyqIBAcIOfcqWL2O3akeEkuinJxWUPClAdcH1_TstolJjRnnEicpmure6ajlVtLUU-l4BSiPOpoFVNoBbx65vN3Oin0ua',
  },
  {
    id: '2',
    name: 'Carlos M.',
    role: 'Frontend Dev',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_8BpRX_bdOlJMeuUMQZRT8KH-NUA56uZqwa6ghLzZuQWw6EKcvtnEYsztYyKcEaL9OreC2SCfous-IB291xP-XylICJbms76M4iVrkq_-FEEOaJpxKGqSOR_vIIbx5UAtDrq4h5Zm-SCgH306AuJ3cacj6eCIZ5sR_OzICYf3TmV4sgkjcgETTN06VXsgoxP1bgAfrE_3kzwneQDY6Zb2B_g9oAjYrObHWNYiH46ZLtrggDdgt-qf',
  },
  {
    id: '3',
    name: 'Ana P.',
    role: 'Product Manager',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4x0F5Y9SvITOogJ2HQDFVReiN8J6MrybegRNR1zQOzP9HynK5BddavC8PzmhzglMuQ2G-TNZtC-A14rfWotZuw2tBg7rE6yJu9OZIrAeVU_Ezrnl8phAAuA1mLFqFrjRKLJh43oaEySGpdNJ7fy9WXIywEl6Ai3LH72Uzg0bhN6acNW0EAEmAeZP3I1pP-j3htW3x-qK5P20cb3PmoYZGeaddcknL4uI29spOGU7Le7HMBUSP2WIF',
  },
  { id: 'more', name: 'Ver más', role: '', more: true },
]

export type PopularPost =
  | {
      id: string
      type: 'image'
      title: string
      description?: string
      image: string
      likes?: string
    }
  | {
      id: string
      type: 'quote'
      quote: string
      author: string
      comments: string
    }

export const popularPosts: PopularPost[] = [
  {
    id: '1',
    type: 'image',
    title: 'Dashboard Redesign',
    description:
      'Explorando nuevas formas de visualizar datos complejos con una estética limpia.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASU-HM_C9hNB-WQ-sP8uQwaf_4dhUWSaeHY8OD71qhdk1KzygG35SvB3ICyzpBoE-1iQ5P7dUpH7uoYvs-uigYP7sVquZJG3S9Npe1aW9KI8ez3VlroSx5OyFan2thH1V7doE04NTMspYriqoT1LjO7P00SapKtueFxWf2NQBgSh_uXIp7AGcLh9-RgKMFDzzXdkg1CGlyyc1VtuMucmgtXOuZraNd9hMQf8I1dkbnarqpE5uPFU-C',
    likes: '2.4k',
  },
  {
    id: '2',
    type: 'quote',
    quote: 'El buen diseño es obvio. El gran diseño es transparente.',
    author: 'Joe Sparano',
    comments: '128',
  },
  {
    id: '3',
    type: 'image',
    title: 'Design System Update',
    description: 'Nuevos tokens de color añadidos a la librería principal.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBG3OcslCmFyEUa10-hwYGH77BhH35XZWltp9U6G3it1-p_uYOR_3pXiwyXi-676NDQQgNdlnV41SqZxzXk93D2bbeDcgWI2exAMh4XdTZs-nW9Z4zYUKWrZwNXYVShbk6e4V26GDx6V-U5ayvh3k8TPD1ujNuB4i_859tCdgp9sdQXbBBz1GxoCh4v7_FYPel0HM0tFuZDySjbbSKvD8AYkeZqsI0LYfXsRSddGtB6ojjMCjob07NY',
  },
  {
    id: '4',
    type: 'image',
    title: 'Setup Minimalista',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAj09COzCXs1F3bzj2Sgm9-Ebr8vFrjhSjbh8ng4zs3T_rBxOoFUxpDMlDVl471fTiLB55mQQ-3bglzScRRg3oZnC7ELkVCeG3lzed0DSFSusYRtZLSrPqAx_1JD1oCOFfAnBPkGSnpZQUhvos-1wbrrlEh-iYp7Ua9aFoqkLaSeW-LvoE7BhPiY8QK8zdXxCVYElYgnRuabCdpIAUPhl4r0p72HkG-7aYx6UUfzetv6vsvCMK_1El',
    likes: '5.1k',
  },
]
