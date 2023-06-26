<template>
  <carousel
    class="px-4"
    :autoWidth="true"
    :margin="20"
    :items="1"
    :stagePadding="10"
  >
    <div class="comment px-2">
      <v-card elevation="0" color="#F9F7F2" min-width="300px" max-width="300px">
        <div class="comment_user d-flex px-4 align-center">
          <v-img
            width="30px"
            height="30px"
            src="@/assets/images/commentAvatar.png"
          />
          <v-card-text>Наталия Полянская</v-card-text>
        </div>
        <div class="comment_content">
          <v-card-text>
            <span class="comment_city">БАРСЕЛОНА</span>— О городе:
          </v-card-text>
          <v-card-text>
            Барселона – моя третья большая любовь, после Вены и Крита. Это
            город, в который я каждый раз возвращаюсь с огромным удовольствием,
            всем рекомендую хоть раз там побывать и осмотреть ...
          </v-card-text>
          <div class="comment_images d-flex mx-auto px-4">
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group1
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group1
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group1
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group1
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
          </div>
          <v-card-actions
            class="d-flex justify-space-between align-center px-4"
          >
            <span class="comment_date">около 1 года назад</span>
            <span class="comment_amount">9 комментариев</span>
            <div class="comments_likes d-flex">
              <img src="@/assets/icons/like.svg" alt="" />
              <div class="pl-1" style="font-size: 11px; color: #9d9d9d">9</div>
            </div>
          </v-card-actions>
        </div>
      </v-card>
    </div>
    <div class="comment px-2">
      <v-card elevation="0" color="#F9F7F2" min-width="300px" max-width="300px">
        <div class="comment_user d-flex px-4 align-center">
          <v-img
            width="30px"
            height="30px"
            src="@/assets/images/commentAvatar.png"
          />
          <v-card-text>Наталия Полянская</v-card-text>
        </div>
        <div class="comment_content">
          <v-card-text>
            <span class="comment_city">БАРСЕЛОНА</span>— О городе:
          </v-card-text>
          <v-card-text>
            Барселона – моя третья большая любовь, после Вены и Крита. Это
            город, в который я каждый раз возвращаюсь с огромным удовольствием,
            всем рекомендую хоть раз там побывать и осмотреть ...
          </v-card-text>
          <div class="comment_images d-flex mx-auto px-4">
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group2
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group2
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group2
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group2
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
          </div>
          <v-card-actions
            class="d-flex justify-space-between align-center px-4"
          >
            <span class="comment_date">около 1 года назад</span>
            <span class="comment_amount">9 комментариев</span>
            <div class="comments_likes d-flex">
              <img src="@/assets/icons/like.svg" alt="" />
              <div class="pl-1" style="font-size: 11px; color: #9d9d9d">9</div>
            </div>
          </v-card-actions>
        </div>
      </v-card>
    </div>
    <div class="comment px-2">
      <v-card elevation="0" color="#F9F7F2" min-width="300px" max-width="300px">
        <div class="comment_user d-flex px-4 align-center">
          <v-img
            width="30px"
            height="30px"
            src="@/assets/images/commentAvatar.png"
          />
          <v-card-text>Наталия Полянская</v-card-text>
        </div>
        <div class="comment_content">
          <v-card-text>
            <span class="comment_city">БАРСЕЛОНА</span>— О городе:
          </v-card-text>
          <v-card-text>
            Барселона – моя третья большая любовь, после Вены и Крита. Это
            город, в который я каждый раз возвращаюсь с огромным удовольствием,
            всем рекомендую хоть раз там побывать и осмотреть ...
          </v-card-text>
          <div class="comment_images d-flex mx-auto px-4">
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group3
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group3
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group3
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group3
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
          </div>
          <v-card-actions
            class="d-flex justify-space-between align-center px-4"
          >
            <span class="comment_date">около 1 года назад</span>
            <span class="comment_amount">9 комментариев</span>
            <div class="comments_likes d-flex">
              <img src="@/assets/icons/like.svg" alt="" />
              <div class="pl-1" style="font-size: 11px; color: #9d9d9d">9</div>
            </div>
          </v-card-actions>
        </div>
      </v-card>
    </div>
    <div class="comment px-2">
      <v-card elevation="0" color="#F9F7F2" min-width="300px" max-width="300px">
        <div class="comment_user d-flex px-4 align-center">
          <v-img
            width="30px"
            height="30px"
            src="@/assets/images/commentAvatar.png"
          />
          <v-card-text>Наталия Полянская</v-card-text>
        </div>
        <div class="comment_content">
          <v-card-text>
            <span class="comment_city">БАРСЕЛОНА</span>— О городе:
          </v-card-text>
          <v-card-text>
            Барселона – моя третья большая любовь, после Вены и Крита. Это
            город, в который я каждый раз возвращаюсь с огромным удовольствием,
            всем рекомендую хоть раз там побывать и осмотреть ...
          </v-card-text>
          <div class="comment_images d-flex mx-auto px-4">
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group4
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group4
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group4
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group4
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
          </div>
          <v-card-actions
            class="d-flex justify-space-between align-center px-4"
          >
            <span class="comment_date">около 1 года назад</span>
            <span class="comment_amount">9 комментариев</span>
            <div class="comments_likes d-flex">
              <img src="@/assets/icons/like.svg" alt="" />
              <div class="pl-1" style="font-size: 11px; color: #9d9d9d">9</div>
            </div>
          </v-card-actions>
        </div>
      </v-card>
    </div>
    <div class="comment px-2">
      <v-card elevation="0" color="#F9F7F2" min-width="300px" max-width="300px">
        <div class="comment_user d-flex px-4 align-center">
          <v-img
            width="30px"
            height="30px"
            src="@/assets/images/commentAvatar.png"
          />
          <v-card-text>Наталия Полянская</v-card-text>
        </div>
        <div class="comment_content">
          <v-card-text>
            <span class="comment_city">БАРСЕЛОНА</span>— О городе:
          </v-card-text>
          <v-card-text>
            Барселона – моя третья большая любовь, после Вены и Крита. Это
            город, в который я каждый раз возвращаюсь с огромным удовольствием,
            всем рекомендую хоть раз там побывать и осмотреть ...
          </v-card-text>
          <div class="comment_images d-flex mx-auto px-4">
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group5
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group5
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group5
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
            <img
              max-width="50px"
              max-height="50px"
              class="mr-2 comment_img"
              v-img:group5
              src="@/assets/images/barcelona.jpg"
              alt=""
            />
          </div>
          <v-card-actions
            class="d-flex justify-space-between align-center px-4"
          >
            <span class="comment_date">около 1 года назад</span>
            <span class="comment_amount">9 комментариев</span>
            <div class="comments_likes d-flex">
              <img src="@/assets/icons/like.svg" alt="" />
              <div class="pl-1" style="font-size: 11px; color: #9d9d9d">9</div>
            </div>
          </v-card-actions>
        </div>
      </v-card>
    </div>
  </carousel>
</template>

<script>
import carousel from "vue-owl-carousel";
import VueImg from "v-img";
import Vue from "vue";

Vue.use(VueImg);

export default {
  components: {
    carousel,
  },
};
</script>

<style lang="sass" scoped>
.owl-nav
  display: none
.comment
  min-width: 300px
  max-width: 300px
  &_city
    color: #FC4F1E
  &_date, &_amount, &_likes
    font-size: 11px
    color: #9D9D9D
  &_img
    width: 50px
    height: 50px
</style>
