import { getListComment, getSongsListDetails } from '../../api/songsListDetails';

const songsDetails = {
  state: {
    songList: [],
    creatorInfo: {},
    shareCount: null,
    commentCount: null,
    songCount: null,
    listName: '',
    coverImgUrl: '',
    playCount: null,
    subscribedCount: null,
    response: {
      code: null,
      msg: '',
    },
    backgroundColor: '',
    // 歌单id
    songListId: null,
    // 获取评论
    comments: {},
  },
  mutations: {
    // 获取该歌单下面的歌曲列表
    GET_SONG_LIST(state, payload) {
      state.songList = payload;
    },
    // 获取响应信息
    GET_RESPONSE(state, payload) {
      Object.assign(state.response, payload);
    },
    // 获取歌单创建人的信息
    GET_CREATOR(state, payload) {
      Object.assign(state.creatorInfo, payload);
    },
    // 获取歌单的名字
    GET_NAME(state, payload) {
      state.listName = payload;
    },
    // 获取歌单中歌曲的数量
    GET_SONG_NUMBER(state, payload) {
      state.songCount = payload;
    },
    // 获取歌单的分享量
    GET_SHARE_COUNT(state, payload) {
      state.shareCount = payload;
    },
    // 获取歌单的评论数
    GET_COMMENT_COUNT(state, payload) {
      state.commentCount = payload;
    },
    // 获取歌单背景图片
    GET_IMAGE_URL(state, payload) {
      state.coverImgUrl = payload;
    },
    // 获取歌单的播放量
    GET_PLAY_COUNT(state, payload) {
      state.playCount = payload;
    },
    // 获取歌单收藏人数
    GET_SUBSCRIBED_COUNT(state, payload) {
      state.subscribedCount = payload;
    },
    // 获取背景颜色
    GET_COLOR(state, payload) {
      state.backgroundColor = payload;
    },
    // 保存歌单id
    SAVE_ID(state, payload) {
      state.songListId = payload;
    },
    // 获取所有评论
    GET_COMMENTS(state, payload) {
      Object.assign(state.comments, payload);
    },
  },
  actions: {
    // 请求
    async get_listDetails({ commit }, item) {
      const response = await getSongsListDetails(item);
      commit('GET_SONG_LIST', response.data.playlist.tracks);
      commit('GET_CREATOR', response.data.playlist.creator);
      commit('GET_NAME', response.data.playlist.name);
      commit('GET_COMMENT_COUNT', response.data.playlist.commentCount);
      commit('GET_SHARE_COUNT', response.data.playlist.shareCount);
      commit('GET_SONG_NUMBER', response.data.playlist.trackCount);
      commit('GET_IMAGE_URL', response.data.playlist.coverImgUrl);
      commit('GET_PLAY_COUNT', response.data.playlist.playCount);
      commit('GET_SUBSCRIBED_COUNT', response.data.playlist.subscribedCount);
    },
    // 获取评论
    async get_listComment({ commit, state }) {
      const item = {
        id: state.songListId,
      };
      const response = await getListComment(item);
      commit('GET_COMMENTS', response.data);
    },
  },
};

export default songsDetails;
