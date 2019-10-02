let db = {
  users: [
    {
      userId: 'Gx2aB41lj8ct7dZWLA57Jy30fLk1',
      email: 'veysel2@mail.com',
      handle: 'veysel2',
      createdAt: '2019-09-21T14:33:20.597Z',
      imageUrl: 'image/adasdasd/asdasdsadsd',
      bio: 'Hello, my name is veysel2, Nice to meet you',
      website: 'https://veysel2.com',
      location: 'London, UK'
    }
  ],
  screams: [
    {
      userHandle: 'user',
      body: 'this is the scream body',
      createdAt: '2019-09-19T01:20:09.913Z',
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: 'veysel',
      screamId: 'qb6ZJGi2zrzyAokFWTSI',
      body: 'nice to meet you',
      createdAt: '2019-09-21T16:55:05.004Z'
    }
  ],
  notifications: [
    {
      recipient: 'veysel2',
      sender: 'veysel',
      read: 'true | false',
      screamId: 'andsjasşdasnjdnassadasd',
      type: 'like | comment',
      createdAt: '2019-09-23T10:59:52.798Z'
    }
  ]
};

const userDetails = {
  // redux data
  credentials: {
    userId: 'Gx2aB41lj8ct7dZWLA57Jy30fLk1',
    email: 'veysel2@mail.com',
    handle: 'veysel2',
    createdAt: '2019-09-21T14:33:20.597Z',
    imageUrl: 'image/adasdasd/asdasdsadsd',
    bio: 'Hello, my name is veysel2, Nice to meet you',
    website: 'https://veysel2.com',
    location: 'London, UK'
  },
  likes: [
    {
      userHandle: 'veysel2',
      screamId: 'tdPb0zJsHoaRaSQcEGMr'
    },
    {
      userHandle: 'veysel2',
      screamId: 'qb6ZJGi2zrzyAokFWTSI'
    }
  ]
};
