<template>
  <div class="about-block">
    <div class="container">
      <div class="about-block__main">
        <div class="about-block__content">
          <SectionHead :level="3" title="О компании" />
          <div class="content__txt">
            <p>
              Повседневная практика показывает, что постоянный количественный рост и сфера
              нашей активности способствует подготовке и реализации первоочередных
              требований. Идейные соображения высшего порядка, а также экономическая
              повестка сегодняшнего дня прекрасно подходит для реализации кластеризации
              усилий.
            </p>
            <p>
              Элементы политического процесса могут быть объединены в целые кластеры себе
              подобных. Кстати, диаграммы связей, которые представляют собой яркий пример
              континентально-европейского типа политической культуры, будут объективно
              рассмотрены соответствующими инстанциями.
            </p>
          </div>
          <div class="about-block__info">
            <div class="about-blockInfo__item">
              <p>236</p>
              <span>Отремонтированных помещений</span>
            </div>
            <div class="about-blockInfo__item">
              <p>6000</p>
              <span>Довольных клиентов</span>
            </div>
          </div>
        </div>
        <div class="about-block__img">
          <img src="/assets/img/home/big-logo.png" alt="" class="big-logo" />
          <img src="/assets/img/home/about.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHead from "../ui/SectionHead.vue";
</script>

<style scoped lang="scss"></style>
