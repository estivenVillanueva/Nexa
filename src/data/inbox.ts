export type ChatMessage = {
  id: string
  fromMe: boolean
  text: string
  time: string
}

export type Conversation = {
  id: string
  name: string
  handle: string
  avatar: string
  preview: string
  time: string
  unread: number
  online?: boolean
  messages: ChatMessage[]
}

export const conversations: Conversation[] = [
  {
    id: 'elena',
    name: 'Elena Nova',
    handle: '@elenanova',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCrMBDIBmGb332vWpLEm2KWkWAYkHRvax3wN_msloHijhN1HpTR7DSNHKdJ_EaArKOtuQEkENolFMZWvSXv9DotN8axqSLBaUdjEA0Sd8mhUMIK0FL2ZOK3RVW9X81iHOVaFMVgclzr0WKZL6tscQQczbqem_J5fyMNcsugCZNX4nEsWCj3FtVSZjcWQzTG8RmgseqRRJwzzRF44sWmRews6GaBK9UBbZN8Yzl4My16YtBm4TmEJvI',
    preview: '¿Te paso el link del design system?',
    time: '12:40',
    unread: 2,
    online: true,
    messages: [
      {
        id: 'e1',
        fromMe: false,
        text: 'Hey! Vi tu post del feed. El layout quedó muy limpio.',
        time: '12:28',
      },
      {
        id: 'e2',
        fromMe: true,
        text: 'Gracias Elena 🙌 Estoy iterando tipografía ahora.',
        time: '12:31',
      },
      {
        id: 'e3',
        fromMe: false,
        text: 'Si quieres, ¿te paso el link del design system?',
        time: '12:40',
      },
      {
        id: 'e4',
        fromMe: false,
        text: 'Tiene tokens listos para Inter + indigo.',
        time: '12:40',
      },
    ],
  },
  {
    id: 'marc',
    name: 'Marc Tech',
    handle: '@marc_tech',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMmhhH_m6DHihaG6S1UX3zkVmGwsWVZjwbpNy8lp1UHXV9CUu_kJ2yr94ssYS-Q0GsVgOcb2r_3jS54S-jDnmqbK1KgL7Y2LYia7kRwpucbMfqNkugYJ1_UESstbLMDF9aziGSsBp5tnNkEo6gu1S3kNcBzGctxL8L66BL4ducreDjs_fpuckhgyf-ssDKf9TpZvlKavzp3Q9Q8vn0CX5Yo1rE8B3UODzgJa_8rykwrS06hQVkdHl5',
    preview: 'Mañana vemos lo de la IA en el roadmap',
    time: 'Ayer',
    unread: 0,
    messages: [
      {
        id: 'm1',
        fromMe: true,
        text: 'Marc, ¿alcanzaste a revisar el prototipo?',
        time: 'Ayer 18:02',
      },
      {
        id: 'm2',
        fromMe: false,
        text: 'Sí. Mañana vemos lo de la IA en el roadmap.',
        time: 'Ayer 18:15',
      },
    ],
  },
  {
    id: 'sophie',
    name: 'Sophie Dev',
    handle: '@sophie_dev',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxS0qFU0n46IjU_2QxuzDuA6NL98QPry-zzsk3zr7MvYKKKCW0_SQUf-UYcQpheMNeDUo3HyINxjeuEiD2Nvfgdfo9aXc2N1P15QMgsD7UP0Dpvg5Fm7fzozyC6e6qlEbEs9wRJRlIsfFbRnEKkfTAVEnrC0u6MUNY2os21Vc089moGjTgNxNZJwhd7FvX0bY21s6XnfPqHjNdx76SO93FP7POwsF0EojOHkDlHvpBfyXTU3maYuTg',
    preview: 'Tu setup me inspiró a limpiar el escritorio 🪴',
    time: 'Lun',
    unread: 1,
    online: true,
    messages: [
      {
        id: 's1',
        fromMe: false,
        text: 'Tu setup me inspiró a limpiar el escritorio 🪴',
        time: 'Lun 09:12',
      },
    ],
  },
  {
    id: 'carlos',
    name: 'Carlos M.',
    handle: '@carlos_dev',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_8BpRX_bdOlJMeuUMQZRT8KH-NUA56uZqwa6ghLzZuQWw6EKcvtnEYsztYyKcEaL9OreC2SCfous-IB291xP-XylICJbms76M4iVrkq_-FEEOaJpxKGqSOR_vIIbx5UAtDrq4h5Zm-SCgH306AuJ3cacj6eCIZ5sR_OzICYf3TmV4sgkjcgETTN06VXsgoxP1bgAfrE_3kzwneQDY6Zb2B_g9oAjYrObHWNYiH46ZLtrggDdgt-qf',
    preview: 'Te mandé el PR del feed responsive',
    time: 'Dom',
    unread: 0,
    messages: [
      {
        id: 'c1',
        fromMe: false,
        text: 'Te mandé el PR del feed responsive.',
        time: 'Dom 16:40',
      },
      {
        id: 'c2',
        fromMe: true,
        text: 'Perfecto, lo reviso esta noche.',
        time: 'Dom 17:05',
      },
    ],
  },
  {
    id: 'ana',
    name: 'Ana P.',
    handle: '@ana_pm',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4x0F5Y9SvITOogJ2HQDFVReiN8J6MrybegRNR1zQOzP9HynK5BddavC8PzmhzglMuQ2G-TNZtC-A14rfWotZuw2tBg7rE6yJu9OZIrAeVU_Ezrnl8phAAuA1mLFqFrjRKLJh43oaEySGpdNJ7fy9WXIywEl6Ai3LH72Uzg0bhN6acNW0EAEmAeZP3I1pP-j3htW3x-qK5P20cb3PmoYZGeaddcknL4uI29spOGU7Le7HMBUSP2WIF',
    preview: '¿Podemos alinear milestones de Nexa?',
    time: 'Vie',
    unread: 0,
    messages: [
      {
        id: 'a1',
        fromMe: false,
        text: '¿Podemos alinear milestones de Nexa esta semana?',
        time: 'Vie 11:20',
      },
    ],
  },
]
