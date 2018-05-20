<template>
  <li class="list-group-item">
    <img :src="thumbnailUrl" alt="" />
    {{ video.snippet.title }}
  </li>
</template>


<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    }
  }
}
</script>