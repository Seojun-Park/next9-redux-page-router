import { AnyAction } from 'redux';

export interface PostProps {
  mainPosts: {
    id: number;
    user: {
      id: number;
      nickName: string;
    };
    content: string;
    images?: {
      src: string;
    }[];
    comments?: {
      nickName: string;
      content: string;
    }[];
  }[];
  imagePath?: [];
  postAdded?: boolean;
}

export const postState: PostProps = {
  mainPosts: [
    {
      id: 1,
      user: {
        id: 1,
        nickName: 'John',
      },
      content: 'First content',
      images: [
        {
          src: 'https://picsum.photos/id/237/200/300',
        },
        {
          src: 'https://picsum.photos/id/238/200/300',
        },
        {
          src: 'https://picsum.photos/id/239/200/300',
        },
      ],
      comments: [
        {
          nickName: 'Jimmy',
          content: 'Merong',
        },
      ],
    },
  ],
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost: PostProps['mainPosts'][0] = {
  id: 1,
  content: 'Hello',
  user: {
    id: 2,
    nickName: 'Patrick',
  },
};

const reducer = (
  state: PostProps = postState,
  action: AnyAction
): PostProps => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
