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
          <b-container fluid>
            <b-row>
              <b-col md="4" cols="6" class="m-auto p-5">
                <h1>Om</h1>
                <p>Mit navn er Mikkel Hornbech Nielsen, jeg er 26 år gammel og født og opvokset i smilets by. Jeg har en kæmpe passion for hjemmesideudvikling og grafisk design. Udover min passion elsker jeg fodbold, familie, venner, gaming og kultur. Jeg har en stor IT-viden, og er aldrig bleg for en udfordring og meget interesseret i alt nyt indenfor mit fag.</p>
                <b-button variant="secondary">Primary</b-button>
              </b-col>
              <b-col md="8" cols="6" class="p-5">
                <parallax-container>
                  <parallax-element :parallaxStrength="-3" :type="'translation'">
                    <b-img-lazy
                      fluid
                      src="/img/mikkel-edited-smaller.png"
                      alt="Mikkel Hornbech Nielsen"
                    />
                  </parallax-element>
                </parallax-container>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="section">
          <b-container fluid>
            <b-row>
              <b-col cols="4" class="m-md-auto p-md-5">
                <h1>Evner</h1>
                <p>Mit navn er Mikkel Hornbech Nielsen, jeg er 26 år gammel og født og opvokset i smilets by. Jeg har en kæmpe passion for hjemmesideudvikling og grafisk design. Udover min passion elsker jeg fodbold, familie, venner, gaming og kultur. Jeg har en stor IT-viden, og er aldrig bleg for en udfordring og meget interesseret i alt nyt indenfor mit fag.</p>
                <b-button variant="secondary">Primary</b-button>
              </b-col>
              <b-col cols="8" class="p-5"></b-col>
            </b-row>
          </b-container>
        </div>
        <div class="section">
          <b-container fluid>
            <b-row>
              <b-col cols="12" class="p-5">
                <h1>Projekter</h1>
              </b-col>
            </b-row>

            <div class="slide beeroclock-slide">
              <b-row>
                <b-col cols="6" class="p-5">
                  <h1>BeerOClock</h1>
                  <p>Mit navn er Mikkel Hornbech Nielsen, jeg er 26 år gammel og født og opvokset i smilets by. Jeg har en kæmpe passion for hjemmesideudvikling og grafisk design. Udover min passion elsker jeg fodbold, familie, venner, gaming og kultur. Jeg har en stor IT-viden, og er aldrig bleg for en udfordring og meget interesseret i alt nyt indenfor mit fag.</p>
                  <b-button variant="secondary">Primary</b-button>
                </b-col>
                <b-col md="6" cols="6" class="p-5">
                  <parallax-container>
                    <parallax-element :parallaxStrength="1" :type="'translation'">
                      <b-img-lazy fluid src="/img/beeroclock.png" alt="Mikkel Hornbech Nielsen"/>
                    </parallax-element>
                  </parallax-container>
                </b-col>
              </b-row>
            </div>
            <div class="slide">
              <b-row>
                <b-col cols="6" class="p-5">
                  <h1>BeerOClock</h1>
                  <p>Mit navn er Mikkel Hornbech Nielsen, jeg er 26 år gammel og født og opvokset i smilets by. Jeg har en kæmpe passion for hjemmesideudvikling og grafisk design. Udover min passion elsker jeg fodbold, familie, venner, gaming og kultur. Jeg har en stor IT-viden, og er aldrig bleg for en udfordring og meget interesseret i alt nyt indenfor mit fag.</p>
                  <b-button variant="secondary">Primary</b-button>
                </b-col>
                <b-col md="6" cols="6" class="p-5">
                  <parallax-container>
                    <parallax-element :parallaxStrength="1" :type="'translation'">
                      <b-img-lazy fluid src="/img/beeroclock.png" alt="Mikkel Hornbech Nielsen"/>
                    </parallax-element>
                  </parallax-container>
                </b-col>
              </b-row>
            </div>
            <div class="slide">
              <b-row>
                <b-col cols="4" class="p-5">
                  <h1>BeerOClock</h1>
                  <p>Mit navn er Mikkel Hornbech Nielsen, jeg er 26 år gammel og født og opvokset i smilets by. Jeg har en kæmpe passion for hjemmesideudvikling og grafisk design. Udover min passion elsker jeg fodbold, familie, venner, gaming og kultur. Jeg har en stor IT-viden, og er aldrig bleg for en udfordring og meget interesseret i alt nyt indenfor mit fag.</p>
                  <b-button variant="secondary">Primary</b-button>
                </b-col>
                <b-col md="8" cols="6" class="p-5">
                  <parallax-container>
                    <parallax-element :parallaxStrength="1" :type="'translation'">
                      <b-img-lazy fluid src="/img/beeroclock.png" alt="Mikkel Hornbech Nielsen"/>
                    </parallax-element>
                  </parallax-container>
                </b-col>
              </b-row>
            </div>
          </b-container>
        </div>
        <div class="section">
          <h1>Udtalelser</h1>
        </div>
        <div class="section">
          <h1>Kontakt</h1>
          <form
            name="contact"
            action="/"
            method="POST"
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
            <p>
              <label>
                Your Name:
                <input type="text" name="name">
              </label>
            </p>
            <p>
              <label>
                Your Email:
                <input type="email" name="email">
              </label>
            </p>

            <p>
              <label>
                Message:
                <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
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
        controlArrows: false,
        licenseKey: 'aobwH@p8'
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

