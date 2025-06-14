<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
    <div class="fundo-fixo position-relative">
        <section class="overlay-content row">
            <div class="container">
                <div class="row">
                    <div class="text-start text-light d-flex justify-content-center align-items-center">
                    <h1>Seja um voluntário</h1>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <section class="row" >
        <div class="mb-4 pt-3 text-center fs-2 fw-semibold" style="color: rgba(29, 169, 122, 1);">
            Como me tornar um agente de mudança?
        </div>
        <div class="mb-5">
            <p class="mb-4">Para ser voluntário ESF-RIO, você precisará passar pelo nosso processo seletivo, que é aberto periodicamente, de acordo com as demandas da organização.</p>
            <p class="mb-4" style="color: #54595F;"><strong>Ah, não precisa ser exclusivamente engenheiro! Nossa rede é multidisciplinar!</strong></p>
            <p class="mb-4">Para receber as divulgações por e-mail e também os boletins informativos da ONG, cadastre-se na nossa newsletter! Dessa forma, você fica sabendo assim que abrirmos o processo externo.</p>
        </div>
    </section>

    <section class="row video-esf">
        <div class="mb-4 col-12 col-md-8">
            <p class="mb-4">O trabalho voluntário tem grande impacto na sociedade. Voluntariar-se é um ato de amor e, junto à engenharia, podemos construir um mundo melhor, pois todos nós temos um papel importante na sociedade. Existem 03 formas para ser voluntário ESF: Voluntário fixo, Voluntário doador e parceiro.</p>
            <p class="mb-4">Se você tem interesse em participar ativamente dos projetos ou gestão do ESF-Rio, assista o vídeo institucional do Engenheiros Sem Fronteiras Brasil e entenda um pouco como funciona nosso trabalho.</p>
        </div>
        <div class="mb-4 col-12 col-md-4">
            <video class="elementor-video" style="width: 100%; height: 100%;" controls="true" src="https://esf-rio.org/wp-content/uploads/2021/05/A-engenharia-que-transforma-vidas.mp4"  preload="metadata" controlslist="nodownload" poster="https://esf-rio.org/wp-content/uploads/2020/05/845a5473-objetivos_port.png"></video>
        </div>
    </section>

    <section class="cinza row">
        <div class="mb-4 col-12 col-md-4">
            <img class="image-overflow" decoding="async" src="https://esf-rio.org/wp-content/uploads/2021/05/Design-sem-nome-6-300x300.png" alt="">
        </div>
        <div class="mb-4 col-12 col-md-8">
            <h1 class="mb-4  fw-semibold pt-3" style="color: rgba(29, 169, 122, 1);">O que é ser voluntário?</h1>
            <p class="mb-4">Ser voluntário ESF-Rio é poder contribuir com o crescimento da sociedade, ganhar aprendizado e crescimento para nossa vida profissional e pessoal. Ser voluntário ESF-Rio é investir nosso tempo, doar nossa paixão em prol a um mundo melhor. Ser voluntário ESF-Rio é criar conexões, comprometimento  e ajudar a construir comunidades fortes e sustentáveis no Rio de Janeiro.</p>
        </div>
    </section>

    <section class="verde row">
        <div class="mb-4 col-12 col-md-6">
            <h1 class="mb-4 pt-5 text-light text-center fw-semibold" style="color: rgba(29, 169, 122, 1); font-size: 190%;">Você também pode ser um voluntário digital!</h1>
            <p class="text-light mb-4 pt-3">Se você está entusiasmado com nosso trabalho e deseja nos ajudar com a divulgação (curtindo, compartilhando), acompanhe nossas redes sociais.</p>
        </div>
        <div class="elementor-widget-container">
            <div class="elementor-social-icons-wrapper elementor-grid" role="list">
                <span class="elementor-grid-item" role="listitem">
                    <a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-f15fdfb" href="https://www.facebook.com/esf.riodejaneiro" target="_blank">
                        <span class="elementor-screen-only">Facebook</span>
                        <i class="fab fa-facebook"></i>
                    </a>
                </span>
            </div>
        </div>
        <div class="mb-4 col-12 col-md-6"></div> <!--vazia pra ocupar espaço lateral-->
    </section>
</template>

<style scoped>

.fundo-fixo {
    background-image: url("../assets/about/esf-people.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: absolute;
    overflow: hidden;
    padding: 0;
}

.overlay-content {
    background-color: rgba(29, 169, 122, 0.65);
    padding: 7rem 0;
}

.cinza {
    background-color: #F4F4F4;
}

.verde {
    background-color: #1DA879;
}

.video-esf {
    margin-bottom: 50px;
}

.image-overflow {
    margin-top: -50px; /* faz ela subir */
    z-index: 3;
    position: relative;
}

</style>
