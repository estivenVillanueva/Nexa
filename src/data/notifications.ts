export type NotificationFilter =
  | 'Todas'
  | 'Menciones'
  | 'Likes'
  | 'Nuevos seguidores'

export type NotificationItem = {
  id: string
  type: 'like' | 'follow' | 'comment' | 'mention'
  unread: boolean
  name: string
  message: string
  time: string
  avatar: string
  previewImage?: string
  commentPreview?: string
}

export const notifications: NotificationItem[] = [
  {
    id: '1',
    type: 'like',
    unread: true,
    name: 'María López',
    message: 'indicó que le gusta tu publicación.',
    time: 'Hace 2 horas',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZuBVQjA-Cqo075-1oa9kcQvIYla7Z7iRTXRVDpUNBJWAi-QvfGRYVWtpYXJ92bTvYRSZSkW1q1KBVOSQB2mcZrfpoV__dAPAa2GSgD2nHRpoo59yNCFC6_eksyFLTWrazFU2n-PeL27m4t8nWVIDQmWaoDL-BfTRkQhzBY6GVoXZSvQGb7l9aPMXVqapIQsGo6t81eWgAAJFKwy39ltff_2YWLlsHY6clv3fVhC70qBiHr_NwLTUT',
    previewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxtOAmLkeLic4902uh4GXuj9165JD3605UWMpfrj6ShQXhzjzOx8rqBj6G3F2oCU0VJOLFu2ghvtnT3M3kCOlumrnIb3lNWXcbRKE-eyJW5xKp5V0KtQcVT2aipWSWqfuJzJT2wtchCAyJe6QFzweYo0Dj4QnvDr9rexdp3hZorv05Qhohfl5tDVKvhwJT83jlpQ4sMGIKbfGCHxDa8gkcEVPFKnvuyy1txlI6e0rncBEH9snONfOR',
  },
  {
    id: '2',
    type: 'follow',
    unread: true,
    name: 'Carlos',
    message: 'empezó a seguirte.',
    time: 'Hace 5 horas',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSYV5AAowugmVOvWKkiAOWm0mp5s88RkSoh9Cf8K-5PR_OJKlOcGqewcdJ15FQoKji0sacUR9eGNbo5ntnocxqZ7rxE3DbVtw09DQEXoeOPDHifs4YWYPvnEqoWRvIJ2Rti22qXr1xnbeqsRqma_4HnskZWLgpIIOf_-lXN5-6AABZzOGBhAeexRmpvrOX5JHS19xiQ_2Z0n0V7fnBy8m7b5RoiA2bqLriYQPFpvthj3KH6BKoTdks',
  },
  {
    id: '3',
    type: 'comment',
    unread: false,
    name: 'Laura',
    message: 'comentó tu publicación.',
    time: 'Ayer',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgdOtXuMU9QJh-Y_Yk4R9a1DmTlRot-uzS1eADTXHJ3KN7xLESvjWj-PR5GPRWvRQ35QLWy443GhidS5YsQGz-Cl-02Jll7MoQMiTFvzaxl8OtGD3A5NoM1JICs0INaHVLv0L2pqX10J5PSA6k22KjWvAPQ7vagb2LPfxG8qaVMaSLhm2FYjK8nkUcv9BuMp5RDRkp-9I8johxee1vuPBWzlxxKsb7uhDsVFTNCEidNZerRcvI8rA5',
    commentPreview: '¡Me encanta esta perspectiva! Totalmente de acuerdo.',
  },
]

export const notificationFilters: NotificationFilter[] = [
  'Todas',
  'Menciones',
  'Likes',
  'Nuevos seguidores',
]
