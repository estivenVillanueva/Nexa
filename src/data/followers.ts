export type FollowStatus = 'follow' | 'following' | 'pending'

export type FollowUser = {
  id: string
  name: string
  handle: string
  bio: string
  avatar?: string
  initials?: string
  verified?: boolean
  status: FollowStatus
  list: 'followers' | 'following'
}

export const followUsers: FollowUser[] = [
  {
    id: '1',
    name: 'David Chen',
    handle: '@dchen_design',
    bio: 'UI/UX Designer | Coffee enthusiast ☕',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhWZzlCrQqvNqzsZkaLxQw_cZLyqfsYDENU4AKZ9RYO456YcgiyDgF68F92VsyuUbPE7YK94vRMBlgDN7WvSvMpDZXdDQ_y0MM9cCrSluwop808iMQUYtA6FvXKAvbCDTWnVkami-wNYLJbB9EZbQQbl2h9HYv65PikWh80ofN6-R0lBnhCGaLYpdq7xCAHasM2ezFLofCheet8J5vrhDj7iTPqUvgIec8KU6_8HnEawU1S7oJJ9UJ',
    verified: true,
    status: 'follow',
    list: 'followers',
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    handle: '@sjenkins',
    bio: 'Digital marketing & content creation.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsjqf-yK6CFKNmglhV0lLslDK5QOzY-p9gRHFIkV_WMTIJCj5BaCwmZnDlMM3P2-miq5dZ2PzwFVfs8HWHC-8okgSBBh8CKKL4RZUlZL-hdnZX0O282d_4jl4Gqn_KwUf6AUm22aRs1PpeW1BUwuDWCH8UuQjmiFmvA3GxHdT_eCj7D0IZQAsWPyWO9gMxzMe7xTZc9BXGZVdY4A1QpUevkeAREo5tpZnFwo2xQczIETUgXaFv11Zj',
    status: 'following',
    list: 'followers',
  },
  {
    id: '3',
    name: 'Alex Rivera',
    handle: '@arivera_tech',
    bio: 'Software Engineer building cool things.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuANsmSe9bIetbb6GNx3ER485_fdkWPk49e4rZUHko5nZxi7Ovgj2pOS9tZ0WpE3LGHsKSKOOXYrg5WCiRSl3rTqnXx_pebJbG5PAJ95xihPjF7JKb9NlHyHKrSwP7j88jvb7G1w27TMJYaKThRaAopzvL2LVFt65lSZyk28F44QfuueIKMECqGiA2tyNd46-g3LtNDquAcj6IPHodor0fGKAecdSVYbTpEHCwQkQHSwwOdNeDuuOMfK',
    status: 'pending',
    list: 'followers',
  },
  {
    id: '4',
    name: 'Tech Magazine',
    handle: '@techmag_official',
    bio: 'Latest news in technology and startups.',
    initials: 'M',
    status: 'following',
    list: 'following',
  },
  {
    id: '5',
    name: 'Marc Tech',
    handle: '@marc_tech',
    bio: 'Explorando IA y desarrollo de software.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMmhhH_m6DHihaG6S1UX3zkVmGwsWVZjwbpNy8lp1UHXV9CUu_kJ2yr94ssYS-Q0GsVgOcb2r_3jS54S-jDnmqbK1KgL7Y2LYia7kRwpucbMfqNkugYJ1_UESstbLMDF9aziGSsBp5tnNkEo6gu1S3kNcBzGctxL8L66BL4ducreDjs_fpuckhgyf-ssDKf9TpZvlKavzp3Q9Q8vn0CX5Yo1rE8B3UODzgJa_8rykwrS06hQVkdHl5',
    status: 'following',
    list: 'following',
  },
  {
    id: '6',
    name: 'Sophie Dev',
    handle: '@sophie_dev',
    bio: 'Frontend & minimal setups.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxS0qFU0n46IjU_2QxuzDuA6NL98QPry-zzsk3zr7MvYKKKCW0_SQUf-UYcQpheMNeDUo3HyINxjeuEiD2Nvfgdfo9aXc2N1P15QMgsD7UP0Dpvg5Fm7fzozyC6e6qlEbEs9wRJRlIsfFbRnEKkfTAVEnrC0u6MUNY2os21Vc089moGjTgNxNZJwhd7FvX0bY21s6XnfPqHjNdx76SO93FP7POwsF0EojOHkDlHvpBfyXTU3maYuTg',
    status: 'following',
    list: 'following',
  },
]
