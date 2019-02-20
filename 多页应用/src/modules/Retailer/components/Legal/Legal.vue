<template>
    <section class="legal" v-if="legalData">

        <div class="legal-btn" @click="showLegal"><p>{{legalData.buttonLabel}}</p></div>

        <div class="legal-content">
			<div class="legal-container legal-container-desk">
				<div class="swiper-content">
					<div
						id="swiper-wrapper"
						class="swiper-container"
						ref="mySwiper"
					>
						<div class="swiper-slide">
							<p  v-for="(data, index) in legalData.content" :key="index" v-html="data" class="legalContent"></p>
						</div>
					</div>
				</div>
				<p class="close" @click="hideLegal">X</p>
			</div>
		</div>
    </section>
</template>
<script type="text/javascript" src="./Legal.js"></script>
<style lang="scss">
    @import "./Legal.scss";
</style>

