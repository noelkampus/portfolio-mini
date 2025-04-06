<template>
  <div class="project-video-full__wrapper" v-if="project.fullscreenVideo">
    <video ref="video" :src="project.fullscreenVideo" class="project-video-full__video" @timeupdate="updateProgress"
      @play="onPlay" @pause="onPause" :autoplay="!isSmallScreen" loop muted></video>
    <div class="controls">
      <button @click="togglePlayPause">{{ isPlaying ? 'Pause' : 'Play' }}</button>
      <div class="progress-bar" @click="seek($event)">
        <div class="progress-bar__fill" :style="{ width: progress + '%' }"></div>
      </div>
      <button @click="toggleMute">{{ isMuted ? 'Unmute' : 'Mute' }}</button>
    </div>
  </div>
</template>

<script>
import projectsData from "../data/projects.json";

export default {
  data() {
    return {
      project: null,
      progress: 0,
      isPlaying: false,
      isMuted: true, // Set initial state to muted
      isSmallScreen: false
    };
  },
  created() {
    const projectId = parseInt(this.$route.params.id, 10);
    this.project = projectsData.find((p) => p.id === projectId);
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    playVideo() {
      this.$refs.video.play();
    },
    pauseVideo() {
      this.$refs.video.pause();
    },
    togglePlayPause() {
      if (this.isPlaying) {
        this.pauseVideo();
      } else {
        this.playVideo();
      }
    },
    updateProgress() {
      const video = this.$refs.video;
      this.progress = (video.currentTime / video.duration) * 100;
    },
    seek(event) {
      const video = this.$refs.video;
      const rect = event.target.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const newTime = (offsetX / rect.width) * video.duration;
      video.currentTime = newTime;
    },
    onPlay() {
      this.isPlaying = true;
    },
    onPause() {
      this.isPlaying = false;
    },
    toggleMute() {
      const video = this.$refs.video;
      this.isMuted = !this.isMuted;
      video.muted = this.isMuted;
    },
    checkScreenSize() {
      const width = window.innerWidth;
      this.isSmallScreen = width <= 768; // Adjust breakpoint for md/sm
    }
  }
};
</script>

<style lang="scss" scoped>
.project-video-full__wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.project-video-full__video {
  width: 100%;
  height: 100%;
}

.controls {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
  bottom: 0;
  padding: 2rem;
}

button {
  background-color: rgba(0, 0, 0, 0);
  color: $white;
  width: 4rem;
  border: none;
}

.progress-bar {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  position: relative;
}

.progress-bar__fill {
  height: 100%;
  background-color: #fff;
  width: 0;
}
</style>
