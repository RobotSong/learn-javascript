<template>
  <div class="pay-app">
    <header class="header">
      <div class="header-text">付款给{{ merchantName }}</div>
      <div class="header-img">
        <img :src="headerImg" alt />
      </div>
    </header>

    <div class="plus-input" @click="keyboradShow = true">
      <div class="S" @click="amountIndex = -1">
        <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI5IDQwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojMWExMzExO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iYSIgZD0iTTI0MDYuMDQ1LDQzODYuMjYxaC03LjY3MmwtNi44MjgsMTQuMzk1LTYuODI4LTE0LjM5NWgtNy42NzJsOS40MzksMTkuOUgyMzc5LjN2NS4zaDguNTE2djMuNTE1SDIzNzkuM3Y1LjNoOC41MTZ2NS45ODRoNy40NTF2LTUuOTg0aDguNTE2di01LjNoLTguNTE2di0zLjUxNWg4LjUxNnYtNS4zaC03LjE4MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMzc3LjA0NSAtNDM4Ni4yNjEpIi8+PC9zdmc+"
            alt=""
        />
      </div>
      <div class="ttt">
        <div
            v-show="amountIndex === -1"
            class="input-c-div"
            :style="'background: rgb(7, 193, 96);' + 'visibility: ' + (amountIndex === -1 ? 'visible' : 'hidden' ) + ';'"
        ></div>
      </div>
      <div class="input-c" v-for="(t, i) in amountArr" :key="i" @click="amountIndex = i">
        <div class="input-c-div-1">{{ t }}</div>
        <div
            class="input-c-div"
            :style="'background: rgb(7, 193, 96);' + 'visibility: ' + (amountIndex === i ? 'visible' : 'hidden' ) + ';'"
        ></div>
      </div>

      <div class="placeholder" v-show="amountIndex < 0 && amountArr.length === 0">请输入金额</div>
    </div>

    <ul class="plus-ul">
      <li class="plus-li">
        <div class="img-div">
          <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6dXJsKCNhKTt9LmJ7Y2xpcC1wYXRoOnVybCgjYik7fS5je2ZpbGw6I2ZmZjVjZTt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxIiB4Mj0iMC4wMjciIHkyPSIwLjk3NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYzYyYSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYWMwNiIvPjwvbGluZWFyR3JhZGllbnQ+PGNsaXBQYXRoIGlkPSJiIj48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjQyIiBoZWlnaHQ9IjQyIiByeD0iOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAgNjM5KSIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsYXNzPSJiIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAgLTYzOSkiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHJ4PSI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MCA2MzkpIi8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45NjYsIC0wLjI1OSwgMC4yNTksIDAuOTY2LCAtNTYxNS4yNTMsIC0yNjgxLjk1NikiPjxwYXRoIGNsYXNzPSJjIiBkPSJNNDY0OC4xMjQsNDcxNi4xODF2LTUuODY2YS44MjcuODI3LDAsMCwwLS42LS44LDUuMjA1LDUuMjA1LDAsMCwxLDAtMTAuMDEzLjgwNy44MDcsMCwwLDAsLjYtLjh2LTUuODI1YTMuODQ3LDMuODQ3LDAsMCwwLTMuODEzLTMuODgzaC0zMC41YTMuODQ3LDMuODQ3LDAsMCwwLTMuODEzLDMuODgzdjUuODY1YS44MjcuODI3LDAsMCwwLC42LjgsNS4yMDYsNS4yMDYsMCwwLDEsMCwxMC4wMTUuODA3LjgwNywwLDAsMC0uNi44djUuODI1YTMuODQ3LDMuODQ3LDAsMCwwLDMuODEzLDMuODgzaDMwLjVhMy44NDcsMy44NDcsMCwwLDAsMy44MTMtMy44ODNabS0yNC43OC0xNC4yNDRhMS45MywxLjkzLDAsMCwxLTEuOTA2LTIuMDY1LDEuOTY3LDEuOTY3LDAsMCwxLDEuOTY3LTEuODE4aDExLjNhMS45NTIsMS45NTIsMCwwLDEsMS45NjYsMS44MTgsMS45MTksMS45MTksMCwwLDEtMS45MDcsMi4wNjVabTExLjQzNyw5LjA3NEg0NjIzLjRhMS45NTIsMS45NTIsMCwwLDEtMS45NjctMS44MTksMS45MTgsMS45MTgsMCwwLDEsMS45MDYtMi4wNjRoMTEuMzc3YTEuOTUyLDEuOTUyLDAsMCwxLDEuOTY2LDEuODE4LDEuOTMsMS45MywwLDAsMS0xLjkwNywyLjA2NVptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIvPjwvZz48L2c+PC9zdmc+"
              alt=""
          />
          <div class="div-text">优惠券</div>
        </div>
        <div class="div-go">
          <div class="div-go-div">暂无可用</div>
          <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAC2ElEQVRoQ+3YsWsTURwH8O/vchGlY4WKQ5cK4h+gQxUHB5cqVSotFnQIaa/JCZpuokJGB00dKs1dUo6iiEQHR4cOdnBQUXARRKwONZEqNoKc0Lx7P3lwgSJa6OUu3EFuTu4+973H7/1+j5DAixJoRg/dra/WS7qX9DYJBF4elmWlNU0blVI+Mwzje7dSVs8JhHYcZ3er1Zpj5vMA7gkhrpqm+atb8EBo27bHmLkMYK8Pveu67vVCodDsBjwQular7drY2LjIzDeJqN+H3pdS3sjlcp+jhgdCK1StVks1m82TzOwAGAAgiOipruuZTCbzLUp4YLRCMTPZtn0OwB0A+33oshDigmmaX6OCd4RuwxcXF095njcHYMiHrhDRlenp6bfq3cLGd4xug2zbPszMSwAOAZDM/CaVSo1PTU19ii1awcrl8nEANhEd9L/Ceynl6Pr6+odisSjDwoeWdBu0sLBwRNO02wCO+fB3RHSp0WishAUPHa2g1Wr1gBDCIqIT/ppelVJO5nK5l2GkHQlawSzLGlJrXNO0YVVlmPmnrusja2trL4rFougEHxnahw8ysyqHo0SkAfgCoADgiWEYraDwSNEK5TjOvs3NTVUOxwEouNp4TMMwHsUWrWDz8/P9uq5Xieg0gBQAj5kN13UfzM7O/t4pPvKk2yDLsgYBvN7SZNWFEGdM03wVS/SWpE8B0P3NJ+u67sNYJl2pVAaYWfXeE+01zcz5mZmZxztNuP37SJeHvyRuMfOYqh7M3CCiy7GtHu06TUTDakJSdVqNZ/V6/Xks63TidkS/2yslpveoVqtHpZQVZlbtqbo+ep43Etsu71/9tJRyIp/PrwatEv/7X8fVQzVDiZpcEjcjJm4aT+S5RyJPmEql0p6+vj41B04CWBJCXIv9WZ4/laSllGfT6fRyNpv9EXZZ2+5+HZe8bmK70uVF9UK9pKNK9u/79pLuJb1NAn8A8K+WPZN5E+cAAAAASUVORK5CYII="
              alt=""
          />
        </div>
      </li>

      <li class="border-radius-top">
        <div class="img-div">
          <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6dXJsKCNhKTt9LmJ7ZmlsbDojZTdmZmU2O30uY3tjbGlwLXBhdGg6dXJsKCNiKTt9LmR7Y2xpcC1wYXRoOnVybCgjZCk7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMSIgeDI9IjAiIHkyPSIxIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMTBkODMyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBhYzM0Ii8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImIiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHJ4PSI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MCA3ODMpIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImQiPjxyZWN0IGNsYXNzPSJiIiB3aWR0aD0iMzcuMjMzIiBoZWlnaHQ9IjMzLjA5NiIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsYXNzPSJjIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAgLTc4MykiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHJ4PSI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MCA3ODMpIi8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45NjYsIC0wLjI1OSwgMC4yNTksIDAuOTY2LCAtNTY0MS41NTEsIC0yNTI3LjQ3KSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDY0MiA0Njg1KSI+PGcgY2xhc3M9ImQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGNsYXNzPSJiIiBkPSJNNDY1NS40MTMsNDcwNi4xNzNhMS4xNjcsMS4xNjcsMCwwLDEtLjU1OC4xMywxLjIxOSwxLjIxOSwwLDAsMS0xLjA4LS42NWwtLjA4OC0uMTctMy40LTcuNDU5YS42NDIuNjQyLDAsMCwxLC41NjQtLjg2Ny42ODguNjg4LDAsMCwxLC4zODcuMTI5bDQuMDA4LDIuODYzYTIuMDg1LDIuMDg1LDAsMCwwLDEuMDMzLjMsMS42NzcsMS42NzcsMCwwLDAsLjY0Ni0uMTNsMTguNzk1LTguNDA4YTE5Ljg1MSwxOS44NTEsMCwwLDAtMTUuMjE1LTYuNTkyYy0xMC4yNTksMC0xOC42MjEsNi45OC0xOC42MjEsMTUuNmExNC43MzEsMTQuNzMxLDAsMCwwLDYuNDIxLDExLjc4OSwxLjI4OSwxLjI4OSwwLDAsMSwuNTE1LDEsMS4xOTQsMS4xOTQsMCwwLDEtLjA4Ny4zODljLS4zLDEuMTY4LS44MiwzLjA3OS0uODIsMy4xNjNhMS41NSwxLjU1LDAsMCwwLS4wODguNDc4LjU5LjU5LDAsMCwwLC42LjYwNy40OS40OSwwLDAsMCwuMzQ2LS4xMjlsNC4wNS0yLjM4NWEyLjA1MiwyLjA1MiwwLDAsMSwuOTkxLS4zLDIuMywyLjMsMCwwLDEsLjU1Ny4wODgsMjEuNTc5LDIxLjU3OSwwLDAsMCw2LjA4Mi44NjdjMTAuMjU2LDAsMTguNjIxLTYuOTgsMTguNjIxLTE1LjZhMTMuNzYzLDEzLjc2MywwLDAsMC0yLjExMi03LjI0bC0yMS40MTcsMTIuNDM5Wm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NjQxLjg4NiAtNDY4NS4zMDIpIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="
              alt=""
          />
          <div class="div-text">微信支付</div>
        </div>
        <div class="pitch-on">
          <div class="pitch-on-ok" style="">
            <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNi4xMDMiIHZpZXdCb3g9IjAgMCAyMiAxNi4xMDMiPjxwYXRoIGQ9Ik0tNDI1OCwxNC4wOWgwbC02LTYuMDM4LDItMi4wMTMsNiw2LjAzOEwtNDI0NCwwbDIsMi4wMTMtMTQsMTQuMDlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjY0KSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
                alt=""
            />
          </div>
          <div class="pitch-on-on" style="display: none"></div>
        </div>
        <div class="xian"></div>
      </li>
    </ul>

    <!-- 金额输入框 -->
    <div class="keyboard-plus">
      <div class="keyboard">
        <div class="keyboard-top">
          <div class="triangle-topleft-k"></div>
          <div class="keyboard-tite">@XXX</div>
          <div class="triangle-topleft-k" @click="keyboradShow = !keyboradShow">
            <div
                class="triangle-topleft"
                :style="
                keyboradShow
                  ? ''
                  : 'transform: rotate(-135deg); margin-top: 12px;'
              "
            ></div>
          </div>
        </div>
        <div
            v-show="keyboradShow"
            class="keyboard-main"
            style="transition: all 1s ease 0s"
        >
          <div class="keyborad-key">
            <div class="number" @click="handleAmount('1')">
              1
            </div>
            <div class="number" @click="handleAmount('2')">
              2
            </div>
            <div class="number" @click="handleAmount('3')">
              3
            </div>
            <div class="number" @click="handleAmount('del')">
              <img
                  src="data:image/png;base64,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"
                  alt=""
              />
            </div>
          </div>
          <div class="keyborad-key">
            <div class="number" @click="handleAmount('4')">
              4
            </div>
            <div class="number" @click="handleAmount('5')">
              5
            </div>
            <div class="number" @click="handleAmount('6')">
              6
            </div>
          </div>
          <div class="keyborad-key">
            <div class="number" @click="handleAmount('7')">
              7
            </div>
            <div class="number" @click="handleAmount('8')">
              8
            </div>
            <div class="number" @click="handleAmount('9')">
              9
            </div>
          </div>
          <div class="keyborad-key">
            <div class="number" @click="handleAmount('.')">
              <div class="dot"></div>
            </div>
            <div class="number zero" @click="handleAmount('0')">0</div>
          </div>
        </div>
        <div
            :class="[
            keyboradShow ? 'payment' : 'paymentConceal',
            amountArr.length === 0 ? 'opacityS' : '',
          ]"
            style="background: rgb(7, 193, 96)"
            @click="toPay"
        >
          <div>付款</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PayAggregate",
  data() {
    return {
      merchantName: "XXX",
      headerImg: "",
      inAlTimer: null,
      amountArr: [], // 金额数组
      amountIndex: -1, // 输入金额光标的下标
      keyboradShow: true, // 是否显示小键盘
    };
  },
  created() {
  },
  beforeDestroy() {
  },
  methods: {
    handleAmount(type) {

      // 删除的优先级最高， 如果点击的是 删除
      if (type === 'del') {
        if (this.amountIndex < 0 || this.amountArr.length === 0) {
          // 光标前面没有掉线，删除了，则不处理
          return
        }
        this.amountArr.splice(this.amountIndex, 1);
        this.amountIndex--;
        return
      }
      let dotIndex = -1; //小数点下标
      for (let i = 0; i < this.amountArr.length; i++) {
        if (this.amountArr[i] === '.') {
          dotIndex = i
        }
      }
      // 如果存在小数点，并且当前输入的位置是在小数点后两位，则直接忽略
      if (dotIndex > -1 && dotIndex + 2 === this.amountIndex) {
        return
      }

      // 如果点击的是 0
      if (type === '0') {
        if (this.amountArr.length > 0 && this.amountIndex < 0) {
          // 如果已经存在数字了，那么 ，则忽略第一位输入 0 的情况
          return
        }
      }


      // 如果不存在金额，并且输入的是小数点，则增加零和小数点
      if (this.amountArr.length === 0 && type === '.') {
        this.amountArr.unshift('0', '.')
        this.amountIndex = 1
        return
      }
      // 如果输入的是小数点，则需要特殊处理 ， 并且只能保留小数点后两位数字
      if (type === '.') {
        // 如果小数点的位置在 首位，则先在前面加个 0
        if (this.amountIndex === -1) {
          this.amountArr.splice(0, 0, '0');
          this.amountIndex++;
          if (dotIndex > -1) {
            dotIndex++;
          }
        }
        if (dotIndex === -1) {
          // 不存在小数点，则直接加上，并且只保留小数点后两位
          this.amountIndex++;
          this.amountArr.splice(this.amountIndex, 0, type);
          while (this.amountIndex + 2 < this.amountArr.length - 1) {
            this.amountArr.splice(this.amountIndex + 3, 1);
          }
          return
        }
        if(dotIndex <= this.amountIndex) {
          // 如果已经存在小数点了，并且输入的小数点在原来的小数点后面，则直接去掉后面的数字
          while (this.amountIndex < this.amountArr.length - 1) {
            this.amountArr.splice(this.amountIndex + 1, 1);
          }
          return
        } else {

          // 如果已经存在小数点，并且输入的小数点位置在前面，则先删除现在的小数点，并插入现在的位置，保留小数点后两位的数字
          this.amountArr.splice(dotIndex, 1);
          // 当前输入光标位置插入小数点
          this.amountIndex++;
          this.amountArr.splice(this.amountIndex, 0, type);
          // 保留两位小数点
          while (this.amountIndex + 2 < this.amountArr.length - 1) {
            this.amountArr.splice(this.amountIndex + 3, 1);
          }
          return
        }
      }
      // 当前的下标 + 1
      this.amountIndex++;
      this.amountArr.splice(this.amountIndex, 0, type);
      if (dotIndex > -1) {
        // 因为输入光标的位置已经 + 1
        if (dotIndex < this.amountIndex) {
          // 如果已经存在小数点，并且输入的光标在小数点后面， 保留两位小数点
          while (dotIndex + 2 < this.amountArr.length - 1) {
            this.amountArr.splice(dotIndex + 3, 1);
          }
        }
      }
    },

    toPay() {
      if (this.amountArr.length === 0) {
        console.log('请输入金额')
        return
      }
      // 最终支付的金额
      const amount = Number(this.amountArr.join(''));
      if (isNaN(amount)) {
        console.log('请输入正确的金额数字')
        return
      }
      console.log('最终输入的金额:', amount);
    }

  }
};
</script>

<style scoped>
@import "./index.css";
</style>