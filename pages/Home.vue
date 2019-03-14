<template>
  <div>
    <no-ssr>
      <full-page
        ref="fullpage"
        :options="options"
        id="fullpage"
        data-percentage="80"
        data-centered="true"
      >
        <div class="section">
          <h1>Section 1</h1>
        </div>
        <div class="section">
          <h1>Section 2</h1>
        </div>
        <div class="section">
          <h1>section 3</h1>
          <div class="slide">
            <h3>Slide 2.1</h3>
          </div>
          <div class="slide">
            <h3>Slide 2.2</h3>
          </div>
          <div class="slide">
            <h3>Slide 2.3</h3>
          </div>
        </div>
      </full-page>
      <ul class="actions">
        <li @click="$refs.fullpage.api.moveSlideRight()" class="actions-button">Right</li>
      </ul>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: [
          '#F5F5F5',
          '#ffffff',
          '#F5F5F5',
          '#ffffff',
          '#F5F5F5',
          '#ffffff',
          '#F5F5F5',
          '#ffffff'
        ],
        navigation: true,
        showActiveTooltip: true,
        dragAndMove: true,
        loopBottom: true,
        fadingEffect: true,
        slidesNavigation: true,
        css3: true,
        controlArrows: false
      }
    }
  }
}
</script>
