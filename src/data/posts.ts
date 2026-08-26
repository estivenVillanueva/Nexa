export type Post = {
  id: string
  author: string
  handle: string
  time: string
  avatar: string
  content: string
  comments: number
  likes: number
  liked?: boolean
  image?: string
  images?: string[]
}

export const posts: Post[] = [
  {
    id: '1',
    author: 'Marc Tech',
    handle: '@marc_tech',
    time: '2h',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMmhhH_m6DHihaG6S1UX3zkVmGwsWVZjwbpNy8lp1UHXV9CUu_kJ2yr94ssYS-Q0GsVgOcb2r_3jS54S-jDnmqbK1KgL7Y2LYia7kRwpucbMfqNkugYJ1_UESstbLMDF9aziGSsBp5tnNkEo6gu1S3kNcBzGctxL8L66BL4ducreDjs_fpuckhgyf-ssDKf9TpZvlKavzp3Q9Q8vn0CX5Yo1rE8B3UODzgJa_8rykwrS06hQVkdHl5',
    content:
      'Explorando las nuevas fronteras de la IA. El impacto en el desarrollo de software es innegable. 🚀',
    comments: 12,
    likes: 48,
  },
  {
    id: '2',
    author: 'Sophie Dev',
    handle: '@sophie_dev',
    time: '4h',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxS0qFU0n46IjU_2QxuzDuA6NL98QPry-zzsk3zr7MvYKKKCW0_SQUf-UYcQpheMNeDUo3HyINxjeuEiD2Nvfgdfo9aXc2N1P15QMgsD7UP0Dpvg5Fm7fzozyC6e6qlEbEs9wRJRlIsfFbRnEKkfTAVEnrC0u6MUNY2os21Vc089moGjTgNxNZJwhd7FvX0bY21s6XnfPqHjNdx76SO93FP7POwsF0EojOHkDlHvpBfyXTU3maYuTg',
    content: 'Mi setup para hoy #coding #minimalism',
    comments: 34,
    likes: 128,
    liked: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBftgZVN5hq96ejUp9DkfvHiqCq-HtDNJyjikP_QNEFS97L702C0azfahqmOrvTvC6ixGJ5r0iqFEg06VnhOGkLkXS0wo3acpDZ65TwmYL45nAjPGbO3M_uWSh0lcjJZ8cgxd2cf6B2gs-zh_VLhg6W-Zx247FJCdaBrmYzSllZ-rxFpBQPJvomzeRVXtscO-x9eXmwf5x5GVoo23YpilASlkDWoU6AnzcOC3l0zDLJp2-w7RMIYiO',
  },
  {
    id: '3',
    author: 'Alex Pixels',
    handle: '@alex_pixels',
    time: '6h',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoPbpV_IFITVRWCrVz3K5Xgm5cK_xKXvn_2XyWBm9QIgIXGy1oJBpd0qchWStFOgZnVTRZzM3OAsvyRiVLY_7UxYEugn4sH56Px3TDZRS_xrIMbpC31-MkEj4srxHjhizO3znFBdRKSVyFRDyfBjpNU8t-Ysb710EhucXI7ANkxaKO4vAFEWMMlI9nHUO69EjOkzkW6_phnIwV0_BDXmvbhODO67BpBNnaCXOYoIQbNhKa9LzAXCVU',
    content: 'Capturando la simetría de la ciudad al amanecer. 🏙️✨',
    comments: 15,
    likes: 89,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRh4F0GkOYXWlMxUrSt-uX0uB8ilFCLZDxA9MR4UzAeyDbDK0saismzcCBC_Kk4lVTU8N325NOwKGfJZQ_9zxdvuQyJySfD6KFkcIyTlyfbAuWe5qSt0lJE3BGSofe4iEafHXO_MPbV6tErhmvHerSife9gWhpWpBdzo4d3WVZHa_rx2B8EwrHmU9GQXVTLmtAt92dBMwLLnzSZ8puEfanY32japtqXPFuEsPwADqYN1a9ib6bKyI3',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCT4QqgUN5F77K6RLNiETEnOEI6X1sBpdFTZf_T7ptYlolGUzfHHJwmZbp2pPmiaLeR0r1HbklNv-aDNNfSPbMgh7ysJySlZYA3f-XY2E1QnljkJa0z7yVVm6k57msNY4CExZBoSPQaVCPZifsndoNT_Umc6pB2M4-v2Y4FF7W9CEFkk53HFclGGxhC35q_84WSU4DzS5Qme43UMV7ux4xSmVMA5c-Lm9t7WU1SasdK8ZQm-tj-vtcu',
    ],
  },
]
