export type ProfilePost = {
  id: string
  time: string
  content: string
  image?: string
  tags?: string[]
}

export const profile = {
  name: 'Elena Nova',
  handle: '@elenanova',
  bio: 'Diseñadora de interfaces & Amante del minimalismo. Construyendo el futuro en @nexa.',
  location: 'Madrid, ES',
  website: 'elenanova.design',
  websiteUrl: 'https://elenanova.design',
  joined: 'Se unió en Septiembre 2021',
  posts: '124',
  followers: '1.2k',
  following: '850',
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBCrMBDIBmGb332vWpLEm2KWkWAYkHRvax3wN_msloHijhN1HpTR7DSNHKdJ_EaArKOtuQEkENolFMZWvSXv9DotN8axqSLBaUdjEA0Sd8mhUMIK0FL2ZOK3RVW9X81iHOVaFMVgclzr0WKZL6tscQQczbqem_J5fyMNcsugCZNX4nEsWCj3FtVSZjcWQzTG8RmgseqRRJwzzRF44sWmRews6GaBK9UBbZN8Yzl4My16YtBm4TmEJvI',
  banner:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB3gXGV-1JmlAQdUjwfmKnZTe3DJWWjuHJY6c98t6fJVyLmx44oznuGnNNqY0Hu94UgqW_6gE0fXaVRQzYpXxYgCQsfVBwpLPFL-kt_fSl3ldqZi1Nq9zHBDF1biX7WNQFYnjKWE_3osLYKWc728rUI7scI5P8lLhIBaZCSrilZBNVKBO8ejxS8EI-zdF25wsIjMlhvnaWLkxJSDn78CjVSC5CJldDKIjnc1S3ajJlMH6Z7WgEQxq0C',
}

export const profilePosts: ProfilePost[] = [
  {
    id: 'p1',
    time: '2h',
    content:
      'Explorando nuevas paletas monocromáticas para el proyecto de esta semana. Menos siempre es más. 🤍',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABj80KTgCNq7nVFSOCn9jiYyZF2g1TVNFI2xG7HkNCY-hhUOfKd3GS_1n9cOIoPKtt0i_tJkYkKtZJ9pGUvzxQczNa5uMRdYGP07PsZOW_yGIpMmGPb_ULAmkcuetV-Heb9VmLtaBbHCop2mymcD3nzDHM2Jl_SQ7t7614lol4-8Um8zA3tHUSq_TiROlyoXvQQ1nbOWPyvU-rrb0-SevBGZG3MVB-X3-rVIC-yexlWRHqTq1enQQ9',
  },
  {
    id: 'p2',
    time: '5h',
    content:
      'La jerarquía visual no se trata de hacer las cosas más grandes, se trata de hacerlas más claras. La tipografía es tu mejor herramienta para dirigir el ojo.',
    tags: ['UI/UX', 'Design'],
  },
  {
    id: 'p3',
    time: '1d',
    content: 'Mi setup actual para enfocarme. Luz natural y un escritorio despejado. 🪴',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3PRhTlCX0AfieJqNjQpED_pyTX18ZHlDcbxe9lTmxwR8f16jkGvqqoeI46gJ09axm0IJyk3866KVTi16TYkpFBI7MlF64aT859tAc2GsWkAvZCt1DnAAvT8uL-Rx0PUDlfknBhgu5Q_a0hIFqzKUQY9-1N7aDpBx3JYKkhng2hxMK_jGeAbZwQphbYIdOR6wDXBk43tqRFmlWPwmXvfKzHrSlB1cPI5vq33xIhEoigaVUUsoG2gqf',
  },
]
