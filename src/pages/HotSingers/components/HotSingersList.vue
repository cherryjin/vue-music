<template>
  <div class="wrapper">
    <div class="content">
      <div class="item" v-for="item in singerList" :key="item.id" @click="jumpSingerInfo(item)">
        <div class="imgWrapper">
          <img class="img" :src="item.img1v1Url"/>
        </div>
        <div class="singer-name">
          <span class="span">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Bus from '../../../assets/js/Bus';

export default {
  name: 'HotSingerList',
  computed: {
    ...mapState({
      singerList: state => state.hotSingers.singerList,
    }),
  },
  methods: {
    jumpSingerInfo(item) {
      this.$store.dispatch('get_singerSong', { id: item.id }).then(() => {
        Bus.$emit('getSingerInfo');
      });
      this.$store.dispatch('get_singerAlbum', { id: item.id });
      this.$store.dispatch('get_singerMV', { id: item.id });
      this.$store.dispatch('get_singerDescription', { id: item.id });
      this.$router.push('/singerInfo');
    },
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    width 100%
    position relative
    top 45px
    .content
      width 100%
      display flex
      flex-direction column
      .item
        width 100%
        height 70px
        display flex
        align-items flex-end
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        .imgWrapper
          flex 0 0 17%
          height 65px
          display flex
          align-items flex-end
          justify-content flex-end
          .img
            width 55px
            height 55px
            border-radius 3px
        .singer-name
          flex 0 0 79%
          height 55px
          margin-left 10px
          display flex
          align-items center
          -webkit-box-sizing: border-box
          -moz-box-sizing: border-box
          box-sizing: border-box
          border-bottom  1px solid #ebeaee
</style>
